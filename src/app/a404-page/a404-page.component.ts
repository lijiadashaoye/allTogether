import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
@Component({
  selector: "app-a404-page",
  templateUrl: "./a404-page.component.html",
  styleUrls: ["./a404-page.component.css"]
})
export class A404PageComponent implements OnInit {
  routeData;
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.paramMap.subscribe((val: ParamMap) => {
      this.routeData = val.get("data");
    });
  }
  toHome() {
    this.router.navigate(["module1"]);
  }
}
