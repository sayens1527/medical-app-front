import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PacienteComponent } from './pages/paciente/paciente.component';
import { PacienteEditarComponent } from './pages/paciente/paciente-editar/paciente-editar.component';

const routes: Routes = [
  {path:"paciente", component: PacienteComponent, children:[
    {path:"editar/:id", component:PacienteEditarComponent},
    {path:"nuevo", component:PacienteEditarComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
