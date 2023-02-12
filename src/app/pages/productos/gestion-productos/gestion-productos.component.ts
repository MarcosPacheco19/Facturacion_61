import { Component, OnInit } from '@angular/core';
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

  displayedColumns: string[] = ['Cedula', 'Nombre','Direccion', 'Año Nacimiento'];

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
      this.lstProductos = data
    })
  }

  guardar(){
    console.log(this.producto)
    this.productosService.save(this.producto).subscribe(data => console.log(data))
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.productos.filter = filterValue.trim().toLowerCase();

    if (this.productos.paginator) {
      this.productos.paginator.firstPage();
    }
  }
}
