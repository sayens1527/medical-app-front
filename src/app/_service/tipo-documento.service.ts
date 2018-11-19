import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TipoDocumento } from '../_model/tipo-documento';

@Injectable({
  providedIn: 'root'
})
export class TipoDocumentoService {

  private url: string = "http://localhost:8080/tipoDocumentos";
  
  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<TipoDocumento[]>(this.url);
  }
}
