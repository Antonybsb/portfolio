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
      imagem: 'assets/products/emBreve.png',
      nome: 'Em Breve 1'

    },
    {
      imagem: 'assets/products/emBreve.png',
      nome: 'Em Breve 2'

    },
    {
      imagem: 'assets/products/emBreve.png',
      nome: 'Em Breve 3'
    },
    {
      imagem: 'assets/products/emBreve.png',
      nome: 'Em Breve 4'
    },
    {
      imagem: 'assets/products/emBreve.png',
      nome: 'Em Breve 5'
    },
    {
      imagem: 'assets/products/emBreve.png',
      nome: 'Em Breve 6'
    },
    {
      imagem: 'assets/products/emBreve.png',
      nome: 'Em Breve 7'
    },
    {
      imagem: 'assets/products/emBreve.png',
      nome: 'Em Breve 8'
    },
    {
      imagem: 'assets/products/emBreve.png',
      nome: 'Em Breve 9'
    },
    {
      imagem: 'assets/products/emBreve.png',
      nome: 'Em Breve 10'
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
