import {
  Component,
  OnInit,
  ElementRef,
  Renderer2,
  ViewChild,
  ChangeDetectorRef,
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
    'forFn',
    "findFn",
    "findIndexFn",
    "mapFn",
    "someFn",
    "everyFn",
    "reduceFn",
    "filterFn",
    "moreArray",
    'fenzu',
    'daoxubianli'
  ];
  showData;
  constructor(
    private elem: ElementRef,
    private rd: Renderer2,
    private ch: ChangeDetectorRef) { }

  jsMediaData;   // 如果点击按钮多次，会生成多个媒体监听
  jsMedia() {
    let that = this;
    let mql = window.matchMedia('(max-width: 1000px)');
    // mql.onchange = (e) => {
    //   // console.log(e)
    //   that.jsMediaData = e.matches;
    //   that.ch.detectChanges()
    // }
  }

  ngOnInit() {
    this.times();
    // this.autoAudio();
    // console.log(11_22_23) // 对数字进行分隔，方便人阅读
  }

  isClick(item, index) {
    this.num = index;
    this[item]();
  }
  toReload() {
    window.location.reload()
  }
  // 实现后台播放音频
  isAudio = null;
  autoAudio() {
    this.isAudio = new Audio();
    this.isAudio.src = "http://music.taihe.com/song/670342289?isshare=1";
    this.isAudio.play();
  }
  // 停止播放
  stopAudio() {
    this.isAudio.pause();
  }

  speak(text) {
    // http://www.mathguide.de/info/tools/languagecode.html
    var msg = new SpeechSynthesisUtterance();
    var voices = window.speechSynthesis.getVoices();
    msg.voice = voices[10];
    msg.volume = 1; // 0 to 1  声音控制
    msg.rate = 1; // 0.1 to 10  速度控制
    msg.pitch = 2; //0 to 2  音调控制
    msg.text = text;
    ['zn', 'en'].forEach(str => {
      msg.lang = str;
      speechSynthesis.speak(msg);
    })

    msg.onend = (event: any) => {
      console.log(event)
      console.log('Finished in ' + event.elapsedTime + ' seconds.');
    };


  }

  /*******************************************************************/
  // 判断一个数组是否包含一个指定的值，
  // 传参：（要查找的元素）；
  // 返回值：true 或 false；
  includesFn() {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    this.showData = arr.includes(5);
  }
  /*******************************************************************/
  // 每个数组元素执行一次提供的函数，
  // 传参：（callback(当前元素，索引，该数组)）；
  // 返回值：无；
  forEachFn() {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    arr.forEach((item, index) => {
      console.log("item:", item);
      console.log("index:", index);
      this.showData += item * 5;
    });
  }
  // for循环可以被终止，而forEach不可以
  forFn() {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let i = arr.length; i--;) {
      console.log(i)
      if (arr[i] < 5) {
        break;
      }
    }
  }
  /*******************************************************************/
  // 返回数组中满足提供的测试函数的第一个元素的值，
  // 传参：（callback(当前元素，索引，该数组)）；
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
  /*******************************************************************/
  // 创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果。
  // 传参：（callback(当前元素，索引，该数组)）；
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
  /*******************************************************************/
  // 测试数组的某些元素是否都通过了指定函数的测试；
  // 传参：（callback(当前元素，索引，该数组)）；
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
  /*******************************************************************/
  // 测试数组的所有元素是否都通过了指定函数的测试；
  // 传参：（callback(当前元素，索引，该数组)）；
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
  /*******************************************************************/
  // 对累加器和数组中的每个元素（从左到右）应用一个函数，将其减少为单个值；
  // 传参：（callback(累加器accumulator，当前元素，索引，该数组)）；
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
  /*******************************************************************/
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
  /*******************************************************************/
  moreArray() { // 二维数组
    let arr = [];
    for (let j = 0; j < 20; j++) {
      let num = Math.floor(Math.random() * 10);
      arr.push(num);
    }
    let arr2 = [];
    // 对数组数据进行再次分组
    for (let i = 0; i < arr.length; i += 4) {
      arr2.push(arr.slice(i, i + 4));
    }
    this.showData = arr2;
  }
  fenzu() { // 对数组分组
    let arrs = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    let arr3 = [];
    for (let i = 0, len = arrs.length; i < len; i += 3) {
      let arr2 = [];
      arr2.push(arrs.slice(i, i + 3))
      arr3.push(arr2)
    }
    this.showData = arr3
  }
  daoxubianli() {
    // 使用更少的代码实现固定长度数据的遍历
    let arr = [];
    let arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let i = arr4.length; i--;) {
      if (i < 5) {
        arr.push(i)
      }
      console.log(i)
    }
    this.showData = arr4
  }
  // 字符串截取并添加新内容 
  fromString = '3234423421.2323432';
  subString = '';
  subString2 = '';
  subNum = 3;
  jiequString(): void {
    var newStr = "";
    var count = 0;
    let num = this.fromString.indexOf("."); // 找到小数点的索引
    for (var i = num - 1; i >= 0; i--) {
      if (count % this.subNum === 0 && count != 0) {
        newStr = this.fromString.charAt(i) + "," + newStr; //碰到3的倍数则加上“,”号
      } else {
        newStr = this.fromString.charAt(i) + newStr; //逐个字符相接起来
      }
      count++;
    }
    this.subString = newStr + this.fromString.substr(num);
  }

  jiequ() {
    let reg = /\.+/g,
      point = '',
      kk = '',
      num = this.subNum,
      str = this.fromString; // 将输入数据格式化为字符串
    // 判断是否存在小数点
    if (reg.test(str)) {
      point = str.substring(str.indexOf('.'));
      str = str.substr(0, str.indexOf('.'));
    }
    // 判断要截取的位数与字符串的长度
    if (num >= str.length) {
      this.subString2 = str + point;
    } else {
      // 遍历字符串格式化数据
      for (let i = str.length - num; i >= 0; i -= num) {
        kk = ',' + str.substr(i, num) + kk;
        if (i - num < 0) {
          kk = str.substr(0, i) + kk;
        }
      }
      // 去除索引0处有可能的逗号
      if (kk.charAt(0) === ',') {
        this.subString2 = kk.substr(1) + point;
      } else {
        this.subString2 = kk + point;
      }

    }

  }
  /************************************************************/
  // 定义要使用的函数名
  arrFns2 = [
    "getMax_Min",
    "qiantao",
    "zhengxu",
    "daoxu",
    "getRandom",
    'getNum',
    'binds'
  ];
  num2 = null;
  arrFns2Result = null;
  isClick2(item, index) {
    this.num2 = index;
    this[item]();
  }
  getMax_Min() {
    // 取数组最大值和最小值的排序
    var arr = [10, 14, 3, 8, 1, 7];
    let arr2 = [];
    let arr3 = arr;
    let num = arr.length / 2;

    for (let i = 0; i < num; i++) {
      let max = Math.max(...arr3);
      let min = Math.min(...arr3);
      arr2.push([max, min]);
      arr3 = arr3.filter(item => item != max);
      arr3 = arr3.filter(item => item != min);
    }
    this.arrFns2Result = arr2;
  }
  qiantao() {
    // 函数嵌套函数，并集中调用
    function fn(a) {
      return function (b) {
        return a + b;
      };
    }
    this.arrFns2Result = fn(3)(4);
  }
  zhengxu() {
    this.objectSort(true);
  }
  daoxu() {
    this.objectSort(false);
  }
  objectSort(how) {
    let arr = [{
      name: "ffff",
      age: 51
    },
    {
      name: "hjytjh",
      age: 61
    }
    ];
    this.arrFns2Result = arr.sort(toSort("age"));

    function toSort(type) {
      return function (obj1, obj2) {
        let val1 = obj1[type];
        let val2 = obj2[type];
        // sort函数中，小括号如果是可以作为true的结果（布尔true，大于零的值），则是把后边的（obj2）放在前头
        // 比较函数接收两个参数，如果第一个参数应该位于第二个之前则返回一个负数，如果两个参数相等,则返回 0，
        // 如果第一个参数应该位于第二个之后则返回一个正数。
        if (how) {
          return val1 - val2; // 正序
        } else {
          return val2 - val1; // 倒序
        }
      };
    }
  }
  getRandom() {
    // 随机获取数组项
    let arr = ["red", "blue", "green", "yellow", "pink"];
    let takeRandom = (max, min) => {
      // 获取指定区间随机数
      let num = max - min + 1;
      return Math.floor(Math.random() * num + min);
    }
    let num2 = arr[takeRandom(0, arr.length - 1)];
    this.arrFns2Result = num2;
  }
  getNum() {
    let takeRandom = (max, min) => {
      // 获取指定区间随机数
      let num = max - min + 1;
      return Math.floor(Math.random() * num + min);
    }
    let num = takeRandom(3, 19);
    this.arrFns2Result = num;
  }
  datas = [];
  // 数值向下取整
  quzheng = []
  fn1() {
    var a = ~~3.14; // 3
    var b = 3.14 >> 0; // 3
    var c = 3.14 | 0; // 3
    var d = -~~3.14; // -3
    var e = -3.14 >> 0; // -3
    var f = -3.14 | 0; // -3
    // 对整数来说 ~~ 运算结果与 Math.floor() 运算结果相同，而对于负数来说不相同：
    var g = Math.floor(-4.5)
    this.quzheng = [a, b, c, d, e, f, g]
    console.log(a, b, c, d, e, f, g);
  }

  jigou() {
    // 判断奇偶数
    const num = 3;
    console.log(!!(num & 1)); // true
    console.log(!!(num % 2)); // true
  }
  // 使用 && 替代单一条件判断
  // 你可能这样写过
  //    if(!token) {
  //     login();
  // }
  // // 其实这样也可以
  // !token && login();
  /**************************************************************/
  times() {
    let da = new Date();
    let one1 = da.getFullYear(); //  取得年
    let one2 = da.getMonth() + 1; //  取得月
    let one3 = da.getDate(); //  取得日
    let one4 = da.getDay(); //  取得星期几
    let one5 = da.getHours(); //  取得小时
    let one6 = da.getMinutes(); //  取得分钟
    let one7 = da.getSeconds(); //  取得秒
    let one8 = da.getTime(); //  取得时间戳
    let one9 = Date.now(); //  取得时间戳
    let one10 = da
      .toLocaleDateString()
      .split("/")
      .join("-");
    let one11 = da.toLocaleTimeString();
    this.datas.push(`${one1}年${one2}月${one3}日，星期${one4}`);
    this.datas.push(`${one5}时${one6}分${one7}秒`);
    this.datas.push(`时间戳 ${one8}`);
    this.datas.push(one10);
    this.datas.push(one11);
  }
  // bind()：这个方法会创建一个函数的实例，其this值会被绑定到传给bind()函数的值
  color = null;
  binds() {
    this.color = "red";
    var o = {
      color: "blue"
    };

    function sayColor() {
      alert(this.color);
    }
    var objectSayColor = sayColor.bind(o);
    objectSayColor(); //blue
  }
  contextmenuData = null;
  fff(e: Event) {
    // 自定义点击鼠标右键
    e.preventDefault();
    this.contextmenuData = "执行了contextmenu 自定义鼠标右键事件";
  }
  /****************************** */

  @ViewChild('tar') tars;
  isAnimate = null;
  animates() {
    let ani = () => {
      let kk = this.tars.nativeElement.style.left;
      let zz = parseInt(kk) + 1;
      this.tars.nativeElement.style.left = zz + 'px';
      this.isAnimate = requestAnimationFrame(ani)
    }
    requestAnimationFrame(ani)
  }
  start(da?) {
    if (da) {
      this.animates();
    } else {
      cancelAnimationFrame(this.isAnimate);
      this.tars.nativeElement.style.left = 0;
    }
  }
  /****************************************** */
  watchId = null;
  geolocation() {
    navigator.geolocation.getCurrentPosition(
      // 获取位置信息
      function (position) {
        console.log(position.coords.latitude, position.coords.longitude);
      },
      function (error) {
        console.log("Error code: " + error.code);
        console.log("Error message: " + error.message);
      }
    );
    this.watchId = navigator.geolocation.watchPosition(
      // 监听位置信息，实时是多次调用getCurrentPosition()
      function (position) {
        console.log(position.coords.latitude, position.coords.longitude);
      },
      function (error) {
        console.log("Error code: " + error.code);
        console.log("Error message: " + error.message);
      }
    );
  }
  closeGet() {
    console.log(navigator.geolocation);
    navigator.geolocation.clearWatch(this.watchId);
  }

  /********************************************** */
  fileUrl = null;
  // 使用createObjectURL动态显示图片
  // 在每次调用 createObjectURL() 方法时，都会创建一个新的 URL 对象，即使你已经用相同的对象作为参数创建过。
  // 当不再需要这些 URL 对象时，每个对象必须通过调用 URL.revokeObjectURL() 方法来释放。
  seefile(e) {
    var file = e.target.files[0];
    var imgs = new Image();
    var ele = this.elem.nativeElement.querySelector("#ele");
    imgs.style.width = "100px";
    // 页面卸载时会自动释放对象URL占用的内存
    this.fileUrl = window.URL.createObjectURL(file); // 指向一块内存的地址
    imgs.src = this.fileUrl;
    this.rd.appendChild(ele, imgs);
    window.URL.revokeObjectURL(this.fileUrl) // 手动清空创建的 URL
  }
  // 使用 FileReader 动态显示图片
  seefile1(e) {
    var file = e.target.files[0];
    var imgs = new Image();
    var ele = this.elem.nativeElement.querySelector("#ele");
    imgs.style.width = "100px";
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event2: any) => {
      imgs.src = event2.target.result;
      this.rd.appendChild(ele, imgs);
    }
  }
  progress: any
  // 监听 FileReader 进度
  seefile2() {
    let inputs = this.rd.createElement('input');
    this.rd.setAttribute(inputs, 'type', 'file');
    this.rd.setAttribute(inputs, 'multiple', 'multiple');
    inputs.click();
    inputs.onchange = (event) => {
      // console.log(event)
      // console.log(event.path[0].files)
      let data = event.path[0].files;
      // 使用 FileReader 执行断点续传 对 result 执行slice 即可
      let reader = new FileReader();
      // result 属性中保存的将是被读取文件
      reader.readAsArrayBuffer(data[0]);
      reader.onload = (event) => {
        console.log(event)
        console.log(reader.result)
        let slice = '' + reader.result.slice(0, 10 * 1024 * 1024); // 文件切割
        // 使用 FormData 执行上传，只传了一片，后续使用循环 Promise 
        let formdata = new FormData();
        formdata.append('filename', slice);
        console.log(formdata)
      }
      // 监听进度
      reader.onprogress = (event) => {
        this.progress = ((event.loaded / event.total) * 100).toFixed(0) + '%'
      }
    }
  }

  now_com() {
    let host = this.rd.selectRootElement("#isH2");
    console.log(host)

  }
  now_isBtn() {
    let host = this.rd.selectRootElement(".isBtn");
    console.log(host)
  }
  now_host() {
    let host = this.rd.selectRootElement("#ohter");
    console.log(host)
  }
  other_com() {
    let host = this.elem.nativeElement.querySelector('#iskk')
    console.log(host.children)
  }
  /////////////////////////////////////////////////////////////////////
  obj = {
    name: 'llllll',
    age: 2
  };
  Proxy_set() {
    let pro = new Proxy(this.obj, {
      set(target, key, value) {
        console.log('target：', target);
        console.log('key：', key);
        console.log('value：', value)
        target[key] *= value;
        return target[key]
      }
    });
    pro.age = 4;
    console.log(pro.age)
  };
  // Proxy 对象
  Proxy_get() {
    let pro = new Proxy(this.obj, {
      get(target, key) {
        console.log('target：', target);
        console.log('key：', key);
        return target[key] + 2
      },
      // set(target, key, value) {
      //   console.log(target, key, value)
      //   return target[key] += value
      // }
    });
    console.log(pro.age)
  };
  full(type) {
    // 任何选定的元素都可以被全屏化
    // var element = document.documentElement
    var element = document.getElementsByClassName('toFull')[0];

    var ua = navigator.userAgent.toLowerCase(); //取得浏览器的userAgent字符串  

    let kk1 = (/msie ([\d.]+)/).test(ua); //判断是否IE浏览器 
    let kk2 = (/firefox\/([\d.]+)/).test(ua); //判断是否Firefox浏览器 
    let kk3 = (/chrome\/([\d.]+)/).test(ua); //判断Chrome浏览器 
    let kk4 = (/opera.([\d.]+)/).test(ua); //判断是否Opera浏览器 

    let fnType = '';
    let fnTypeExit = '';
    if (kk1) {
      fnType = 'msRequestFullscreen';
      fnTypeExit = 'msExitFullscreen';
    }
    if (kk2) {
      fnType = 'mozRequestFullScreen';
      fnTypeExit = 'mozCancelFullScreen';
    }
    if (kk3) {
      fnType = 'webkitRequestFullscreen';
      fnTypeExit = 'webkitCancelFullScreen';
    }
    if (kk4) {
      fnType = 'oRequestFullScreen';
      fnTypeExit = 'oExitFullscreen';
    }
    if (type) {
      element[fnType]();
    } else {
      document[fnTypeExit]();
    }
  }
  //////////////////////////////////////////////////////////////////////
  // 数据类型判断
  dataType() {
    var arr = [1, 'f', {},
      [], null, undefined, false, /d/i, NaN
    ];
    var toString = Object.prototype.toString;
    arr.forEach(item => {
      console.log((toString.call(item)).toLowerCase());
    })
    arr.forEach(item => {
      console.log(typeof item);
    })
    // Object类型数据，只有指向完全一样时，才相等
    var a = {};
    var b = {};
    var c = [];
    var d = [];
    console.log(a === b)
    console.log(a === a)
    console.log(c === d)
    console.log(c === c)
  }
  //////////////////////////////////////////////////////////////////////
  // js数据类型的学习
  // 当我们复制引用类型的变量时，实际上复制的是栈中存储的地址，
  // 所以复制出来的obj1实际上和obj2指向的堆中同一个对象

  bijiao() {
    // 对于原始类型，比较时会直接比较它们的值，如果值相等，即返回true。
    var name = 'ConardLi';
    var name2 = 'ConardLi';
    console.log(name === name2); // true
    // 对于引用类型，比较时会比较它们的引用地址，
    // 虽然两个变量在堆中存储的对象具有的属性值都是相等的，
    // 但是它们被存储在了不同的存储空间，因此比较值为false。
    var obj = {
      name: 'ConardLi'
    };
    var obj2 = {
      name: 'ConardLi'
    };
    console.log(obj === obj2); // false
  }
  chuandi() {
    // ECMAScript中所有的函数的参数都是按值传递的
    let name = 'ConardLi';

    function changeValue(name) {
      name = 'code秘密花园';
    }
    changeValue(name);
    // 函数参数仅仅是被传入变量复制给了的一个局部变量，
    // 改变这个局部变量不会对外部变量产生影响
    console.log(name); // ConardLi

    let obj = {
      name: 'ConardLi'
    };

    function changeValue2(obj) {
      obj.name = 'code秘密花园';
    }
    changeValue2(obj);
    // 改变对象的属性，其实是改变了对象所指的栈中保存的数据
    console.log(obj.name); // code秘密花园
    let obj2 = {};

    function changeValue3(obj2) {
      obj2.name = 'ConardLi'; // 改变的不是对象，而是对象指向的地址保存的数据
      obj2 = { // 改变里参数而已，即改变了副本
        name: 'code秘密花园'
      };
    }
    changeValue3(obj2);
    // 函数参数传递的并不是变量的引用，而是变量拷贝的副本，
    // 当变量是原始类型时，这个副本就是值本身，
    // 当变量是引用类型时，这个副本是指向堆内存的地址
    console.log(obj2['name']); // ConardLi
  }

  // null:表示被赋值过的对象，刻意把一个对象赋值为null，故意表示其为空，不应有值。
  // 所以对象的某个属性值为null是正常的，null转换为数值时值为0。

  // undefined:表示“缺少值”，即此处应有一个值，但还没有定义
  // undefined转为数值时为NaN(非数字值的特殊值)

  // JavaScript是一门动态类型语言，
  // 成员除了表示存在的空值外，还有可能根本就不存在（因为存不存在只在运行期才知道），
  // 这就是undefined的意义所在


  kaobei1() {
    let obj = {
      1: 'string',
      2: 2,
      3: undefined,
      4: null,
      5: NaN,
      6: Symbol(),
      7: false,
      8: function () { },
      9: {
        age: 3,
        kk: {
          k: 8
        },
        ss: function () {
          console.log('s')
        }
      },
      10: [5, {
        a: 'a',
        s: function () {
          console.log('s2')
        }
      }],
      11: /\w/
    }
    // 方法1
    function deep(tar) {
      let finall;
      if (type(tar, '').type === 'object') {
        finall = {}
      } else {
        finall = []
      }


      function type(t, name) {
        let what = Object.prototype.toString.call(t).match(/(?<=\s)\w+/)[0].toLowerCase();
        if (what === 'number' && isNaN(t)) {
          return {
            name: name,
            zhi: NaN,
            type: 'NaN'
          }
        } else {
          return {
            name: name,
            zhi: t,
            type: what
          }
        }
      }

      function make(tar) {
        let answer = tar.type;
        switch (answer) {
          case 'string':
          case 'number':
          case 'undefined':
          case 'boolean':
          case 'symbol':
          case 'function':
          case 'null':
          case 'regexp':
          case 'NaN':
            finall[tar.name] = tar.zhi;
            break;
          case 'object':
          case 'array':
            finall[tar.name] = deep(tar.zhi)
            break;
        }
      }

      for (let i in tar) {
        make(type(tar[i], i))
      }
      return finall
    }
    // 方法2
    // 定义一个深拷贝函数  接收目标target参数
    function deepClone(target) {
      // 定义一个变量
      let result;
      // 如果当前需要深拷贝的是一个对象的话
      if (typeof target === 'object') {
        // 如果是一个数组的话
        if (Array.isArray(target)) {
          result = []; // 将result赋值为一个数组，并且执行遍历
          for (let i in target) {
            // 递归克隆数组中的每一项
            result.push(deepClone(target[i]))
          }
          // 判断如果当前的值是null的话；直接赋值为null
        } else if (target === null) {
          result = null;
          // 判断如果当前的值是一个RegExp对象的话，直接赋值    
        } else if (target.constructor === RegExp) {
          result = target;
        } else {
          // 否则是普通对象，直接for in循环，递归赋值对象的所有值
          result = {};
          for (let i in target) {
            result[i] = deepClone(target[i]);
          }
        }
        // 如果不是对象的话，就是基本数据类型，那么直接赋值
      } else {
        result = target;
      }
      // 返回最终结果
      return result;
    }
    console.log(deep(obj))
    console.log(deepClone(obj))
  }


}
