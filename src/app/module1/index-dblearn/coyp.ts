// 项目使用的是Angular2,这是一个service。有关Angular2的写法我不做说明。
import {
    Injectable
  } from '@angular/core';
  
  @Injectable()
  export class WorkIndexedDBService {
    // 声明一些属性，name：数据库名,version：数据库版本
    // name和version发生变化，浏览器就会重新建一个新的indexedDB
    private name: string = 'test-docView';
    private version: number = 1;
    private db: any = null;
  
    constructor() {}
  
    // 打开并创建数据库
    public open(): Promise < any > {
      return new Promise < any > ((resolve, reject) => {
        // 打开indexedDB
        let req = indexedDB.open(this.name, this.version);
        // 打开DB成功后的回调
        req.onsuccess = function (event) {
  
          this.db = event.target.result;
  
          resolve();
        }.bind(this);
        // 此处说明.bind(this)，是为了把当前类的属性和方法传入req.onsuccess的这个function里。即：.bind(this)的this是指本类WorkIndexedDBService
        // 打开DB失败后的回调
        req.onerror = reject;
        // 打开新的数据库时，会回调此函数，改变name和version均会建立新的DB，所以都会发生此回调。
        req.onupgradeneeded = function (event) {
          // 如果版本升级要记得删除旧的数据库表再建立新的。
          this.db = event.target.result;
          let storeNames = this.db.objectStoreNames;
          if (storeNames && storeNames.length > 0) {
            for (let i = 0; i < storeNames.length; i++) {
              this.db.deleteObjectStore(storeNames[i])
            }
          }
          // 创建数据库表
          this.createViewDB();
        }.bind(this);
      });
    }
  
    // 关闭数据库
    public close(): void {
      this.db.close();
    }
  
    // 删除数据库
    public deleteDB(): Promise < any > {
      return new Promise < any > ((resolve, reject) => {
        // 先关闭连接再删
        this.close();
  
        let req = indexedDB.deleteDatabase(this.name);
  
        req.onsuccess = function (event) {
          this.db = null;
          resolve();
        }.bind(this);
  
        req.onerror = reject;
      });
    }
  
    // 添加数据
    // 注意：使用事务来做操作比较快。
    public insert(
      storeName: string,
      data: any
    ): Promise < any > {
      return new Promise < any > ((resolve, reject) => {
        let transaction = this.db.transaction(storeName, 'readwrite');
        let store = transaction.objectStore(storeName);
  
        let req = store.add(data);
  
        req.onsuccess = function (event) {
          resolve(req.result);
        };
  
        req.onerror = reject;
      });
    }
  
    // 批量添加数据
    public batchInsert(
      storeName: string,
      data: any[]
    ): Promise < any > {
      if (!data || data.length === 0) {
        return Promise.resolve();
      } else {
  
        let transaction = this.db.transaction(storeName, 'readwrite');
        let store = transaction.objectStore(storeName);
  
        return new Promise < null > ((resolve, reject) => {
            data.forEach(row => store.add(row));
            transaction.oncomplete = resolve;
            transaction.onerror = reject;
          })
          .catch((error) => {
            console.error('添加' + storeName + '表数据失败', error);
            return Promise.reject(error);
          });
      }
    }
  
    // 删除数据
    public workdelete(
      storeName: string,
      keyValue: any
    ): Promise < any > {
      return new Promise < any > ((resolve, reject) => {
        let transaction = this.db.transaction(storeName, 'readwrite');
        let store = transaction.objectStore(storeName);
  
        let req = store.delete(keyValue);
  
        req.onsuccess = resolve;
        req.onerror = reject;
      });
    }
  
    // 清楚全部数据
    public clearAllData(): Promise < any > {
      let storeNameList: Array < string > = new Array < string > ();
      let storeNames = this.db.objectStoreNames;
      if (storeNames && storeNames.length > 0) {
        for (let i = 0; i < storeNames.length; i++) {
          storeNameList.push(storeNames[i]);
        }
      }
      return Promise.all(
        storeNameList.map((storeName) => {
          return this.clear(storeName);
        })
      );
    }
  
    // 清空数据
    public clear(
      storeName: string
    ): Promise < any > {
      return new Promise < any > ((resolve, reject) => {
        let transaction = this.db.transaction(storeName, 'readwrite');
        let store = transaction.objectStore(storeName);
  
        let req = store.clear();
  
        req.onsuccess = resolve;
        req.onerror = reject;
      });
    }
  
    // 更新数据
    public update(
      storeName: string,
      data: any
    ): Promise < any > {
      return new Promise < any > ((resolve, reject) => {
        let transaction = this.db.transaction(storeName, 'readwrite');
        let store = transaction.objectStore(storeName);
  
        let req = store.put(data);
  
        req.onsuccess = resolve;
  
        req.onerror = reject;
      });
    }
  
    // 根据Key取得数据
    public selectByKey(
      storeName: string,
      keyValue: any
    ): Promise < any > {
      return new Promise < any > ((resolve, reject) => {
        let transaction = this.db.transaction(storeName, 'readonly');
        let store = transaction.objectStore(storeName);
  
        let req = store.get(keyValue);
  
        req.onsuccess = function () {
          resolve(req.result);
        }
        req.onerror = reject;
      });
    }
  
    // 根据索引取得数据
    public selectByIndex(
      storeName: string,
      indexName: string,
      indexValue: any
    ): Promise < any[] > {
      return new Promise < any[] > ((resolve, reject) => {
        let transaction = this.db.transaction(storeName, 'readonly');
        let store = transaction.objectStore(storeName);
        let index = store.index(indexName);
  
        let req = index.openCursor(indexValue);
        let result: any[] = new Array < any > ();
        req.onsuccess = function (event) {
          let cursor = event.target.result;
          if (cursor) {
            result.push(cursor.value);
            cursor.continue();
          } else {
            resolve(result);
          }
        }
        req.onerror = reject;
      });
    }
  
    // 批量合并数据
    public batchMerge(
      storeName: string,
      data: any[],
      delFlagColName ? : string,
      delFlagColName2 ? : string
    ): Promise < any > {
      if (!data || data.length === 0) {
        return Promise.resolve();
      } else {
  
        let transaction = this.db.transaction(storeName, 'readwrite');
        let store = transaction.objectStore(storeName);
  
        return new Promise < null > ((resolve, reject) => {
            data.forEach(row => {
              let keyPath = store.keyPath;
              let keyValue;
  
              if (typeof keyPath === 'string') {
                keyValue = row[keyPath];
              } else {
                keyValue = new Array();
                keyPath.forEach(key => {
                  keyValue.push(row[key]);
                });
                store.delete(keyValue);
                store.put(row);
              }
            });
            transaction.oncomplete = resolve;
            transaction.onerror = reject;
          })
          .catch((error) => {
            console.error('更新' + storeName + '表数据失败', error);
            return Promise.reject(error);
          });
      }
    }
  
    // 数据库初始化处理
    private createDB(): void {
      this.createConfigInfo();
      this.createStoreUserInfo();
      this.createStoreOrgInfo();
      this.createStoreUserOrgInfo();
    }
  
    // 创建系统配置表及索引
    private createConfigInfo(): void {
      let store = this.db.createObjectStore(
        'ConfigInfo', {
          keyPath: 'key'
        }
      );
    }
  
    // 创建用户表及索引
    private createStoreUserInfo(): void {
      let store = this.db.createObjectStore(
        'UserInfo', {
          keyPath: 'userId'
        }
      );
    }
  
    // 创建组织表及索引
    private createStoreOrgInfo(): void {
      let store = this.db.createObjectStore(
        'OrgInfo', {
          keyPath: 'orgId'
        }
      );
  
      store.createIndex(
        'parentOrgIdIndex', ['parentOrgId', 'displayOrder'], {
          unique: false
        }
      );
    }
  
    // 创建组织表及索引
    private createStoreUserOrgInfo(): void {
      let store = this.db.createObjectStore(
        'UserOrgInfo',
        // S zhuruifei 2017-08-14 通讯录数据结构变更
        {
          keyPath: 'personRoleId'
        }
        // E zhuruifei 2017-08-14 通讯录数据结构变更
      );
  
      store.createIndex(
        'orgIdIndex',
        'orgId', {
          unique: false
        }
      );
    }
  
    // 创建稿件浏览记录表
    private createViewDB(): void {
      let store = this.db.createObjectStore(
        'viewedDoc', {
          keyPath: 'docId'
        }
      );
  
      store.createIndex(
        'viewedDoc',
        'docId', {
          unique: true
        }
      );
    }
  
    // 批量查询稿件浏览信息
    judgeIfWatched(
      storeName: string,
      data: any[]
    ): Promise < any > {
      if (!data || data.length === 0) {
        return Promise.resolve();
      }
      return Promise.all(
          data.map((data) => {
            return this.selectByKey(storeName, data.docId)
              .then((res) => {
                if (res && res.docId) {
                  data.viewed = "1";
                }
  
                return Promise.resolve();
              })
          })
        )
        .catch((error) => {
          console.error(error);
          return Promise.reject(error);
        });
    }
  
    // 清除30天前的数据
    cleanViewDB() {
      this.open().then(() => {
        // 通过IDBDatabase得到IDBTransaction
        let transaction = this.db.transaction('viewedDoc', 'readonly');
  
        // 通过IDBTransaction得到IDBObjectStore
        let objectStore = transaction.objectStore("viewedDoc");
  
        // 打开游标，遍历customers中所有数据
        objectStore.openCursor().onsuccess = function (event) {
  
          let cursor = event.target.result;
          if (cursor) {
            let key = cursor.key;
            let rowData = cursor.value;
            var time1 = new Date(rowData.lastViewTime);
            var time2 = new Date();
            if (Math.abs(time2.getTime() - time1.getTime()) > 2592000000) { // 清除三十天前的数据
  
              this.workdelete('viewedDoc', cursor.key);
            }
            cursor.continue();
          }
        }.bind(this);
      })
    }
  }
  