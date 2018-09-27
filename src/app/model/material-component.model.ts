export interface MaterialComponent {
  directive?: {
    name: string;
    selector: string;
    exported: string;
  };
  methods?: {
    name: string;
    detail: string;
  }[];
  properties?: {
    name: string;
    detail: string;
  }[];
  class?: {
    name: string;
    detail: string;
    properties?: {
      name: string;
      detail: string;
    }[];
  };
  interface?: {
    name: string;
    detail: string;
    properties?: {
      name: string;
      detail: string;
    }[];
  };
}
