import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recent-updates',
  templateUrl: './recent-updates.component.html',
  styleUrls: ['./recent-updates.component.scss']
})
export class RecentUpdatesComponent implements OnInit {
  public updateText: string = "Karim Mostafa Post in Learning Powerful mental course a new update";
  constructor() { }

  ngOnInit() {
  }

}
