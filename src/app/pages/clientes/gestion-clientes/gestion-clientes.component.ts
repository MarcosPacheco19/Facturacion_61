import { Component, OnInit } from '@angular/core';
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
      this.lstClientes = data
    })
  }

  guardar(){
    console.log(this.cliente)
    this.clientesService.save(this.cliente).subscribe(data => console.log(data))
    this.loadClientes()
  }

  tiles: any[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];
}
