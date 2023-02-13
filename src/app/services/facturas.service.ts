import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FacturasService {

  constructor(private http: HttpClient) { }

  getAllFacturas(): Observable<any[]>{
    return this.http.get<any>('http://localhost:8080/ProyectoFinal/rs/facturas/all')
  }
}
