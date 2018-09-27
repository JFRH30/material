import { Component, OnInit } from '@angular/core';
import { MaterialComponent } from '../../../model/material-component.model';
import { ActivatedRoute } from '@angular/router';
// import { routes } from '../../../data/routes.data';
import { MaterialRoutes } from '../../../model/material-routes.model';
import { routes } from '../../../data/routes.data';

@Component({
  selector: 'app-api-viewer',
  templateUrl: './api-viewer.component.html',
  styleUrls: ['./api-viewer.component.scss']
})
export class ApiViewerComponent implements OnInit {
  components: MaterialComponent[];
  routes = [];
  control = false;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.routes = routes;
    for (const route of this.routes) {
      for (const subRoute of route.subRoutes) {
        if (this.route.snapshot.paramMap.get('component') === subRoute.path) {
          this.components = subRoute.data;
          console.log(this.components);
        }
      }
    }
    this.route.params.subscribe(res => {
      for (const route of this.routes) {
        for (const subRoute of route.subRoutes) {
          if (res.component === subRoute.path) {
            this.components = subRoute.data;
            console.log(this.components);
          }
        }
      }
    });
  }
}
