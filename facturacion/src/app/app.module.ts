import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransporteComponent } from './facturar/pages/transporte/transporte.component';

import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';


@NgModule({
  declarations: [
    AppComponent,
    TransporteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule
    
  ],exports: [
    MenubarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
