import { Component, OnInit, Renderer2 } from "@angular/core";
import { fromEvent, of, Subscription } from "rxjs";
@Component({
  selector: "app-animate-css",
  templateUrl: "./animate-css.component.html",
  styleUrls: ["./animate-css.component.css"]
})
export class AnimateCssComponent implements OnInit {
  constructor(private rd: Renderer2) {}
  animateArr = [
    "bounce",
    "flash",
    "pulse",
    "rubberBand",
    "shake",
    "headShake",
    "swing",
    "tada",
    "wobble",
    "jello",
    "bounceIn",
    "bounceInDown",
    "bounceInLeft",
    "bounceInRight",
    "bounceInUp",
    "bounceOut",
    "bounceOutDown",
    "bounceOutLeft",
    "bounceOutRight",
    "bounceOutUp",
    "fadeIn",
    "fadeInDown",
    "fadeInDownBig",
    "fadeInLeft",
    "fadeInLeftBig",
    "fadeInRight",
    "fadeInRightBig",
    "fadeInUp",
    "fadeInUpBig",
    "fadeOut",
    "fadeOutDown",
    "fadeOutDownBig",
    "fadeOutLeft",
    "fadeOutLeftBig",
    "fadeOutRight",
    "fadeOutRightBig",
    "fadeOutUp",
    "fadeOutUpBig",
    "flipInX",
    "flipInY",
    "flipOutX",
    "flipOutY",
    "lightSpeedIn",
    "lightSpeedOut",
    "rotateIn",
    "rotateInDownLeft",
    "rotateInDownRight",
    "rotateInUpLeft",
    "rotateInUpRight",
    "rotateOut",
    "rotateOutDownLeft",
    "rotateOutDownRight",
    "rotateOutUpLeft",
    "rotateOutUpRight",
    "hinge",
    "jackInTheBox",
    "rollIn",
    "rollOut",
    "zoomIn",
    "zoomInDown",
    "zoomInLeft",
    "zoomInRight",
    "zoomInUp",
    "zoomOut",
    "zoomOutDown",
    "zoomOutLeft",
    "zoomOutRight",
    "zoomOutUp",
    "slideInDown",
    "slideInLeft",
    "slideInRight",
    "slideInUp",
    "slideOutDown",
    "slideOutLeft",
    "slideOutRight",
    "slideOutUp",
    "heartBeat"
  ];
  animateArr2 = [
    {
      name: "delay-2s",
      time: "2s"
    },
    {
      name: "delay-5s",
      time: "5s"
    },
    {
      name: "slow",
      time: "2s"
    },
    {
      name: "slower",
      time: "3s"
    },
    {
      name: "fast",
      time: "800ms"
    },
    {
      name: "faster",
      time: "500ms"
    }
  ];
  num = 0;
  sub: Subscription;
  sub2: Subscription;
  ngOnInit() {}

  addAnimate(ev: Event, className) {
    let target = ev.target;
    this.rd.addClass(target, className);
    of(
      "webkitAnimationEnd",
      "mozAnimationEnd",
      "MSAnimationEnd",
      "oanimationend",
      "animationend"
    ).subscribe(item => {
      this.sub = fromEvent(target, item).subscribe(_ => {
        // 监听动画执行结束
        this.rd.removeClass(target, className);
        this.sub.unsubscribe();
      });
    });
  }
  addAnimate2(ev: Event, className) {
    let target = ev.target;
    this.rd.addClass(target, className);
    this.rd.addClass(target, "bounce");
    of(
      "webkitAnimationEnd",
      "mozAnimationEnd",
      "MSAnimationEnd",
      "oanimationend",
      "animationend"
    ).subscribe(item => {
      this.sub2 = fromEvent(target, item).subscribe(_ => {
        // 监听动画执行结束
        this.rd.removeClass(target, "bounce");
        this.sub2.unsubscribe();
      });
    });
  }
  stop = false;
  stopToggle(ev: Event, className) {
    if (this.stop) {
      let target = ev.target;
      this.rd.removeClass(target, className);
    } else {
      let target = ev.target;
      this.rd.addClass(target, className);
    }
    this.stop = !this.stop;
  }
}
