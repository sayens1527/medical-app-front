import { TipoDocumento } from "./tipo-documento";

export class Paciente {
    idPaciente: number;
    nombres: string;
    apellidos: string;
    direccion: string;
    email: string;
    numeroDocuemnto: string;
    tipoDocumento: TipoDocumento;
    fechaNaciemiento: string;
    telefono: string;
    
}
