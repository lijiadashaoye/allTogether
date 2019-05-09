import {
  Component,
  OnInit,
  Input,
  HostBinding,
  HostListener
} from '@angular/core';
import {
  cardAnim
} from '../animate';

@Component({
  selector: 'app-use-animate-list',
  templateUrl: './use-animate-list.component.html',
  styleUrls: ['./use-animate-list.component.css'],
  animations: [cardAnim]
})
export class UseAnimateListComponent implements OnInit {
  @Input() data;

  @HostBinding('@card') cardState = 'out';
  constructor() { }

  ngOnInit() { }
  @HostListener('mouseover')
  onmouseenter() {
    this.cardState = 'hover'
  }
  @HostListener('mouseout')
  onmouseleave() {
    this.cardState = 'out'
  }

  @Input() giveChild;
  testFromFather() {
    this.giveChild()
  }
}
