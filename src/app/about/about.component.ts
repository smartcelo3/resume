import { Component, OnInit, Input } from '@angular/core';
import { AboutModel } from '../models/about.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  @Input() public about : AboutModel;
  constructor( ) { }

  ngOnInit() {  }

}
