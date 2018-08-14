import { Component, OnInit } from "@angular/core";
import { IndexDBService } from "./indexDB.service";

@Component({
  selector: "app-index-dblearn",
  templateUrl: "./index-dblearn.component.html",
  styleUrls: ["./index-dblearn.component.css"]
})
export class IndexDBLearnComponent implements OnInit {
  constructor(public DB: IndexDBService) {}
  tip;
  ngOnInit() {}
  openDB() {
    let myDB = {
      name: "indexDBLearn",
      version: 6,
      tableName: "firstTable",
      keyPath: "title",
      tableTata: {
        title: "",
        content: "",
        date: new Date().getTime()
      }
    };

    this.DB.openDB(myDB).subscribe(val => {
      if (val["type"] === "open") {
        this.tip = val;
      }
    });
  }

  getData(title) {
    this.DB.getData("firstTable", title).subscribe(val => {
      if (val["type"] === "get") {
        this.tip = val;
      }
    });
  }

  deleteData(keypath) {
    let tableName = "firstTable";
    let keyPath = keypath;
    this.DB.deleteData(tableName, keyPath).subscribe(val => {
      if (val["type"] === "delete") {
        this.tip = val;
      }
    });
  }
  update(content) {
    let tableName = "firstTable";
    let keyPath = "123";
    this.DB.update(tableName, keyPath, content).subscribe(val => {
      if (val["type"] === "update") {
        this.tip = val;
      }
    });
  }
  save(title, content) {
    let tableName = "firstTable";
    this.DB.loadView(tableName, title, content).subscribe(val => {
      if (val["type"] === "add") {
        this.tip = val;
      }
    });
  }
}
