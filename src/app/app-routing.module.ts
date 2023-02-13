import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionClientesComponent } from './pages/clientes/gestion-clientes/gestion-clientes.component';
import { GestionProductosComponent } from './pages/productos/gestion-productos/gestion-productos.component';
import { GestionFacturasComponent } from './pages/facturas/gestion-facturas/gestion-facturas.component';
import { CrearFacturasComponent } from './pages/facturas/crear-facturas/crear-facturas.component';

const routes: Routes = [
  {path: "", children:[
    {path: "clientes/gestion-clientes", component: GestionClientesComponent},
    {path: "productos/gestion-productos", component: GestionProductosComponent},
    {path: "facturas/gestion-facturas", component: GestionFacturasComponent},
    {path: "facturas/crear-facturas", component:CrearFacturasComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
