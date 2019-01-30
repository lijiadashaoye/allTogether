import { Component, OnInit } from '@angular/core';
import { QrCodeHelper } from 'ngx-kjua';
@Component({
  selector: 'app-er-wei-ma',
  templateUrl: './er-wei-ma.component.html',
  styleUrls: ['./er-wei-ma.component.css']
})
export class ErWeiMaComponent {

  contactName = "Werth,David";  // 姓名
  contactAddress = "203 New York Ave,New York,NY 11377,USA";  // 地址
  contactEmail = "david@github.com";  // 邮箱
  contactUrl = "http://www.github.com/werthdavid";  // 个人主页
  contactNumbers = ['1111111'];  // 电话号码
  imageSrc1 = 'assets/earth.png';
  imgElement1 = undefined;
  toShow1 = false;
  contact1 = "";   // 最终包含的信息内容

  mode = "image";  // 中间的logo使用的模式  
  mSize = '20';   // 中间图标的大小
  size = '200';   // 生成的二维码大小
  render = 'image'; // 生成的二维码使用的模式
  imgElement2 = undefined;
  minVersion = '1';
  fill = '#333333';  // 二维码的颜色
  back = '#ffffff';  // 二维码的背景色 
  contact2 = '输入文字';  // 最终包含的信息内容
  quiet = '0';  // 边框的大小
  rounded = 1;  // 二维码的圆角大小
  mPosX = 50;   // 百分比
  mPosY = this.mPosX;
  label = 'dd';  // 使用文字时的文字
  ecLevel = 'H';
  fontcolor = '#ff9818';
  imageSrc2 = '';
  toShow2 = false;

  setImg1(data) {  // 生成img标签
    this.imgElement1 = new Image();
    this.imgElement1.src = data;
    setTimeout(() => {
      this.toShow1 = true
    })
  }
  getFiles1(event) {   // 选择好图片文件后执行
    if (event.target.files.length > 0) {
      this.toShow1 = false;
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event2: any) => {
        this.imageSrc1 = event2.target.result;
      }
    }
  }
  generateCodeData1(): void {   // 编码信息
    this.contact1 = QrCodeHelper.makeContactMeCard(
      this.contactName,
      this.contactNumbers,
      this.contactAddress,
      this.contactEmail,
      this.contactUrl);
    this.setImg1(this.imageSrc1)
  }
  toMake1() {
    this.generateCodeData1();
  }
  //////////////////////////////////////////////
  setImg2(data) {  // 生成img标签
    this.imgElement2 = new Image();
    this.imgElement2.src = data;
    setTimeout(() => {
      this.toShow2 = true
    })
  }
  getFiles2(event) {   // 选择好图片文件后执行
    if (event.target.files.length > 0) {
      this.toShow2 = false;
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event2: any) => {
        this.imageSrc2 = event2.target.result;
      }
    }
  }
  generateCodeData2(): void {   // 编码信息
    this.setImg2(this.imageSrc2)
  }
  toMake2() {
    this.generateCodeData2();
  }
}