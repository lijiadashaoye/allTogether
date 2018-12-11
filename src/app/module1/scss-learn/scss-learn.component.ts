import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "app-scss-learn",
  templateUrl: "./scss-learn.component.html",
  styleUrls: ["./scss-learn.component.scss"]
})
export class ScssLearnComponent implements OnInit {
  useClass = false;
  constructor(
    public title: Title,
    public actRout: ActivatedRoute
  ) { }

  ngOnInit() {
    this.actRout.data.subscribe(val => {
      this.title.setTitle(val.title);
    });
  }
}
