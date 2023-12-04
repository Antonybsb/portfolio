import { Component, OnInit } from '@angular/core';
import { CurriculoPdfComponent } from '../curriculo-pdf/curriculo-pdf.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent implements OnInit {

  words: string[] = ['FullStack', 'TypeScript', 'Angular', 'HTML', 'CSS', 'Bootstrap', 'SQL', 'JavaWeb', 'SpringBoot'];
  currentWordIndex = 0;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    setInterval(() => {
      this.currentWordIndex =
        (this.currentWordIndex + 1) % this.words.length;
    }, 4000);
  }

  openDialog() {
    const dialogRef = this.dialog.open(CurriculoPdfComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


}


