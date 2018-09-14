import { Component, OnInit } from '@angular/core';
import { EChartOption } from "echarts";
import * as echarts from "echarts";
@Component({
  selector: 'app-echarts-learn',
  templateUrl: './echarts-learn.component.html',
  styleUrls: ['./echarts-learn.component.css']
})
    export class EchartsLearnComponent implements OnInit {
  theme;
  chartOption: EChartOption;
  isLoading = true;
  loadingOpts = {
    text: "Custom Loading",
    color: "#00bdfc",
    textColor: "#ff0000",
    maskColor: "rgba(255, 255, 255, 0.6)",
    zlevel: 0
  };
  initOpts = {
    renderer: "canvas"
    // renderer: 'svg',
    // width: 'auto',
    // height: 500
  };
  autoResize = true;
  constructor() {}

  ngOnInit() {
    this.chartOption = {
      title: {
        text: "堆叠区域图"
      },
      tooltip: {
        trigger: "axis"
      },
      legend: {
        data: ["邮件营销", "联盟广告", "视频广告", "直接访问", "搜索引擎"]
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true
      },
      xAxis: [
        {
          type: "category",
          boundaryGap: false,
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
        }
      ],
      yAxis: [
        {
          type: "value"
        }
      ],
      series: [
        {
          name: "邮件营销",
          type: "line",
          stack: "总量",
          areaStyle: {
            normal: {}
          },
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: "联盟广告",
          type: "line",
          stack: "总量",
          areaStyle: {
            normal: {}
          },
          data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
          name: "视频广告",
          type: "line",
          stack: "总量",
          areaStyle: {
            normal: {}
          },
          data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
          name: "直接访问",
          type: "line",
          stack: "总量",
          areaStyle: {
            normal: {}
          },
          data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
          name: "搜索引擎",
          type: "line",
          stack: "总量",
          label: {
            normal: {
              show: true,
              position: "top"
            }
          },
          areaStyle: {
            normal: {}
          },
          data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
      ]
    };
  }

  onChartEvent(e, name) {
    // console.log(name, e)
  }
  echartsInstance;
  onChartInit(ec) {
    this.echartsInstance = ec;
  }
  echartsInstance2;
  onChartInit2(ec) {
    this.echartsInstance2 = ec;
  }

  resizeChart() {
    if (this.echartsInstance) {
      this.echartsInstance.resize();
    }
  }
  getWidth() {
    if (this.echartsInstance) {
      console.log("getWidth():", this.echartsInstance.getWidth());
    }
  }

  getHeight() {
    if (this.echartsInstance) {
      console.log("getHeight():", this.echartsInstance.getHeight());
    }
  }

  getDom() {
    if (this.echartsInstance) {
      console.log("getDom():", this.echartsInstance.getDom());
    }
  }

  getOption() {
    if (this.echartsInstance) {
      console.log("getOption():", this.echartsInstance.getOption());
    }
  }

  clear() {
    if (this.echartsInstance) {
      this.echartsInstance.clear();
      console.log("clear() called");
    }
  }
}
