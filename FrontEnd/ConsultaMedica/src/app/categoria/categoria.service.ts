import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoriaModel } from './categoria.models';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) {}


    listarCategorias(): Observable<any> {
      return this.http.get("https://www.consultauva.tk/categoria/");
    }

    CadastrarCategoria(categoria: CategoriaModel): Observable<any> {
      return this.http.post("https://www.consultauva.tk/categoria/", categoria);
    }    

    excluirCategoria(id:any){
      return this.http.delete("https://www.consultauva.tk/categoria/".concat(id));
    } 

    atualizarCategoria(id:any, categoria: CategoriaModel): Observable<any>{
      return this.http.put("https://www.consultauva.tk/categoria/".concat(id),categoria);
    }
   
}
