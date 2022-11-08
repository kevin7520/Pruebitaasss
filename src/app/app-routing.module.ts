import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AceptarCompraComponent } from './views/cliente/aceptar-compra/aceptar-compra.component';
import { CarritoProductosComponent } from './views/cliente/carrito-productos/carrito-productos.component';
import { CrearProductoComponent } from './views/cliente/crear-producto/crear-producto.component';
import { CrudProductoCuerpoComponent } from './views/cliente/crud-producto-cuerpo/crud-producto-cuerpo.component';
import { CuerpoComponent } from './views/cliente/cuerpo/cuerpo.component';
import { InformacionUsuarioComponent } from './views/cliente/informacion-usuario/informacion-usuario.component';
import { InicioClienteComponent } from './views/cliente/inicio-cliente/inicio-cliente.component';
import { LoginComponent } from './views/login/login.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'cliente', component: CuerpoComponent,
    children:[
      {path: '', component: InicioClienteComponent},
      {path: 'carrito', component: CarritoProductosComponent},
      {path: 'confirmar-entrega', component: AceptarCompraComponent},
      {path: 'datos-cliente', component: InformacionUsuarioComponent},
      {path: 'producto-crud', component: CrudProductoCuerpoComponent,
        children:[
          {path:'', component: CrearProductoComponent}
        ]
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
