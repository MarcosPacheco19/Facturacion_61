import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FacturasService } from 'src/app/services/facturas.service';
import { Factura } from 'src/app/domain/factura';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-gestion-facturas',
  templateUrl: './gestion-facturas.component.html',
  styleUrls: ['./gestion-facturas.component.css']
})
export class GestionFacturasComponent implements OnInit{

  lstFacturas= new Array()

  dataSource = new MatTableDataSource(this.lstFacturas);

  displayedColumns: string[] = ['numero','cliente','total', 'acciones'];

  factura: Factura = new Factura()

  facturas: any

  constructor(private router: Router, private facturasService: FacturasService){ }


  ngOnInit(): void {
    this.loadFacturas()
  }

  loadFacturas(){
    this.facturas = this.facturasService.getAllFacturas()
    console.log(this.factura)
    this.facturas.subscribe((data: any) => {
      console.log("data", data)
      this.dataSource = data
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
