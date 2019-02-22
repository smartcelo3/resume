import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css']
})
export class InterestsComponent implements OnInit {

  @Input() interest:any;
  constructor() { }

  ngOnInit() {
  }

}
