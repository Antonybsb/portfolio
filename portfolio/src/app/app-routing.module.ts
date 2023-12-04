import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { ContatoComponent } from './contato/contato.component';
import { PortifolioComponent } from './portifolio/portifolio.component';
import { CurriculoPdfComponent } from './curriculo-pdf/curriculo-pdf.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

const routes: Routes = [
  {
    path: '', component: ToolbarComponent, children: [
      { path: '', component: HomeComponent },
      { path: 'sobre', component: SobreComponent },
      { path: 'contato', component: ContatoComponent },
      { path: 'portifolio', component: PortifolioComponent },
      { path: 'curriculo', component: CurriculoPdfComponent },
    ]
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
