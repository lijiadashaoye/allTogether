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
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  tipText: string = '';
  imgSrc = 'assets/backImg/0.jpg';
  forms: FormGroup;
  constructor(
    public fb: FormBuilder,
    public route: Router,
    public userService: UserService,
    public resolveService: resolveService
  ) {}

  ngOnInit() {
    this.forms = this.fb.group({
      name: [''],
      password: ['']
    })
    let num = Math.floor(Math.random() * 10)
    this.imgSrc = `assets/backImg/${num}.jpg`;
  }
  login() {
    if (this.forms.get('name').value) {
      this.userService.login(this.forms.value)
        .subscribe(val => {
          if (val.length > 0) {
            let kk = val.filter(data => data['password'] === this.forms.get('password').value);
            if (kk.length > 0) {
              this.route.navigate(['module1']);
            } else {
              this.tipText = '请输入正确密码'
              setTimeout(_ => this.tipText = '', 3000)
            }
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
  signup() {
    this.route.navigate(['signup'])
  }
  forget() {
    this.route.navigate(['forget']);
  }
  changeInformation(){
    if (this.forms.get('name').value) {
      this.userService.login(this.forms.value)
        .subscribe(val => {
          if (val.length > 0) {
           this.resolveService.name=val[0].name;
           this.signup();
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
}
