import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-js-learn",
  templateUrl: "./js-learn.component.html",
  styleUrls: ["./js-learn.component.css"]
})
export class JsLearnComponent implements OnInit {
  arrFns = [
    "includesFn",
    "forEachFn",
    "findFn",
    "findIndexFn",
    "mapFn",
    "someFn",
    "everyFn",
    "reduceFn"
  ];
  showData;
  constructor() {}
  ngOnInit() {}
  isClick(item) {
    this[item]();
  }
  // 判断一个数组是否包含一个指定的值，传参：（要查找的元素）；返回值：true或 false；
  includesFn() {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    this.showData = arr.includes(5);
  }
  // 每个元素执行一次提供的函数，传参：（callback(当前元素,索引，该数组)）；返回值：无；
  forEachFn() {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    arr.forEach((item, index) => {
      console.log("item:", item);
      console.log("index:", index);
      this.showData += item * 5;
    });
  }
  // 返回数组中满足提供的测试函数的第一个元素的值，
  // 传参：（callback(当前元素,索引，该数组)）；返回值：该元素；（[].findIndex()返回索引）
  findFn() {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let kk = arr.find((item, index) => {
      console.log("item:", item);
      console.log("index:", index);
      return item > 7;
    });
    this.showData = "item:" + kk;
  }
  findIndexFn() {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let kk = arr.reverse().findIndex((item, index) => {
      console.log("item:", item);
      console.log("index:", index);
      return item < 3;
    });
    this.showData = "index:" + kk;
  }
  // 创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果。
  // 传参：（callback(当前元素,索引，该数组)）；返回值：一个新数组，每个元素都是回调函数的结果；
  mapFn() {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let kk = arr.map((item, index) => {
      console.log("item:", item);
      console.log("index:", index);
      return item * 5;
    });
    this.showData = kk;
  }
  // 测试数组的某些元素是否都通过了指定函数的测试；传参：（callback(当前元素,索引，该数组)）；返回值：true或false；
  someFn() {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let kk = arr.some((item, index) => {
      console.log("item:", item);
      console.log("index:", index);
      return item > 8;
    });
    this.showData = kk;
  }
  // 测试数组的所有元素是否都通过了指定函数的测试；传参：（callback(当前元素,索引，该数组)）；返回值：true或false；
  everyFn() {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let kk = arr.every((item, index) => {
      console.log("item:", item);
      console.log("index:", index);
      return item < 6;
    });
    this.showData = kk;
  }

  reduceFn() {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let kk = arr.reduce((preVal, nowValue) => {
      console.log(preVal);
      console.log(nowValue);
      return preVal + nowValue;
    }, 10); // 可以添加第三个参数，作为初始累加值
    this.showData = kk;
  }
}
