import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GestionComponent } from './pages/clientes/gestion/gestion.component';
import { GestionClientesComponent } from './pages/clientes/gestion-clientes/gestion-clientes.component';
import { GestionProductosComponent } from './pages/productos/gestion-productos/gestion-productos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    GestionComponent,
    GestionClientesComponent,
    GestionProductosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
