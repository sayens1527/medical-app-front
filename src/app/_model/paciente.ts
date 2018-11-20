import { TipoDocumento } from "./tipo-documento";

export class Paciente {
    idPaciente: number;
    nombres: string;
    apellidos: string;
    direccion: string;
    email: string;
    numeroDocumento: string;
    tipoDocumento: TipoDocumento;
    fechaNaciemiento: string;
    telefono: string;
    
}
