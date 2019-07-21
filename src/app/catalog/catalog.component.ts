import { Component, OnInit } from '@angular/core';
import { Products } from '../products';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {
  products = Products;
}
