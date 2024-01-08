import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.setActiveClass(event.url);
      }
    })
  }

  private setActiveClass(url: string): void {
    const links = document.querySelectorAll('.nav-link');

    links.forEach((link) => {
      const routerLink = link.getAttribute('routerLink');

      if (routerLink && url.includes(routerLink)) {
        link.classList.add('active');
      } else {
        link.classList.remove('active')
      }
    })
  }

}
