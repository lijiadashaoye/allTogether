import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
@Component({
    template: `
    <button (click)="Child3One()">Child3One</button>
    <button (click)="Child3Two()">Child3Two</button>
    <router-outlet></router-outlet>`,
})
export class Child3Component implements OnInit {
    constructor(private rout: Router,
        private actRoute: ActivatedRoute) { }
    ngOnInit(): void { }
    Child3Two(){
        this.rout.navigate(['Child3Two'], { relativeTo: this.actRoute })
    }
    Child3One(){
        this.rout.navigate(['Child3One'], { relativeTo: this.actRoute })
    }
}
