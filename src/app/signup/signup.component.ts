import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from '@angular/forms';
import {
  Router,
  ActivatedRoute
} from '@angular/router';
import {
  UserService
} from '../user.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  tipText = ''; // 提示
  resolveDatas;
  useTech; // 技术解释
  buttonText = 'Signup';
  constructor(
    public fb: FormBuilder,
    public route: Router,
    public userService: UserService,
    private activeRoute: ActivatedRoute,
  ) {}
  forms: FormGroup;
  ngOnInit() {
    this.activeRoute.data // 获取resolve数据
      .subscribe(data => {
        if (data.resolveData.length > 0) {
          this.resolveDatas = data.resolveData[0]
        }
      });

    this.forms = this.fb.group({
      name: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required, this.validPassword])],
      email: ['', Validators.compose([Validators.required, this.validEmail])],
      job: ['', Validators.compose([Validators.required])],
      logo: ['']
    })
    if (this.resolveDatas) {
      this.forms.patchValue({
        name: this.resolveDatas.name,
        password: this.resolveDatas.password,
        email: this.resolveDatas.email,
        job: this.resolveDatas.job,
        logo: this.resolveDatas.logo,
      })
      this.buttonText = 'ChangeInformation'
    } else {
      let num = Math.floor(Math.random() * 10)
      let logoSrc = `assets/logo/${num}.jpg`;
      this.forms.patchValue({
        logo: logoSrc
      })
    }
  }
  signup() { // 登陆行为
    this.tipText = '';
    let kk = this.forms.controls;
    for (let i in kk) {
      if (kk[i].errors) {
        if (kk[i].errors.error && !kk[i].errors.required) {
          this.tipText += kk[i].errors.error + '**'
        } else
        if (kk[i].errors.required) {
          this.tipText += i + '未填写**'
        }
      }
    }
    if (this.forms.valid) {
      if (this.resolveDatas) {
        let data = this.forms.value;
        data['id'] = this.resolveDatas.id
        this.userService.changeUserInfo(data).subscribe(val => {
          this.resolveDatas = val;
          this.tipText = '信息修改成功！'
          setTimeout(_ => {
            this.tipText = '';
            this.forms.patchValue({ // this.forms.reset() 不好使
              name: '',
              password: '',
              email: '',
              job: '',
              logo: '',
            });
            this.buttonText = 'Signup';
          }, 3000)
        })
      } else {
        this.userService.signup(this.forms.value)
          .subscribe(val => {
            this.route.navigate(['login'])
          })
      }
    }
  }
  validEmail(c: FormControl) { // 邮箱验证
    let reg = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
    if (reg.test(c.value)) {
      return null
    } else {
      return {
        'error': '邮箱错误！'
      }
    }
  }
  validPassword(c: FormControl) { // 密码验证
    if (c.value.length > 10 || c.value.length < 3) {
      if (c.value.length > 10) {
        return {
          'error': '密码太长了！'
        }
      } else
      if (c.value.length < 3) {
        return {
          'error': '密码太短了！'
        }
      }
    } else {
      return null
    }
  }
  back() { //  退到登陆页
    this.route.navigate(['login'], {
      queryParams: this.resolveDatas
    })
  }
}
