import { Component, OnInit } from "@angular/core";
import { DndDropEvent, DropEffect } from "ngx-drag-drop";

@Component({
  selector: "app-drag-and-drop",
  templateUrl: "./drag-and-drop.component.html",
  styleUrls: ["./drag-and-drop.component.css"]
})
export class DragAndDropComponent implements OnInit {
  draggable = {
    data: "myDragData",
    effectAllowed: "all",
    disable: false,
    handle: false
  };

  onDragStart(event: DragEvent) {
    console.log("drag started", JSON.stringify(event, null, 2));
  }

  onDragEnd(event: DragEvent) {
    console.log("drag ended", JSON.stringify(event, null, 2));
  }

  onDraggableCopied(event: DragEvent) {
    console.log("draggable copied", JSON.stringify(event, null, 2));
  }

  onDraggableLinked(event: DragEvent) {
    console.log("draggable linked", JSON.stringify(event, null, 2));
  }

  onDraggableMoved(event: DragEvent) {
    console.log("draggable moved", JSON.stringify(event, null, 2));
  }

  onDragCanceled(event: DragEvent) {
    console.log("drag cancelled", JSON.stringify(event, null, 2));
  }

  onDragover(event: DragEvent) {
    console.log("dragover", JSON.stringify(event, null, 2));
  }

  onDrop(event: DndDropEvent) {
    console.log("dropped", JSON.stringify(event, null, 2));
  }
}
