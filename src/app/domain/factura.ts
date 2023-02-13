import { Cliente } from "./cliente"; 

export class Factura {
    codigo?: number;
    numero?: string;
    total?: number;
    cliente?: Cliente;
    estado?: boolean;
}