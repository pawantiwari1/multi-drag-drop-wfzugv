import { Component } from "@angular/core";
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from "@angular/cdk/drag-drop";

import * as faker from "faker";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  toDoList = [];
  inProgressList = [];
  doneList = [];

  constructor() {
    this.toDoList = ["testing1", "twsting2", "testing3", "testing4"];
    this.inProgressList = ["test1", "test2", "test3", "test4"];
    this.doneList = ["task1", "task2", "task3", "taslk4", "task5"];
    // this.toDoList = Array.from({ length: 5 }).map(() => faker.hacker.phrase())
    // this.inProgressList = Array.from({ length: 5 }).map(() => faker.hacker.phrase())
    // this.doneList = Array.from({ length: 5 }).map(() => faker.hacker.phrase())
  }

  drop(event: CdkDragDrop<string[]>) {
    // console.log(event)
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
  onEntered(enter) {
    console.log("ee", enter);
  }
}
