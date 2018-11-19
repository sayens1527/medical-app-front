import { Component, OnInit } from '@angular/core';
import { TipoDocumentoService } from 'src/app/_service/tipo-documento.service';
import { TipoDocumento } from 'src/app/_model/tipo-documento';
import { FormGroup, FormControl } from '@angular/forms';
import { Paciente } from 'src/app/_model/paciente';
import { PacienteService } from 'src/app/_service/paciente.service';

@Component({
  selector: 'app-paciente-editar',
  templateUrl: './paciente-editar.component.html',
  styleUrls: ['./paciente-editar.component.css']
})
export class PacienteEditarComponent implements OnInit {

  tipoDocumentos: TipoDocumento[];
  pacienteForm: FormGroup;
  paciente: Paciente;

  constructor(private tipoDocumentoService: TipoDocumentoService, private pacienteService: PacienteService) { }

  ngOnInit() {
    this.tipoDocumentoService.listar().subscribe(data => 
      {
        console.log(data);
        this.tipoDocumentos = data;
      }
    );
    this.pacienteForm =  this.createFormGroup();
  }

  createFormGroup(){
    return new FormGroup(
      {
        nombres: new FormControl(),
        apellidos: new FormControl(),
        fechaNacimiento: new FormControl(),
        tipoDocumento: new FormControl(),
        numeroDocumento: new FormControl(),
        direccion: new FormControl(),
        email: new FormControl(),
        telefono: new FormControl()
      }
    );
  }

  onSubmit(){
    this.paciente = new Paciente();
    this.paciente.nombres = this.pacienteForm.value.nombres;
    this.paciente.apellidos = this.pacienteForm.value.apellidos;
    //this.paciente.fechaNaciemiento = this.pacienteForm.value.fechaNaciemiento;
    let tipoDocumento:TipoDocumento = new TipoDocumento();
    tipoDocumento.idTipoDocuemnto = this.pacienteForm.value.tipoDocumento;
    this.paciente.tipoDocumento = tipoDocumento;
    this.paciente.numeroDocuemnto = this.pacienteForm.value.numeroDocumento;
    this.paciente.direccion = this.pacienteForm.value.direccion;
    this.paciente.telefono  = this.pacienteForm.value.telefono;
    this.paciente.email = this.pacienteForm.value.email;
    console.log(this.paciente);
    this.pacienteService.guardar(this.paciente).subscribe(data => console.log(data));
  }
}
