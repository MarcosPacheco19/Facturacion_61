import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Producto } from '../domain/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) { }

  save (producto: Producto): Observable<any[]> {
      return this.http.post<any>('', producto)
  }

  getAllProductos(): Observable<any[]>{
    return this.http.get<any>('')
  }
}
