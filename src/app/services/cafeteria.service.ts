import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CafeteriaService {

  url =  'https://prueba-proyecto-2da-unidad.herokuapp.com/'

  constructor(private http: HttpClient) { }


  //Funciones para Usuarios
  getParaUser(){
    return this.http.get(`${this.url}usuario`).toPromise();
  }
  postParaUsr(usr:any){
    return this.http.post(`${this.url}usuario`,usr).toPromise();
  }
  putParaUser(usr:any, id:string){
    return this.http.put(`${this.url}usuario/${id}`,usr).toPromise();
  }
  deletParaUser(usr:any, id:string){
    return this.http.delete(`${this.url}usuario/${id}`,usr).toPromise();
  }




  // Funciones para Productos
  getParaProduct(){
    // const url = 'https://prueba-proyecto-2da-unidad.herokuapp.com/productos';
    // return this.http.get(url);
    return this.http.get(`${this.url}productos`).toPromise();
  }
  postParaProduct(pro:any){
    return this.http.post(`${this.url}productos`,pro).toPromise();
  }
  putParaProduct(pro:any, id:string){
    return this.http.put(`${this.url}productos/${id}`,pro).toPromise();
  }
  deletParaProduct(pro:any, id:string){
    return this.http.delete(`${this.url}productos/${id}`,pro).toPromise();
  }



  //Funciones para Categorias
  getParaCatg(){
    return this.http.get(`${this.url}categoria`).toPromise();
  }
  postParaCat(cat:any){
    return this.http.post(`${this.url}categoria`,cat).toPromise();
  }
  putParaCatg(cat:any, id:string){
    return this.http.put(`${this.url}categoria/${id}`,cat).toPromise();
  }
  deletParaCat(cat:any, id:string){
    return this.http.delete(`${this.url}categoria/${id}`,cat).toPromise();
  }
}
