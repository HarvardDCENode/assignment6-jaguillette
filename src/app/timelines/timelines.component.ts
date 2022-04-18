import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timelines',
  templateUrl: './timelines.component.html',
  styleUrls: ['./timelines.component.css']
})
export class TimelinesComponent implements OnInit {
  // This thing's job is to get all the timeline data and feed it to child components for display

  constructor() { }

  ngOnInit(): void {
  }

}
