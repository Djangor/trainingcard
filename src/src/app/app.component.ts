import { Component, OnInit } from '@angular/core';
import { Item } from './item';
import { LessonsService } from './lessons.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'app';



  constructor(public lessonsService: LessonsService) {}

  ngOnInit() {
    this.lessonsService.initLessons();
    this.getItems();
  }

  getItems(): void {
    this.lessonsService.getLessons();
  }
}

