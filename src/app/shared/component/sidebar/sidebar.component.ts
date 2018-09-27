import { Component, OnInit } from '@angular/core';
import { routes } from '../../../data/routes.data';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  routes = [];
  constructor() {}

  ngOnInit() {
    this.routes = routes;
  }
}
