import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "app-index-dblearn",
  templateUrl: "./index-dblearn.component.html",
  styleUrls: ["./index-dblearn.component.css"]
})
export class IndexDBLearnComponent implements OnInit {

  constructor(
    private actRout: ActivatedRoute,
    public title: Title
  ) { }
  // 第一个参数是字符串，表示数据库的名字
  // 第二个参数是整数，表示数据库的版本
  request;
  db = null;
  ids: number = 1;
  log = [];
  datas = {};
  dataArr = []

  ngOnInit(): void {
    // 动态修改页面的title
    this.actRout.data.subscribe(val => {
      this.title.setTitle(val.title);
    });
  }
  closeDB() {
    this.db.close()
  }
  openDB() {
    // 第一个参数是数据库的名称，第二个参数是数据库的版本号
    this.request = window.indexedDB.open('test_DB', 1);
    this.request.onsuccess = (ev) => {
      this.db = ev.target['result']
      this.log.push('数据库打开成功')
    };
    // 当第一次创建数据库，或数据库升级时调用的事件
    // 第一次打开成功后或者版本有变化自动执行以下事件：一般用于初始化数据库。
    // 只有在onupgradeneeded事件中，才能创建和维护数据表(使用createObjectStore)
    this.request.onupgradeneeded = (ev) => {
      this.db = ev.target['result'];
      let str = `${ev.oldVersion} -- ${ev.newVersion}`;
      this.log.push('数据库版本变更' + str);

      let objectStore;
      if (!this.db.objectStoreNames.contains('person')) {
        // 如果数据记录里面没有合适作为主键的属性，那么可以让 IndexedDB 自动生成主键
        objectStore = this.db.createObjectStore('person', { keyPath: 'id', autoIncrement: true });

        // IDBObject.createIndex()的三个参数分别为索引名称、索引所在的属性、配置对象（说明该属性是否包含重复的值,索引属性值是否唯一）。
        objectStore.createIndex('name', 'name', { unique: false });
        // objectStore.createIndex('email', 'email', { unique: true });
      }
    }
  }
  // 新增数据 add
  add(age, name) {
    let request = this.db.transaction(['person'], 'readwrite')
      .objectStore('person')
      .add({ id: this.ids + 1, name: name, age: age });

    request.onsuccess = (event) => {
      this.log.push('数据写入成功')
      this.readAll()
    };

    request.onerror = (event) => {
      this.log.push('数据写入失败')
    }
  }
  // 读取数据 
  useId(id) {
    // objectStore.get()方法用于读取数据，参数是主键的值(keyPath)
    var request = this.db.transaction(['person'])
      .objectStore('person').get(+id);
    request.onerror = (event) => {
      this.log.push('事务失败')
    };

    request.onsuccess = () => {
      if (request.result) {
        this.datas = {
          name: request.result.name,
          age: request.result.age
        }
        this.log.push('通过id获取数据成功')
      } else {
        this.log.push('未获得数据记录')
      }
    };
  };

  // 游标查询
  useIndex(name) {
    var transaction = this.db.transaction(['person'], 'readonly');
    var store = transaction.objectStore('person');
    var index = store.index('name');
    var request = index.get(name);

    request.onsuccess = (e) => {
      var result = e.target.result;
      if (result) {
        this.log.push('通过索引获取数据成功')
        this.datas = result
      } else {
        this.log.push('数据获取不成功')
      }
    }
  }
  // 遍历数据
  readAll() {
    this.dataArr = []
    var objectStore = this.db.transaction('person').objectStore('person');
    // openCursor()方法是一个异步操作，所以要监听success事件。
    objectStore.openCursor().onsuccess = (event) => {
      var cursor = event.target.result;
      if (cursor) {
        // console.log('Id: ' + cursor.key);
        // console.log('Id: ' + cursor.value.id); // key 也是 id
        // console.log('Name: ' + cursor.value.name);
        // console.log('Age: ' + cursor.value.age);
        let obj = {
          id: cursor.value.id,
          name: cursor.value.name,
          age: cursor.value.age,
        }
        this.dataArr.push(obj)
        this.ids = cursor.value.id;
        cursor.continue();
      } else {
        this.log.push('没有更多数据了！')
      }
    };
  }
  // 更新数据 put
  update(id, name, age) {
    var request = this.db.transaction(['person'], 'readwrite')
      .objectStore('person')
      .put({ id: +id, name: name, age: age });
    request.onsuccess = (event) => {
      this.log.push('数据更新成功')
      this.readAll()
    };
    request.onerror = (event) => {
      this.log.push('数据更新失败')
    }
  }
  // 删除数据
  deleteData(id) {
    var request = this.db.transaction(['person'], 'readwrite')
      .objectStore('person')
      .delete(+id);
    request.onsuccess = (event) => {
      this.log.push('数据删除成功')
      this.readAll()
    };
  }
}