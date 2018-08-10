import {
  Component,
  OnInit,
  forwardRef
} from '@angular/core';
import {
  NG_VALUE_ACCESSOR,
  FormBuilder,
  FormGroup,
  ControlValueAccessor
} from '@angular/forms';
import {
  range
} from 'rxjs'

@Component({
  selector: 'app-check-logo',
  templateUrl: './check-logo.component.html',
  styleUrls: ['./check-logo.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CheckLogoComponent),
    multi: true
  }]
})
export class CheckLogoComponent implements OnInit, ControlValueAccessor {
  private propagateChange = (_: any) => {}; // 用来承接向上传递数据的函数
  fromc: FormGroup;
  imgs: object[] = [];
  showImg: string;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.fromc = this.fb.group({
      logo: ['']
    });
    range(0, 40).subscribe(val => { // 随机选取一张
      let imgSrc = `assets/logo/${val}_tn.jpg`;
      let obj = {
        id: val,
        img: imgSrc
      }
      this.imgs.push(obj)
    })
  }
  public writeValue(obj: any): void { // obj根据传进来的数据而定类型string?object?array?
    if (obj) {
      this.fromc.get('logo').patchValue(obj); // 初始化值
      this.showImg =this.fromc.get('logo').value;
    }
  }
  public registerOnChange(fn: any): void { // 向上传递数据用
    this.propagateChange = fn;
  }
  public registerOnTouched(fn: any): void {}

  checkImg(data) { // 选择好图片
    this.showImg = `assets/logo/${data}.jpg`;
    this.propagateChange(this.showImg);
  }
}
