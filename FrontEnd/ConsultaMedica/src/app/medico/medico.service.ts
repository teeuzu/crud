import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MedicoModel } from './medico.models';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  constructor(private http: HttpClient) { }


  listarMedicos(): Observable<any> {
    return this.http.get("https://www.consultauva.tk/medico/");
  }

  CadastrarMedicos(medico: MedicoModel): Observable<any> {
    return this.http.post("https://www.consultauva.tk/medico/", medico);
  }    

  excluirMedicos(id:any){
    return this.http.delete("https://www.consultauva.tk/medico/".concat(id));
  } 

  atualizarMedicos(id:any, categoria: MedicoModel): Observable<any>{
    return this.http.put("https://www.consultauva.tk/medico/".concat(id),categoria);
  }

}
