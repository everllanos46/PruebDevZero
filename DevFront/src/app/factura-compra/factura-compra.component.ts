
import { Component, OnInit } from '@angular/core';
import { Producto } from '../models/producto';
import { ProductoServiceService } from '../services/producto-service.service';

@Component({
  selector: 'app-factura-compra',
  templateUrl: './factura-compra.component.html',
  styleUrls: ['./factura-compra.component.css']
})
export class FacturaCompraComponent implements OnInit {
  productos: Producto[]=[]
  productoCard : Producto;
  productosCarrito: Producto[]=[]
  agregado: boolean=false;
  constructor(private productoService: ProductoServiceService) { }

  ngOnInit(): void {
    this.get()
  }

  get(){
    this.productoService.get().subscribe(resultado=>{
      if(resultado!=null){
        this.productos=resultado;
      }
     });
  }

  productoTabla(pos: number){
    this.productoCard=this.productos[pos]
    
  }

  agregarCarrito(){
    this.agregado=true;
    this.productosCarrito.push(this.productoCard)
    
  }

}
