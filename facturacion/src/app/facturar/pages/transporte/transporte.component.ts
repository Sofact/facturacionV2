import { Component } from '@angular/core';

import { ConnectService } from '../../connect.service';
import { InterfaceRest } from '../../../interfaces/interface-rest';



@Component({
  selector: 'app-transporte',
  templateUrl: './transporte.component.html',
  styleUrls: ['./transporte.component.css']
})
export class TransporteComponent {

  respuesta!: InterfaceRest ;
  constructor ( private connectService: ConnectService){}

  consultar(){
    
    this.connectService.getData()
    .subscribe( resp => this.respuesta = resp);
    return this.respuesta;
    
  }

}
