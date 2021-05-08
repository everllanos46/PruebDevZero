import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrarClienteComponent } from './registrar-cliente/registrar-cliente.component';
import { ConsultarProductosComponent } from './consultar-productos/consultar-productos.component';
import { RegistrarProductoComponent } from './registrar-producto/registrar-producto.component';
const routes: Routes = [{
  path: 'login',
  component: LoginComponent
},
{
  path: 'consultaProductos',
  component: ConsultarProductosComponent
},{
  path: 'registrarUsuarios',
  component: RegistrarClienteComponent
},{
  path: 'registrarProductos',
  component: RegistrarProductoComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
