import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-component',
  templateUrl: './one-component.component.html',
  styleUrls: ['./one-component.component.css']
})
export class OneComponentComponent implements OnInit {
  edit = '';
  constructor() { }

  ngOnInit() {
  }
  oneClick() {
    this.edit ? this.edit = '' : this.edit = 'OneComponent'
  }
}
