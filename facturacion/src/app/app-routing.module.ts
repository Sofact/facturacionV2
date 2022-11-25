import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransporteComponent } from './facturar/pages/transporte/transporte.component';

const routes: Routes = [
  {
    path:'transporte',
    component: TransporteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
