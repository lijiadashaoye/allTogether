import { Component, ElementRef, Renderer2 } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-formdata",
  templateUrl: "./formdata.component.html",
  styleUrls: ["./formdata.component.css"]
})
export class FormdataComponent {
  constructor(private elem: ElementRef) {}

  ngOnInit() {}
  imgSrc = null;
  toSubmit(target) {
    // var formData = new FormData(FormElement);
    // 这里的FormElement是html元素为form表单；当然这里也可以直接构造不用填写form元素，
    // 填写form元素的目的是可以直接选取form中表单元素的name和value为formData添加键值对。
    // angular中没有明确在标签里写上name，而是用formControlName，所以不需要初始化时写FormElement
    let formData = new FormData();
    formData.append("userfile", target.files[0]);
    var reader = new FileReader();
    // 将文件以Data URL形式进行读入页面
    reader.readAsDataURL(target.files[0]);
    reader.onload = e => {
      this.imgSrc = reader.result;
    };
  }
  tomake(target) {
    var blob1 = new Blob([target.value], { type: "text/plain;charset=utf-8" });
    let one = this.elem.nativeElement.querySelector("#one");
    // useTA.innerHTML = fileName;
    one.download = "isTxT.txt";
    one.href = URL.createObjectURL(blob1);
    /****************************************************************/
    var blob2 = new Blob([target.value], {
      type: "application/msword;charset=utf-8"
    });
    let two = this.elem.nativeElement.querySelector("#two");
    // useTA.innerHTML = fileName;
    two.download = "isWord.doc";
    two.href = URL.createObjectURL(blob2);
  }
}
