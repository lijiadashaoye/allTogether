import { Component, OnInit } from '@angular/core';
import * as Chance from 'chance'; // 生成随机数据
import * as dateFns from 'date-fns';

@Component({
  selector: 'app-other-chajian',
  templateUrl: './other-chajian.component.html',
  styleUrls: ['./other-chajian.component.css']
})
export class OtherChajianComponent {
  chance;
  datefns;
  constructor() { }

  doChance() {
    let kk = new Chance();
    this.chance = kk.string()
  }
  dateFns(){
    this.datefns= dateFns.format(new Date(), 'YYYY-MM-DD hh:mm:ss')
  }
  
}
