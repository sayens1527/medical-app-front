import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Paciente } from '../_model/paciente';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  url: string = "http://localhost:8080/pacientes";

  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<Paciente[]>(this.url);
  }
}
