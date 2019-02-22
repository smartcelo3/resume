import { Component, OnInit, Input } from '@angular/core';
import { EducationModel } from '../models/education.model';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  @Input() title: string;
  @Input() educations: EducationModel[];
  
  constructor() { }

  ngOnInit() {
  }

}
