import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable()
export class IndexDBService {
  database = null;
  nex = new Subject();
  openDB(data): Observable<any> {
    let that = this;
    let tip;
    // open(数据库名字，版本号)
    var request = indexedDB.open(data.name, data.version);
    // 错误提示
    request.onerror = function(error) {
      tip = error;
      let data = {
        type: "open",
        data: tip
      };
      that.nex.next(data);
    };
    // 数据库打开成功
    request.onsuccess = function() {
      // 定义数据库对象
      that.database = this.result;
      tip = "打开数据库成功";
      let data = {
        type: "open",
        data: tip
      };
      that.nex.next(data);
    };
    // 更新数据库 只在数据库版本号不相同时调用
    request.onupgradeneeded = function() {
      // 在建表的时候 不需要每一次都创建
      tip = "数据库版本号不相同，更新数据库成功";
      // 获得到数据库对象IDBDatabase
      var db = this.result;
      // 设置表名
      // contains()判断数据库里是否有note这个表名
    //   if (!db.objectStoreNames.contains(data.tableName)) {
    //     // 建表
    //     var objectStore = db.createObjectStore(data.tableName, {
    //       keyPath: data.keyPath
    //     });
    //     // 创建表里面的字段 需要 至少传入两个参数
    //     // createIndex(字段的名字，该字段对应的内容)
    //     objectStore.createIndex(data.tableTata.title, data.tableTata.title);
    //     objectStore.createIndex(data.tableTata.content, data.tableTata.content);
    //     objectStore.createIndex(data.tableTata.date, data.tableTata.date);
    //   }
      let datas = {
        type: "open",
        data: tip
      };
      that.nex.next(datas);
    };
    return that.nex;
  }

  // 获得数据方法
  getData(tableName: string, title: string): Observable<any> {
    // 获得事务得对象
    var transaction = this.database.transaction([tableName], "readwrite");
    // 存放某一种类型的容器
    var objectStore = transaction.objectStore(tableName);
    // 获取数据方法(此处只通过keypath获取对应的一条数据)
    var getData = objectStore.get(title);
    let that = this;
    // 把结果放入回调函数中 方便使用
    getData.onsuccess = function(e) {
      let data = {
        type: "get",
        data: e.target.result
      };
      that.nex.next(data);
      console.log(data)
    };
   
    return that.nex;
  }
  // 删除数据方法
  deleteData(tableName, keyPath) {
    // 获得事务得对象
    var transaction = this.database.transaction([tableName], "readwrite");
    // 存放某一种类型的容器
    var objectStore = transaction.objectStore(tableName);
    // 删除数据(此处只通过keypath删除对应的一条数据)
    let request = objectStore.delete(keyPath);
    let that = this;
    request.onsuccess = function(e) {
      let data = {
        type: "delete",
        data: "成功删除数据"
      };
      that.nex.next(data);
    };
    return that.nex;
  }
  // 更新数据
  update(tableName, keyPath, content) {
    // 获得事务得对象
    var transaction = this.database.transaction([tableName], "readwrite");
    // 存放某一种类型的容器
    var objectStore = transaction.objectStore(tableName);

    var request = objectStore.get(keyPath);
    let that = this;
    request.onsuccess = function(e) {
      var student = e.target.result;
      if (student) {
        student.content = new Date().getTime();
        student.content = content;
        objectStore.put(student);
        let data = {
          type: "update",
          data: "成功更新数据！"
        };
        that.nex.next(data);
      }
    };
    return that.nex;
  }

  // 把输入的内容存储到浏览器中的方法
  loadView(tableName, title, content) {
    var timeStamp = new Date().getTime();
    // 调用添加数据方法，传入字面量对象
    return this.addData(tableName, {
      title: title,
      content: content,
      date: timeStamp
    });
  }
  // 添加数据的方法
  addData(tableName, info) {
    // 获得事务得对象
    var transaction = this.database.transaction([tableName], "readwrite");
    // 存放某一种类型的容器
    var objectStore = transaction.objectStore(tableName);
    // 添加数据
    var request = objectStore.add(info);
    let that = this;
    request.onsuccess = function(e) {
      let data = {
        type: "add",
        data: "成功添加数据！"
      };
      that.nex.next(data);
    };
    return that.nex;
  }
}
