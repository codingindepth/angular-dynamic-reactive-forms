import { Component } from '@angular/core';
import { Product,productFeatures } from './products/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'e-portal-app';
  name = 'Angular';
  productField: any = {};
}
