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
      return this.http.post<any>('http://localhost:8080/ProyectoFinal/rs/productos', producto)
  }

  getAllProductos(): Observable<any[]>{
    return this.http.get<any>('http://localhost:8080/ProyectoFinal/rs/productos')
  }

  delete(producto: Producto): Observable<any[]>{
    return this.http.delete<any>('http://localhost:8080/ProyectoFinal/rs/productos/eliminarProducto?codigo='+producto.codigo)
  }

  update(producto: Producto): Observable<any[]>{
    return this.http.put<any>('http://localhost:8080/ProyectoFinal/rs/productos/actualizarProducto', producto)
  }

  read(producto: Producto){
    return this.http.get<any>('http://localhost:8080/ProyectoFinal/rs/productos/buscarProducto?codigo='+producto.codigo)
  }
}
