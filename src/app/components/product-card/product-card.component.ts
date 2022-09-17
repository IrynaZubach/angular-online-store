import {Component, Input, OnInit} from '@angular/core';

export interface ProductI {
  id: string;
  images: string[];
  title: string;
  rating: number;
  price: number;
  category: string;
  brand: string;
}

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() product: any;

  constructor() { }

  ngOnInit(): void {
    // console.log('ngOnInit');
  }

  public handleCardClick(): void {
    console.log('handleCardClick', this.product);
    const firstImage = this.product.images.shift();
    this.product.images.push(firstImage);
  }

}
