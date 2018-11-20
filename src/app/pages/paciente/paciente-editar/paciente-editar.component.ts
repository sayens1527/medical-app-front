import { Component, OnInit } from '@angular/core';
import { TipoDocumentoService } from 'src/app/_service/tipo-documento.service';
import { TipoDocumento } from 'src/app/_model/tipo-documento';
import { FormGroup, FormControl } from '@angular/forms';
import { Paciente } from 'src/app/_model/paciente';
import { PacienteService } from 'src/app/_service/paciente.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-paciente-editar',
  templateUrl: './paciente-editar.component.html',
  styleUrls: ['./paciente-editar.component.css']
})
export class PacienteEditarComponent implements OnInit {

  tipoDocumentos: TipoDocumento[];
  pacienteForm: FormGroup;
  paciente: Paciente;
  edicion:boolean = false;
  id: number;

  constructor(private tipoDocumentoService: TipoDocumentoService, 
              private pacienteService: PacienteService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.tipoDocumentoService.listar().subscribe(data => 
      {
        console.log(data);
        this.tipoDocumentos = data;
      }
    );
    //this.pacienteForm =  this.createFormGroup(null);

    this.route.params.subscribe((params: Params) => 
      {
        this.id = params['id'];
        this.edicion = this.id != null;
        this.initForm();
      }
    );
  }

  createFormGroup(paciente:Paciente){
    return new FormGroup(
      {
        nombres: new FormControl(paciente!=null?paciente.nombres:null),
        apellidos: new FormControl(paciente!=null?paciente.apellidos:null),
        fechaNacimiento: new FormControl(paciente!=null?paciente.fechaNaciemiento:null),
        tipoDocumento: new FormControl(paciente!=null?paciente.tipoDocumento.idTipoDocumento:null),
        numeroDocumento: new FormControl(paciente!=null?paciente.numeroDocumento:null),
        direccion: new FormControl(paciente!=null?paciente.direccion:null),
        email: new FormControl(paciente!=null?paciente.email:null),
        telefono: new FormControl(paciente!=null?paciente.telefono:null)
      }
    );
  }

  initForm(){
    if(this.edicion){
      this.pacienteService.obtenerPorId(this.id).subscribe(data => 
        {
          console.log(data);
          this.pacienteForm = this.createFormGroup(data);
        }  
      );
    }else{
      this.pacienteForm = this.createFormGroup(null);
    }
  }

  onSubmit(){
    this.paciente = new Paciente();
    this.paciente.nombres = this.pacienteForm.value.nombres;
    this.paciente.apellidos = this.pacienteForm.value.apellidos;
    //this.paciente.fechaNaciemiento = this.pacienteForm.value.fechaNaciemiento;
    let tipoDocumento:TipoDocumento = new TipoDocumento();
    tipoDocumento.idTipoDocumento = this.pacienteForm.value.tipoDocumento;
    this.paciente.tipoDocumento = tipoDocumento;
    this.paciente.numeroDocumento = this.pacienteForm.value.numeroDocumento;
    this.paciente.direccion = this.pacienteForm.value.direccion;
    this.paciente.telefono  = this.pacienteForm.value.telefono;
    this.paciente.email = this.pacienteForm.value.email;
    console.log(this.paciente);
    this.pacienteService.guardar(this.paciente).subscribe(data => console.log(data));
  }
}
