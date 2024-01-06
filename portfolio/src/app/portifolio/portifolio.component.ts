import { Component } from '@angular/core';
import { Jobs } from '../interfaces/jobs';

@Component({
  selector: 'app-portifolio',
  templateUrl: './portifolio.component.html',
  styleUrls: ['./portifolio.component.css']
})
export class PortifolioComponent {

  maxCards!: number;

  ngOnInit() {

    this.setMaxCards();

    window.addEventListener('resize', this.onResize.bind(this));

  }

  ngOnDestroy() {
    window.removeEventListener('resize', this.onResize.bind(this));
  }

  onResize(_event: any) {
    this.setMaxCards();
  }

  private setMaxCards() {
    if (window.innerWidth < 768) {
      this.maxCards = 1;
    } else {
      this.maxCards = 3;
    }
  }

  products: Jobs[] = [
    {
      imagem: 'assets/products/menu.png',
      nome: 'Projeto desenvolvido juntamente com o professor Weverton Lima. Curso FrontLee',
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
    const maxIndex = this.products.length - this.maxCards; // Mostrar 4 cards por vez
    if (this.currentIndex < maxIndex) {
      this.currentIndex++;
    }
  }
}
