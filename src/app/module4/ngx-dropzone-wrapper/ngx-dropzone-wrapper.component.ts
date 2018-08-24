import { Component, OnInit } from "@angular/core";
import { DropzoneConfigInterface } from "ngx-dropzone-wrapper";

@Component({
  selector: "app-ngx-dropzone-wrapper",
  templateUrl: "./ngx-dropzone-wrapper.component.html",
  styleUrls: ["./ngx-dropzone-wrapper.component.css"]
})
export class NgxDropzoneWrapperComponent implements OnInit {
  config: DropzoneConfigInterface = {
    clickable: true,
    autoReset: null,
    errorReset: null,
    cancelReset: null
  };
  constructor() {}

  ngOnInit() {}
  onUploadError(e) {
    console.log(e)
  }
  onUploadSuccess(e) {
    console.log(e)
  }
  uploadprogressFn(e) { // 第二个参数，它是百分比（0-100）
    console.log(e)
  }
}
