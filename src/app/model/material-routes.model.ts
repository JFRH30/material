import { MaterialComponent } from './material-component.model';

export interface MaterialRoutes {
  path: string;
  name: string;
  subRoutes?: {
    path: string;
    data?: MaterialRoutes[];
    name: string;
  };
}
