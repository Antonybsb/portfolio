import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  words: string[] = ['TypeScript', 'Angular', 'HTML', 'CSS', 'Bootstrap', 'SQL', 'JavaWeb', 'SpringBoot', 'Photoshop', 'CorelDraw'];
  currentWordIndex = 0;

  ngOnInit(): void {
    setInterval(() => {
      this.currentWordIndex =
        (this.currentWordIndex + 1) % this.words.length;
    }, 4000);
  }



}
