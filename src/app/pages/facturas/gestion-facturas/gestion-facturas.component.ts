import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FacturasService } from 'src/app/services/facturas.service';

@Component({
  selector: 'app-gestion-facturas',
  templateUrl: './gestion-facturas.component.html',
  styleUrls: ['./gestion-facturas.component.css']
})
export class GestionFacturasComponent implements OnInit{

  title = "Listado de facturas existentes"
  lstClientes = new Array()
  facturas: any

  columnsToDisplay: string[] = ['Cedula', 'Nombre', 'Año Nacimiento'];

  constructor(private router: Router,
    private facturaService: FacturasService){ }


  ngOnInit(): void {
    this.loadFacturas()
  }

  loadFacturas(){
    
  }
}
