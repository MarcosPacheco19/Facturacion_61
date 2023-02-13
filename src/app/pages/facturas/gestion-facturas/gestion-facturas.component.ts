import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FacturasService } from 'src/app/services/facturas.service';
import { Factura } from 'src/app/domain/factura';
@Component({
  selector: 'app-gestion-facturas',
  templateUrl: './gestion-facturas.component.html',
  styleUrls: ['./gestion-facturas.component.css']
})
export class GestionFacturasComponent implements OnInit{

  title = "Listado de facturas existentes"
  lstClientes = new Array()
  facturas: any

  columnsToDisplay: string[] = ['numero','cliente','total', 'acciones'];

  constructor(private router: Router, private facturaService: FacturasService){ }


  ngOnInit(): void {
    this.loadFacturas()
  }

  loadFacturas(){
    this.facturas = this.facturaService.getAllFacturas()

    this.facturas.subscribe((data: any) => {
      this.lstClientes = data
    })
  }

  editFactura(factura: Factura){

  }

  estadoFactura(factura: Factura){
    
  }

  navCrearFactura(){
    this.router.navigate(['facturas/crear-facturas'])
  }

}
