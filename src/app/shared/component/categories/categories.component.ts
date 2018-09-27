import { Component, OnInit } from '@angular/core';
import { routes } from '../../../data/routes.data';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  routes = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    console.log(this.route.snapshot.paramMap.get('item'));
    this.routes = routes;
    for (const route of this.routes) {
      if (this.route.snapshot.paramMap.get('item') === route.path) {
        this.routes = route.subRoutes;
      }
    }
    this.route.params.subscribe(res => {
      for (const route of this.routes) {
        if (res.item === route.path) {
          this.routes = route.subRoutes;
        }
      }
    });
  }
}
