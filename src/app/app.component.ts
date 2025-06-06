import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ProductCardComponent } from './product-card/product-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ProductCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  products = [
    {
      id: 1,
      name:'Laptop',
      price: 1200,
      description: 'powerful Laptop for   w ork and Play',
      image: 'https://via.placeholder.com/200x150',
      inStock: true
    },
    {
      id: 2,
      name: 'Smartphone',
      price: 800,
      description: 'samrtphone with advanced features',
      image: 'https://via.placeholder.com/200x150',
      inStock: true
    },
    {
      id: 3,
      name: 'Headphone',
      price: 150,
      description: 'Wireless Headphone with Excellent sound Quality',
      image: 'https://via.placeholder.com/200x150',
      inStock: false
    }
  ];
}
