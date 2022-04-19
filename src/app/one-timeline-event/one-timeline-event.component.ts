import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-timeline-event',
  templateUrl: './one-timeline-event.component.html',
  styleUrls: ['./one-timeline-event.component.css'],
})
export class OneTimelineEventComponent implements OnInit {
  @Input() oneTimelineEvent: any;

  constructor() {}

  ngOnInit(): void {}
}
