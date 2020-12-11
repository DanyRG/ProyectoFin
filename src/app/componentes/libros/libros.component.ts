import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CafeteriaService } from 'src/app/services/cafeteria.service';
import swal from 'sweetalert2'

const Toast = swal.mixin({
  toast: true,
  position: 'bottom-right',
  showConfirmButton: false,
  timer: 4000
})

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  constructor(private cafServ: CafeteriaService) { }

  product : any[] = [];
  category : any[] = [];
  users : any[] = [];
  producto: Producto = new Producto;
  idActPrd:any

  @Output() salida = new EventEmitter;

  ngOnInit(): void {
    this.obtenerPrd();
    console.log(this.producto);
    this.obtenerIDCat();
    this.obtenerIDUsr();
    
    // this.registrarPrd();
  }
  //Funcion para traer info. de Productos
  obtenerPrd(){
    this.cafServ.getParaProduct().then((data:any)=>{
      this.product=data['productos'];
      console.log(this.product);
    }).catch( error=>{
      console.log('Algo falló')
    })
  }

  //Funcion para agregar Productos
  registrarPrd(){
    this.cafServ.postParaProduct(this.producto).then((data:any)=>{
      Toast.fire(data.msg, '', 'success')
      this.salida.emit();
      console.log(data);
    }).catch(error=>{
      Toast.fire(error.error.msg, '', 'error');
        this.salida.emit();
      console.log(error);
    })
    console.log(this.producto);
  }
        //Funcion para obtener el ID de una categoria para nuestro Select de CAT
        obtenerIDCat(){
          this.cafServ.getParaCatg().then((data:any)=>{
            this.category=data['categorias'];
            console.log(this.category);
          }).catch(error => {
            console.log(error);
            
          })
        }
              //Funcion para obtener el ID de un usuario para nuestro Select de USR
              obtenerIDUsr(){
                this.cafServ.getParaUser().then((data:any)=>{
                  this.users=data['usuarios'];
                  console.log(this.users);
                }).catch( error=>{
                  console.log('Algo falló')
                })
              }
    

    //Funcion para actualizar Productos
    actualizarPrd(){
      this.cafServ.putParaProduct(this.producto, this.idActPrd).then((data:any)=>{
        this.producto=data;
        Toast.fire(data.msg, '', 'success')
        this.salida.emit();
        console.log(this.producto);

      }).catch((error)=>{
        Toast.fire(error.error.msg, '', 'error');
        this.salida.emit();
        console.log('Algo salió mal', error);
      })
    }

    //Funcion para eliminar Producto
    eliminarPrd(){
      this.cafServ.deletParaProduct(this.producto, this.idActPrd).then((data:any)=>{
        this.producto=data;
        Toast.fire(data.msg, '', 'success')
        this.salida.emit();
        console.log(this.producto);

      }).catch((error)=>{
        Toast.fire(error.error.msg, '', 'error');
        this.salida.emit();
        console.log('Algo salió mal', error);
      })
    }
    
    //Llamar ID
    idAct(idPrd:string){
      this.idActPrd=idPrd;
      console.log(this.idActPrd);
      
    }

}

//Modelo para ngModel
class Producto{
categoria: string
nombre: string
precioU: number
usuario: string
_id?: string
}