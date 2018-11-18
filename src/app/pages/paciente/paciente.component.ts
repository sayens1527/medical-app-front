import { Component, OnInit } from '@angular/core';
import { PacienteService } from 'src/app/_service/paciente.service';
import { Paciente } from 'src/app/_model/paciente';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent implements OnInit {

  pacientes: Paciente[];
  dataSource: MatTableDataSource<Paciente>;
  displayedColumns = ['idPaciente','nombres','apellidos','numeroDocumento','tipoDocumento'];

  constructor(private pacienteService: PacienteService) { }

  ngOnInit() {
    this.pacienteService.listar().subscribe(data => {
      console.log(data)
      this.pacientes = data;
      this.dataSource = new MatTableDataSource<Paciente>(data);
    });
  }

}
