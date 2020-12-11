import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { error } from 'protractor';
import { CafeteriaService } from 'src/app/services/cafeteria.service';
import swal from 'sweetalert2'

const Toast = swal.mixin({
  toast: true,
  position: 'bottom-right',
  showConfirmButton: false,
  timer: 4000
})

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  constructor(private cafServ: CafeteriaService) { }

  category: any[]=[]; //Esto es para obtenerCat() (Propiedad)
  users: any[]=[];  //Esto es para obtenerIDUsr() (Propiedad insertada en el Select del Form)
  categoria: Categorias = new Categorias; //Esto se relaciona con la clase Categoria y es para registrarCatg()
  idActCat:any // Esto es para nuestro propiedad para saber qeu actualizará y funciona en 2 de nuestras funciones idAct(), actualizarCat()

  @Output() salida = new EventEmitter;

  ngOnInit(): void {
    this.obtenerCat();
    this.obtenerIDUsr();
  }

  obtenerCat(){
    this.cafServ.getParaCatg().then((data:any)=>{
      this.category=data['categorias'];
      console.log(this.category);
    }).catch(error => {
      console.log(error);
      
    })
  }

  //Funcion para agregar Productos
  registrarCatg(){
    this.cafServ.postParaCat(this.categoria).then((data:any)=>{
      Toast.fire(data.msg, '', 'success')
      this.salida.emit();
      console.log(data);
    }).catch(error=>{
      Toast.fire(error.error.msg, '', 'error');
        this.salida.emit();
      console.log(error);
    })
    console.log(this.categoria);
  }
        obtenerIDUsr(){
          this.cafServ.getParaUser().then((data:any)=>{
            this.users=data['usuarios'];
            console.log(this.users);
          }).catch( error=>{
            console.log('Algo falló')
          })
        }
  
  //Funcion para actualizar Categoria
  actualizarCat(){
    this.cafServ.putParaCatg(this.categoria, this.idActCat).then((data:any)=>{
      this.categoria=data;
      Toast.fire(data.msg, '', 'success')
      this.salida.emit();
      console.log(this.categoria);
      
    }).catch((error)=>{
      Toast.fire(error.error.msg, '', 'error');
        this.salida.emit();
      console.log('Algo salió mal', error);
      
    })
  }

  //Función para eliminar Usuarios
  eliminarCat(){
    this.cafServ.deletParaCat(this.categoria, this.idActCat).then((data:any)=>{
      this.categoria=data;
      Toast.fire(data.msg, '', 'success')
      this.salida.emit();
      console.log(this.categoria);
      
    }).catch((error)=>{
      Toast.fire(error.error.msg, '', 'error');
        this.salida.emit();
      console.log('Algo salió mal', error);
      
    })
  }

  //Llamar id
  idAct(idCat:string){
    this.idActCat=idCat;
    console.log(this.idActCat);
    
  }

}

class Categorias{
  descripcion: string
  usuario: string
}
