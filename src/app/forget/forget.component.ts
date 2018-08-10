import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormGroup,
  FormBuilder
} from '@angular/forms'
import {
  Router
} from '@angular/router';
import {
  UserService
} from '../user.service';
import {
  resolveService
} from '../main.guard';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.css']
})
export class ForgetComponent implements OnInit {
  tipText: string = '';
  imgSrc = 'assets/backImg/0.jpg';
  forms: FormGroup;
  userData;
  userId;
  buttonText = 'changePassword';
  constructor(
    public fb: FormBuilder,
    public route: Router,
    public userService: UserService,
    public resolveService: resolveService
  ) {}

  ngOnInit() {
    this.forms = this.fb.group({
      name: [''],
      password: [''],
      makesure: ['']
    })
  }
  changePassword() {
    if (!this.userId) {
      this.userId = this.userData.id;
      this.buttonText = 'toChange';
    } else {
      let password = this.forms.get('password').value;
      let makesure = this.forms.get('makesure').value;
      if (password !== makesure) {
        this.tipText = '两次密码输入不同，请重新输入！'
      } else {
        let data = {
          password: password,
          id: this.userId
        }
        this.userService.changeUserPassword(data).subscribe(val => {
          this.tipText = '密码修改成功，请重新登陆！';
          setTimeout(_ => {
            this.tipText = '';
            this.route.navigate(['login'])
          }, 3000)
        })
      }
    }
  }
  getPassword() {
    if (this.forms.get('name').value) {
      this.userService.login(this.forms.value)
        .subscribe(val => {
          if (val.length > 0) {
            this.userData = val[0];
            this.forms.patchValue({
              password: val[0].password
            })
            this.tipText = '可以点击 changePassword 进行更改密码！';
            setTimeout(_ => this.tipText = '', 5000)
          } else {
            this.tipText = '请输入正确名字'
            setTimeout(_ => this.tipText = '', 3000)
          }
        })
    } else {
      this.tipText = '请输入名字'
      setTimeout(_ => this.tipText = '', 3000)
    }
  }
  back() { //  退到登陆页
    this.route.navigate(['login'])
  }
}
