import { Injectable } from '@angular/core';
import { Item } from './item';

@Injectable()
export class LessonsService {
  lessons: Item[] = [];

  useLesson(id) {
    if (this.lessons[id].type === 'free') {
      this.lessons[id].type = 'used';
      var date = new Date();
      var when = (date.getDate() + 1) + '.' + (date.getMonth() + 1);
      this.lessons[id].date = when;
    } else {
      this.lessons[id].date = '.';
      this.lessons[id].type = 'free';
    }
    localStorage.setItem('lessons', JSON.stringify(this.lessons));
  }

  getLessons() {
    this.lessons;
  }

  addLesson(lesson) {
    this.lessons.push(lesson);
  }

  resetLessons() {
    this.lessons = [];
    localStorage.setItem('lessons', '');
    this.initLessons();
  }

  initLessons() {
    var less = localStorage.getItem('lessons');
    if (less) {
      this.lessons = JSON.parse(less);
    } else {
      var t0 = new Item();
      t0.type = 'free';
      t0.date = '.';
      t0.id = 0;
      this.lessons.push(t0);
      var t1 = new Item();
      t1.type = 'free';
      t1.date = '.';
      t1.id = 1;
      this.lessons.push(t1);
      var t2 = new Item();
      t2.type = 'free';
      t2.date = '.';
      t2.id = 2;
      this.lessons.push(t2);
      var t3 = new Item();
      t3.type = 'free';
      t3.date = '.';
      t3.id = 3;
      this.lessons.push(t3);
      var t4 = new Item();
      t4.type = 'free';
      t4.date = '.';
      t4.id = 4;
      this.lessons.push(t4);
      var t5 = new Item();
      t5.type = 'free';
      t5.date = '.';
      t5.id = 5;
      this.lessons.push(t5);
      var t6 = new Item();
      t6.type = 'free';
      t6.date = '.';
      t6.id = 6;
      this.lessons.push(t6);
      var t7 = new Item();
      t7.type = 'free';
      t7.date = '.';
      t7.id = 7;
      this.lessons.push(t7);
      var t8 = new Item();
      t8.type = 'free';
      t8.date = '.';
      t8.id = 8;
      this.lessons.push(t8);
      var t9 = new Item();
      t9.type = 'free';
      t9.date = '.';
      t9.id = 9;
      this.lessons.push(t9);
      localStorage.setItem('lessons', JSON.stringify(this.lessons));
    }
  }
}
