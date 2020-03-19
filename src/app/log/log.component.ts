import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {
  startTime: Date;
  endTime: Date;

  constructor() {

    this.endTime = new Date();
    this.startTime = new Date();
    this.startTime.setDate(this.endTime.getDate() - 1);
  }


  ngOnInit(): void {
  }

}
