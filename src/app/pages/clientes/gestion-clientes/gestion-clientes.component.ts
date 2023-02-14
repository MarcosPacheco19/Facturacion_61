import { Component, ElementRef, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/domain/cliente';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-gestion-clientes',
  templateUrl: './gestion-clientes.component.html',
  styleUrls: ['./gestion-clientes.component.css']
})
export class GestionClientesComponent implements OnInit {
  
  lstClientes = new Array()

  dataSource = new MatTableDataSource(this.lstClientes);
  
  displayedColumns: string[] = ['Cedula', 'Nombre','Direccion', 'Año Nacimiento', 'Accion'];

  cliente: Cliente = new Cliente()

  clientes:any

  constructor(private router: Router, private clientesService: ClientesService) {}

  ngOnInit(): void {
    this.loadClientes()
  }

  loadClientes(){
    this.clientes = this.clientesService.getAllClientes()
    console.log(this.cliente)
    this.clientes.subscribe((data: any) => {
      console.log("data", data)
      this.dataSource = data
    })
  }

  guardar(){
    console.log(this.cliente)
    this.clientesService.save(this.cliente).subscribe(data =>{
      console.log(data)
      this.loadClientes()
      this.limpiar()
    })
  }

  eliminar(cliente: Cliente){
    console.log(cliente)
    this.clientesService.delete(cliente).subscribe(data =>{
      console.log(data)
      this.loadClientes()
    } )
  }

  actualizar(){
    this.clientesService.update(this.cliente).subscribe(data =>{
      console.log(data)
      this.loadClientes()
      this.limpiar()
    })
  }

  completar(cliente: Cliente){
    this.cliente.anioNacimiento=cliente.anioNacimiento;
    this.cliente.cedula=cliente.cedula;
    this.cliente.direccion=cliente.direccion;
    this.cliente.nombre=cliente.nombre;
  }
  

  limpiar(){
    this.cliente.anioNacimiento=null;
    this.cliente.cedula='';
    this.cliente.direccion='';
    this.cliente.nombre='';
  }
}
