import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CafeteriaService } from 'src/app/services/cafeteria.service';
import swal from 'sweetalert2'

const Toast = swal.mixin({
  toast: true,
  position: 'bottom-right',
  showConfirmButton: false,
  timer: 4000
})




@Component({
  selector: 'app-agregarusr',
  templateUrl: './agregarusr.component.html',
  styleUrls: ['./agregarusr.component.css']
})
export class AgregarusrComponent implements OnInit {

  constructor(private cafServ: CafeteriaService) { }

  users:any[]=[];
  usuarioss: Usuarios = new Usuarios;
  idActUsr:any
  
  @Output() salida = new EventEmitter;

  ngOnInit(): void {
    this.obtenerUsr();
    
  }

  obtenerUsr(){
    this.cafServ.getParaUser().then((data:any)=>{
      this.users=data['usuarios'];
      console.log(this.users);
    }).catch( error=>{
      console.log(error)
    })
  }

  //Funcion para agregar Usuario
  registrarUsr(){
    this.cafServ.postParaUsr(this.usuarioss).then((data:any)=>{
      Toast.fire(data.msg, '', 'success')
      this.salida.emit();
      console.log(data);
    }).catch(error=>{
      Toast.fire(error.error.msg, '', 'error');
        this.salida.emit();
      console.log(error);
      console.log(error);
    })
      console.log(this.usuarioss);
    
  }
  //Funcion para actualizar Usuario
  actualizarUsr(){
    this.cafServ.putParaUser(this.usuarioss, this.idActUsr).then((data:any)=>{
      this.usuarioss=data;
      Toast.fire(data.msg, '', 'success')
      this.salida.emit();
      console.log(this.usuarioss);
      
    }).catch((error)=>{
      Toast.fire(error.error.msg, '', 'error');
      console.log('Algo salió mal', error);
      this.salida.emit();
    })
  }

  //Función para eliminar Usuarios
  eliminarUsr(){
    this.cafServ.deletParaUser(this.usuarioss, this.idActUsr).then((data:any)=>{
      this.usuarioss=data;
      Toast.fire(data.msg, '', 'success')
      this.salida.emit();
      console.log(this.usuarioss);
      
    }).catch((error)=>{
      Toast.fire(error.error.msg, '', 'error');
      console.log('Algo salió mal', error);
      this.salida.emit();
      
    })
  }


  //Llamar id
  idAct(idUsr:string){
    this.idActUsr=idUsr;
    console.log(this.idActUsr);
    
  }

}



class Usuarios {
  apellido: string
  email: string
  nombre: string
  password: string
  _id?: string
}
