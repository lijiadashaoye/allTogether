import { Component, OnInit } from "@angular/core";
import { Module1HttpService } from "../module1-http";
import { map } from "rxjs/operators";
import { Router, ActivatedRoute } from "@angular/router";
import { Title } from "@angular/platform-browser";

@Component({
  templateUrl: "./jsonServer.component.html",
  styleUrls: ["./jsonServer.component.css"]
})
export class JsonServerComponent implements OnInit {
  allDatas;
  nowDatas;
  datas;
  constructor(
    private actRout: ActivatedRoute,
    public route: Router,
    public http: Module1HttpService,
    public title: Title
  ) {}

  ngOnInit() {
    this.itGet();
    this.actRout.data.subscribe(val => {
      this.title.setTitle(val.title);
    });
  }

  itGet() {
    this.http.getData("module1data").subscribe(val => {
      this.allDatas = val;
      this.datas = val;
    });
  }
  itPost() {
    let obj = {
      email: "adjfajdf@qq.com",
      job: `job随机post-${(Math.random() * 100).toFixed(0)}`,
      name: `name随机post-${(Math.random() * 100).toFixed(0)}`,
      password: "123"
    };
    this.http
      .isPost(obj)
      .pipe(
        map(res => {
          return res;
        })
      )
      .subscribe(val => {
        this.datas = [val];
        this.itGet();
      });
  }
  itDelete() {
    let num = Math.floor(Math.random() * this.allDatas.length).toFixed(0);
    this.http
      .isDelete(this.allDatas[num].id)
      .pipe(
        map(res => {
          return res;
        })
      )
      .subscribe(val => this.itGet());
  }
  itPut() {
    let num = Math.floor(Math.random() * this.allDatas.length).toFixed(0);
    let obj = {
      email: "adjfajdf@qq.com",
      job: `job随机put-${(Math.random() * 100).toFixed(0)}`,
      name: `name随机put-${(Math.random() * 100).toFixed(0)}`,
      password: "1234"
    };
    this.http
      .isPut(obj, this.allDatas[num].id)
      .pipe(
        map(res => {
          return res;
        })
      )
      .subscribe(val => {
        this.datas = [val];
        this.itGet();
      });
  }
  itPatch() {
    let num = Math.floor(Math.random() * this.allDatas.length).toFixed(0);
    let obj = {
      job: `job随机patch-${(Math.random() * 100).toFixed(0)}`,
      name: `name随机patch-${(Math.random() * 100).toFixed(0)}`
    };
    this.http
      .isPatch(obj, this.allDatas[num].id)
      .pipe(
        map(res => {
          return res;
        })
      )
      .subscribe(val => {
        this.datas = [val];
        this.itGet();
      });
  }
  itSearch() {
    let num = Number(Math.random() * this.allDatas.length);
    let id = this.allDatas[parseInt(num.toString())];
    this.http
      .isSearch(id)
      .pipe(
        map(res => {
          return res;
        })
      )
      .subscribe(val => {
        this.itGet();
        this.datas = val;
      });
  }

  tip;
  search(names, jobs, ids, type) {
    let url;
    let name = names.value;
    let job = jobs.value;
    let id = ids.value;
    if (type !== "all") {
      switch (type) {
        case "name":
          if (!name) {
            this.tip = `输入name值`;
            return;
          }
          break;
        case "job":
          if (!job) {
            this.tip = `输入job值`;
            return;
          }
          break;
        case "sort":
          if (job || name) {
          } else {
            this.tip = `输入name或job值`;
            return;
          }
          break;
        case "id":
          if (!id) {
            this.tip = `输入id值`;
            return;
          }
          break;
        case "gte":
          if (!id) {
            this.tip = `输入id值`;
            return;
          }
          break;
        case "lte":
          if (!id) {
            this.tip = `输入id值`;
            return;
          }
          break;
        case "ne":
          if (!id) {
            this.tip = `输入id值`;
            return;
          }
          break;
        case "like":
          if (!name) {
            this.tip = `输入name值`;
            return;
          }
          break;
      }
    }
    this.tip = "";
    switch (type) {
      case "all":
        url = "http://localhost:3003/test";
        break;
      case "name":
        url = "http://localhost:3003/test" + `?name=${name}`;
        break;
      case "job":
        url = "http://localhost:3003/test" + `?job=${job}`;
        break;
      case "id":
        url = "http://localhost:3003/test" + `?id=${id}`;
        break;
      case "sort":
        if (name) {
          url = "http://localhost:3003/test" + `/?_sort=name,id&_order=asc`;
        }
        if (job) {
          url = "http://localhost:3003/test" + `/?_sort=job,id&_order=asc`;
        }
        break;
      case "like": // 等于...
        url = "http://localhost:3003/test" + `?name_like=${name}`;
        break;
      case "gte": // 大于...
        url = "http://localhost:3003/test" + `?id_gte=${id}`;
        break;
      case "lte": // 小于...
        url = "http://localhost:3003/test" + `?id_lte=${id}`;
        break;
      case "ne": // 不等于于...
        url = "http://localhost:3003/test" + `?id_ne=${id}`;
        break;
    }
    this.http.search(url).subscribe(val => {
      this.datas = val;
    });
  }
  between(id1, id2) {
    if (id1 && id2) {
      let url = "http://localhost:3003/test" + `?id_gte=${id1}&id_lte=${id2}`;
      this.http.search(url).subscribe(val => {
        this.datas = val;
      });
    } else {
      this.tip = `输入id值`;
    }
  }
}
