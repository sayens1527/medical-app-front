import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { ConsultaComponent } from './pages/consulta/consulta.component';
import { PacienteComponent } from './pages/paciente/paciente.component';
import { EspecialidadComponent } from './pages/especialidad/especialidad.component';
import { ExamenComponent } from './pages/examen/examen.component';
import { MedicoComponent } from './pages/medico/medico.component';
import { ReporteComponent } from './pages/reporte/reporte.component';
import { Not403Component } from './pages/not403/not403.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    BuscarComponent,
    ConsultaComponent,
    PacienteComponent,
    EspecialidadComponent,
    ExamenComponent,
    MedicoComponent,
    ReporteComponent,
    Not403Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
