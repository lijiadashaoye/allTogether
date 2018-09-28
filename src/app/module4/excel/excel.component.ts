import { Component, OnInit, ElementRef } from "@angular/core";
import { NgxXLSXService } from "@notadd/ngx-xlsx";
import * as XLSX from "xlsx"; //XLSX 是浏览器中的公开变量和导出的节点变量
@Component({
  selector: "app-excel",
  templateUrl: "./excel.component.html",
  styleUrls: ["./excel.component.css"]
})
export class ExcelComponent implements OnInit {
  constructor(public xls: NgxXLSXService, private elem: ElementRef) {}

  ngOnInit() {}
  download1() {
    // 使用 ngx-xlsx 读取多维数组
    let data = [
      // 数据为数组结构，每一个二维数组代表一个表格，对应下边sheetNames，一般只用一个
      [["第一行", "第二行"], ["第一列", "第二列"]] // 每一个三维数组，对应Excel一行，三维数组有多少项就会有多少列
    ];
    let excelFileName: string = "err"; // 导出的文件的名字，自动给加上时间戳
    let header = ["sheet1表头一", "sheet1表头二"]; // 表格的第一行，要与三维数组在length上一样
    let sheetNames = ["sheet1"];
    this.xls.exportAsExcelFile(data, excelFileName, header, sheetNames);
  }
  download2() {
    // 读取表格数据
    let tables = this.elem.nativeElement.querySelector("#t1");
    let wb: XLSX.WorkBook = XLSX.utils.table_to_book(tables);
    // table_to_sheet 将DOM TABLE元素转换为工作表。
    let ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(tables);
    XLSX.utils.book_append_sheet(wb, ws, "Sheet5");
    XLSX.writeFile(wb, "读取表格数据.xlsx");
  }

  download3() {
    // 提取和解析HTML代码
    let tables = this.elem.nativeElement.querySelector("#t1").outerHTML;
    var wb = XLSX.read(tables, { type: "string" });
    XLSX.writeFile(wb, "读取表格数据.xlsx");
  }

  download4() {
    // 读取二维数组数据
    let data = [["表头一", "表头二", "表头三"], [1, 2, 3], [1, 2, 3]];
    let ws: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(data);
    // aoa_to_sheet 将JS数据数组的数组转换为工作表。
    let wb: XLSX.WorkBook = XLSX.read(data, { type: "array" }); // XLSX.read(data, read_opts)尝试解析data。
    XLSX.utils.book_append_sheet(wb, ws, "Sheet2"); // 用来标识将表格写到第几sheet，可以不写
    XLSX.writeFile(wb, "读取二维数组数据.xlsx");
  }
  download5() {
    // 插入 JS 数组数据
    // origin：使用指定的单元格作为起点，参数：
    // object:	使用指定的单元格(origin: { r: 1, c: 4 })
    // string:	使用指定的单元格作为起始行 ({ origin: "B2" })
    // (number >= 0)：从指定行的第一列开始,0代表第一行,如果在插入之前表格已经有数据，会被覆盖
    // -1：附加到工作表的底部
    let data = [["表头一", "表头二", "表头三"]];
    var ws = XLSX.utils.aoa_to_sheet(data);
    XLSX.utils.sheet_add_aoa(ws, [[1, 2], [2, 3], [3, 4]], { origin: "B8" });
    // sheet_add_aoa 将JS数据数组添加到现有工作表中。
    XLSX.utils.sheet_add_aoa(ws, [[5, 6, 7], [6, 7, 8], [7, 8, 9]], {
      origin: { r: 1, c: 4 }
    });
    XLSX.utils.sheet_add_aoa(ws, [[42, 52, 62, 72]], { origin: 1 });
    XLSX.utils.sheet_add_aoa(ws, [[4, 5, 6, 7, 8, 9, 0]], { origin: -1 });
    let wb: XLSX.WorkBook = XLSX.read(data, { type: "array" }); // XLSX.read(data, read_opts)尝试解析data。
    XLSX.utils.book_append_sheet(wb, ws, "Sheet3");
    XLSX.writeFile(wb, "读取二维数组数据.xlsx");
  }

  download6() {
    let data = [
      {
        one: "11111",
        two: "22222",
        three: "33333"
      },
      {
        one: "11111",
        two: "22222",
        three: "33333"
      }
    ];
    let header = ["表头一", "表头二", "表头三"];
    let title='读取对象数组';
    let downData = [];
    data.forEach(item => {
      let obj = {
        表头一: item.one,
        表头二: item.two,
        表头三: item.three
      };
      downData.push(obj);
    });

    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(downData, { header });
    const wb: XLSX.WorkBook = XLSX.utils.book_new();  // 使用新表格，Sheet1
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    XLSX.writeFile(wb, `${title}.xlsx`);
  }
}
