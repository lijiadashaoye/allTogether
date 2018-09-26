import {
  Component,
  OnInit
} from "@angular/core";

@Component({
  selector: "app-js-learn",
  templateUrl: "./js-learn.component.html",
  styleUrls: ["./js-learn.component.css"]
})
export class JsLearnComponent implements OnInit {
  loginForm;
  num; // 用来传递index
  arrFns = [
    "includesFn",
    "forEachFn",
    "findFn",
    "findIndexFn",
    "mapFn",
    "someFn",
    "everyFn",
    "reduceFn",
    "filterFn",
    'moreArray'
  ];
  showData;

  constructor() {}
  ngOnInit() {}
  isClick(item, index) {
    this.num = index;
    this[item]();
  }
  // 判断一个数组是否包含一个指定的值，
  // 传参：（要查找的元素）；
  // 返回值：true或 false；
  includesFn() {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    this.showData = arr.includes(5);
  }
  // 每个元素执行一次提供的函数，
  // 传参：（callback(当前元素,索引，该数组)）；
  // 返回值：无；
  forEachFn() {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    arr.forEach((item, index) => {
      console.log("item:", item);
      console.log("index:", index);
      this.showData += item * 5;
    });
  }
  // 返回数组中满足提供的测试函数的第一个元素的值，
  // 传参：（callback(当前元素,索引，该数组)）；
  // 返回值：该元素；（[].findIndex()返回索引）
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
  // 传参：（callback(当前元素,索引，该数组)）；
  // 返回值：一个新数组，每个元素都是回调函数的结果；
  mapFn() {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let kk = arr.map((item, index) => {
      console.log("item:", item);
      console.log("index:", index);
      return item * 5;
    });
    this.showData = kk;
  }
  // 测试数组的某些元素是否都通过了指定函数的测试；
  // 传参：（callback(当前元素,索引，该数组)）；
  // 返回值：true或false；
  someFn() {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let kk = arr.some((item, index) => {
      console.log("item:", item);
      console.log("index:", index);
      return item > 8;
    });
    this.showData = kk;
  }
  // 测试数组的所有元素是否都通过了指定函数的测试；
  // 传参：（callback(当前元素,索引，该数组)）；
  // 返回值：true或false；
  everyFn() {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let kk = arr.every((item, index) => {
      console.log("item:", item);
      console.log("index:", index);
      return item < 6;
    });
    this.showData = kk;
  }
  // 对累加器和数组中的每个元素（从左到右）应用一个函数，将其减少为单个值；
  // 传参：（callback(累加器accumulator，当前元素,索引，该数组)）；
  // 返回值：函数累计处理的结果；
  reduceFn() {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let kk = arr.reduce((preVal, nowValue) => {
      console.log(preVal);
      console.log(nowValue);
      return preVal + nowValue;
    }, 10); // 可以添加第三个参数，作为初始累加值
    this.showData = kk;
  }
  // 创建一个新数组, 其包含通过所提供函数实现的测试的所有元素，
  // 传参：（callback(当前元素,索引，该数组)）；
  // 返回值：通过测试的元素的集合的数组；
  filterFn() {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let kk = arr.filter((item, index) => {
      console.log("item:", item);
      console.log("index:", index);
      return item < 6;
    });
    this.showData = kk;
  }

  moreArray() {
    let arr = [];
    for (let j = 0; j < 20; j++) {
      let num = Math.floor(Math.random() * 10);
      arr.push(num)
    }
    let arr2 = [];
    // 对数组数据进行再次分组
    for (let i = 0; i < arr.length; i += 4) {
      arr2.push(arr.slice(i, i + 4));
    }
    this.showData = arr2;
  }
<<<<<<< HEAD
  /************************************************************/
  arrFns2 = [
    'getMax_Min',
    'doubleCan',
    'zhengxu',
    'daoxu',
    'getRandom'
  ];
  num2 = null;
  arrFns2Result = null;
  isClick2(item, index) {
    this.num2 = index;
    this[item]();
  }
  getMax_Min() { // 取数组最大值和最小值的排序
    var arr = [10, 14, 3, 8, 1, 7];
    let arr2 = [];
    let arr3 = arr;
    let num = arr.length / 2;

    for (let i = 0; i < num; i++) {
      let max1 = Math.max(...arr3);
      let min1 = Math.min(...arr3);
      arr2.push(max1, min1);
      arr3 = arr3.filter(item => item != max1);
      arr3 = arr3.filter(item => item != min1);
    }
    this.arrFns2Result = arr2;
  }
  doubleCan() { // 函数嵌套函数，并集中调用
    function fn(a) {
      return function (b) {
        return a + b
      }
    }
    this.arrFns2Result = fn(3)(4);
  }
  zhengxu() {
    this.objectSort(true)
  }
  daoxu() {
    this.objectSort(false)
  }
  objectSort(how) {
    let arr = [{
        name: 'ffff',
        age: 51
      },
      {
        name: 'hjytjh',
        age: 61
      },
    ]
    this.arrFns2Result = arr.sort(toSort('age'));

    function toSort(type) {
      return function (obj1, obj2) {
        let val1 = obj1[type];
        let val2 = obj2[type];
        if (how) {
          return val1 - val2; // 正序
        } else {
          return val2 - val1; // 倒序
        }
      }
    }
  }
  getRandom() { // 随机获取数组项
    let arr = ['red', 'blue', 'green', 'yellow', 'pink'];

    function takeRandom(max, min) { // 获取指定区间随机数
      let num = max - min + 1;
      return Math.floor(Math.random() * num + min)
    };
    let num = takeRandom(3, 19);
    let num2 = arr[takeRandom(0, arr.length - 1)];
    this.arrFns2Result = num2
  }
=======

>>>>>>> 556d3f6dcac2acb9e8d740ed7be739171675d916
}
