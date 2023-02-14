import { Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/domain/cliente';
import { Detalle } from 'src/app/domain/detalle';
import { Factura } from 'src/app/domain/factura';
import { Producto } from 'src/app/domain/producto';
import { ClientesService } from 'src/app/services/clientes.service';
import { FacturasService } from 'src/app/services/facturas.service';
import { ProductosService} from 'src/app/services/productos.service';
@Component({
  selector: 'app-crear-facturas',
  templateUrl: './crear-facturas.component.html',
  styleUrls: ['./crear-facturas.component.css']
})
export class CrearFacturasComponent {

  lstDetalles = new Array()

  factura: Factura = new Factura()
  facturas: any

  cliente: Cliente = new Cliente()
  clientes:any

  producto: Producto = new Producto()
  productos:any

  detalle: Detalle = new Detalle()
  detalles:any

  subtotal: number = 0;
  iva: number = 0;


  @ViewChild(MatTable) table: any;

  columnsToDisplay: string[] = ['Accion','Numero','Precio','Cantidad','Total'];

  constructor(private router: Router, private facturaService: FacturasService, private clientesService: ClientesService, 
    private productosService: ProductosService){ }


  ngOnInit(): void {
    this.loadCabecera()
  }


  buscarCliente(cliente: Cliente){
    console.log(cliente)
    this.clientesService.read(cliente).subscribe((data: any)  =>{
      console.log(data)
      this.cliente.nombre = data.nombre;
      this.cliente.direccion = data.direccion;
      this.cliente.anioNacimiento = data.anioNacimiento;
    } )
  }

  buscarProducto(producto: Producto){
    console.log(producto)
    this.productosService.read(producto).subscribe((data: any)  =>{
      console.log(data)
      this.producto = data
    } )
  }

  agregarDetalle(){
    this.detalle.precio = this.producto.precio;
    this.detalle.producto = this.producto;
    this.detalle.subtotal = this.producto.precio!*this.detalle.cantidad!
    this.lstDetalles.push(this.detalle)
    this.subtotal= this.subtotal! + this.detalle.subtotal!;
    this.iva= (this.subtotal * 0.12)+this.subtotal;
    this.producto = new Producto()
    this.detalle = new Detalle()
    console.log(this.lstDetalles)
    this.table.renderRows()
  }

  loadCabecera(){
    this.facturas = this.facturaService.getNumFactura()
    this.facturas.subscribe(
      (data: any)  =>{
        console.log(data)
        this.factura.numero = data.NumFac;
      }
    )
  }

  guardar(){

  }

  navCrearCliente(){
    this.router.navigate(['clientes/gestion-clientes'])
  }

  navCrearProducto(){
    this.router.navigate(['productos/gestion-productos'])
  }
}
