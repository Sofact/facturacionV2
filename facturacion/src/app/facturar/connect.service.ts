import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InterfaceRest } from '../interfaces/interface-rest';

@Injectable({
  providedIn: 'root'
})
export class ConnectService {

  private baseUrl : string = 'http://localhost:8081/greeting'

  

  constructor( private http: HttpClient) { }

  getData (): Observable <InterfaceRest>{
  
    const params = new HttpParams()
    .set('name', "Julian")
    .set('uses',"Desarrollo");

    return this.http.get<InterfaceRest>(this.baseUrl, {params});

    
  }
  saveData() {
  
   // this.http.patch(this.baseUrl);
  }
}
