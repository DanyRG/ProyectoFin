import { Component, OnInit } from '@angular/core';
import { CafeteriaService } from 'src/app/services/cafeteria.service';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  
  constructor(private cafServ: CafeteriaService) { }
  
  //users: any[]=[] ;
  ngOnInit(): void {
    // this.cafServ.getParaUser().subscribe((data:any)=>{
    //   this.users=data['usuarios'];
    //   console.log(this.users);
    // });
  }



}
