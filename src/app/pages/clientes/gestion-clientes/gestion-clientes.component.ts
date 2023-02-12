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

  displayedColumns: string[] = ['Cedula', 'Nombre','Direccion', 'Año Nacimiento'];

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
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.clientes.filter = filterValue.trim().toLowerCase();

    if (this.clientes.paginator) {
      this.clientes.paginator.firstPage();
    }
  }


}
