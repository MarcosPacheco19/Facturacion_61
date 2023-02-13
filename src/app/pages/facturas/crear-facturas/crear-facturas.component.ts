import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Factura } from 'src/app/domain/factura';
import { FacturasService } from 'src/app/services/facturas.service';

@Component({
  selector: 'app-crear-facturas',
  templateUrl: './crear-facturas.component.html',
  styleUrls: ['./crear-facturas.component.css']
})
export class CrearFacturasComponent {

  title = "Listado de facturas existentes"
  lstFacturas = new Array()
  factura: Factura = new Factura()
  facturas: any

  columnsToDisplay: string[] = ['numero','cliente','total'];

  constructor(private router: Router, private facturaService: FacturasService){ }


  ngOnInit(): void {
    this.loadFacturas()
  }

  loadFacturas(){
    this.facturas = this.facturaService.getAllFacturas()

    this.facturas.subscribe((data: any) => {
      this.lstFacturas = data
    })
  }

  guardar(){

  }
}
