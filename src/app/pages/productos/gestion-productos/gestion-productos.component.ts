import { Component, ElementRef, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Producto } from 'src/app/domain/producto';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-gestion-productos',
  templateUrl: './gestion-productos.component.html',
  styleUrls: ['./gestion-productos.component.css']
})
export class GestionProductosComponent implements OnInit{

  lstProductos = new Array()

  dataSource = new MatTableDataSource(this.lstProductos);

  displayedColumns: string[] = ['Codigo', 'Nombre', 'Precio', 'Stock', 'Accion'];

  producto: Producto = new Producto()

  productos:any

  constructor(private router: Router, private productosService: ProductosService) {}

  ngOnInit(): void {
    this.loadProductos()
  }

  loadProductos(){
    this.productos = this.productosService.getAllProductos()
    console.log(this.producto)
    this.productos.subscribe((data: any) => {
      console.log("data", data)
      this.dataSource = data
    })
  }

  guardar(){
    console.log(this.producto)
    this.productosService.save(this.producto).subscribe(data => {
      console.log(data)
      this.loadProductos()
      this.limpiar()
    })
  }

  eliminar(producto: Producto){
    console.log(producto)
    this.productosService.delete(producto).subscribe(data =>{
      console.log(data)
      this.loadProductos()
    } )
  }

  actualizar(){
    this.productosService.update(this.producto).subscribe(data =>{
      console.log(data)
      this.loadProductos()
      this.limpiar()
    })
  }

  completar(producto: Producto){
    this.producto.codigo=producto.codigo;
    this.producto.nombre=producto.nombre;
    this.producto.precio=producto.precio;
    this.producto.stock=producto.stock;
  }

  limpiar(){
    this.producto.codigo='';
    this.producto.nombre='';
    this.producto.precio=null;
    this.producto.stock=null;
  }
}
