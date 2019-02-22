import { Component, OnInit, Input } from '@angular/core';
import { MenuModel } from '../models/menu.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input() menus : MenuModel[];
  constructor() {}

  ngOnInit() {}
}
