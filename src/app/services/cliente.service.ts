import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../domain/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  save (cliente: Cliente): Observable<any[]> {
      return this.http.post<any>("http://localhost:8080/demojpa/rs/clientes", cliente)
  }

  getAllClientes(): Observable<any[]>{
    return this.http.get<any>('http://localhost:8080/demojpa/rs/clientes')
  }
}
