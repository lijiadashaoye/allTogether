import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Renderer2
} from "@angular/core";
declare let AMap;
declare let AMapUI;
@Component({
  selector: "app-gaode",
  templateUrl: "./gaode.component.html",
  styleUrls: ["./gaode.component.css"]
})
export class GaodeComponent implements OnInit {
  @ViewChild("maps")
  map_container: ElementRef;
  map: any; //地图对象
  tip;
  constructor(private rd: Renderer2) { }
  ngOnInit() {
    this.mapInit();
  }
  mapInit() {
    // 地图初始化
    this.map = new AMap.Map(this.map_container.nativeElement, {
      center: [116.397428, 39.90923], // 设置视图中心点
      zoom: 13, // 地图缩放级别
      zooms: [4, 18] //设置地图级别范围

      // pitch: 75, // 地图俯仰角度，有效范围 0 度- 83 度
      // viewMode: '3D',//使用3D视图
    });
    this.add2d(); // 创建地图二维视口
    // this.geolocation(); // 为地图添加定位功能
    // this.addMark_Circle();  // 添加标记及范围图
    // this.addOther(); // 卫星图，街道线路图
    // this.addTileLayer();
  }
  addTileLayer() {
    //实时路况图层
    let trafficLayer = new AMap.TileLayer.Traffic({
      zIndex: 10
    });
    this.map.add(trafficLayer); //添加图层到地图
    setTimeout(_ => {
      this.map.remove(trafficLayer); //移除
    }, 3000);
  }
  geolocation() {
    // 为地图添加定位功能
    this.map.plugin("AMap.Geolocation", () => {
      let geolocation = new AMap.Geolocation({
        enableHighAccuracy: true, //是否使用高精度定位，默认:true
        timeout: 10000, //超过10秒后停止定位，默认：无穷大
        maximumAge: 0, //定位结果缓存0毫秒，默认：0
        convert: true, //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
        showButton: true, //显示定位按钮，默认：true
        buttonPosition: "LB", //定位按钮停靠位置，默认：'LB'，左下角
        buttonOffset: new AMap.Pixel(10, 20), //定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
        showMarker: true, //定位成功后在定位到的位置显示点标记，默认：true
        showCircle: true, //定位成功后用圆圈表示定位精度范围，默认：true
        panToLocation: true, //定位成功后将定位到的位置作为地图中心点，默认：true
        zoomToAccuracy: true //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
      });
      this.map.addControl(geolocation);
    });
  }
  add2d() {
    //创建地图二维视口
    let view2d = new AMap.View2D();
    this.map.add(view2d);
  }

  addMark_Circle() {
    // 添加标记及范围图
    let marker = new AMap.Marker({
      icon: "https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png",
      position: [116.405467, 39.907761]
    });
    // 构造矢量圆形
    let circle = new AMap.Circle({
      center: new AMap.LngLat("116.403322", "39.920255"), // 圆心位置
      radius: 1000, //半径
      strokeColor: "#F33", //线颜色
      strokeOpacity: 1, //线透明度
      strokeWeight: 3, //线粗细度
      fillColor: "#ee2200", //填充颜色
      fillOpacity: 0.35 //填充透明度
    });

    // 将以上覆盖物添加到地图上
    // this.map.add(marker); // 单独将点标记添加到地图上
    this.map.add([marker, circle]); // add方法可以传入一个覆盖物数组，将点标记和矢量圆同时添加到地图上
  }
  addOther() {
    let weixing = new AMap.TileLayer.Satellite({}); // 卫星图
    let road = new AMap.TileLayer.RoadNet({}); // 街道线路图
    let layers = [weixing, road];
    this.map.add(layers);
  }

  ngOnDestroy(): void {
    // 销毁地图，释放内存
    this.map.destroy();
  }
  /**********************************************************************************/
  // ng-amap
  onMarkerClick(e) {
    console.log(e);
  }
}
