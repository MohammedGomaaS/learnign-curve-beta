import { Component, OnInit, ViewChild } from '@angular/core';
import { CarouselComponent } from 'angular-responsive-carousel';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @ViewChild('myCarousel', { static: false }) myCarousel: CarouselComponent;
  public dayNumbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
  public activeDay:number = 1

  constructor() { }

  ngOnInit() {
  }
  public onNextDay(): void {
    this.myCarousel.next();
  }
  public onPreviousDay(): void {
    this.myCarousel.prev();
  }

}
