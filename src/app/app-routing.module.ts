import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionClientesComponent } from './pages/clientes/gestion-clientes/gestion-clientes.component';
import { GestionProductosComponent } from './pages/productos/gestion-productos/gestion-productos.component';

const routes: Routes = [
  {path: "clientes/gestion-clientes", component: GestionClientesComponent},
  {path: "productos/gestion-productos", component: GestionProductosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
