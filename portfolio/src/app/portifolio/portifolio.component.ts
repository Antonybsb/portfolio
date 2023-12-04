import { Component } from '@angular/core';
import { Jobs } from '../interfaces/jobs';

@Component({
  selector: 'app-portifolio',
  templateUrl: './portifolio.component.html',
  styleUrls: ['./portifolio.component.css']
})
export class PortifolioComponent {


  products: Jobs[] = [
    {
      imagem: 'assets/products/banner1.png',
      nome: 'Blazer Masculino'

    },
    {
      imagem: 'assets/products/banner2.png',
      nome: 'Vestido Cetin Roxo'

    },
    {
      imagem: 'assets/products/banner3.png',
      nome: 'Tênis Corrida'
    },
    {
      imagem: 'assets/products/banner4.png',
      nome: 'Smart Watch'
    },
    {
      imagem: 'assets/products/delta.png',
      nome: 'Bota Motociclista'
    },
    {
      imagem: 'assets/products/feature_3.png',
      nome: 'Tênis Corrida'
    },
    {
      imagem: 'assets/products/image2.png',
      nome: 'Sandália Anabella'
    },
    {
      imagem: 'assets/products/image3.png',
      nome: 'Tenis 12 Molas'
    },
    {
      imagem: 'assets/products/img08.jpg',
      nome: 'Ração Para Gatos'
    },
    {
      imagem: 'assets/products/img09.jpg',
      nome: 'Vermífugo'
    }
  ];

  currentIndex = 0;
  cardWidth = 330; // Largura do card + margem (ajuste conforme seu estilo)

  left_mover() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  right_mover() {
    const maxIndex = this.products.length - 4; // Mostrar 4 cards por vez
    if (this.currentIndex < maxIndex) {
      this.currentIndex++;
    }
  }
}
