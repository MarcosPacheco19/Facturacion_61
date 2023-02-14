import { Producto } from "./producto";

export class Detalle{
    codigo?: number;
    cantidad?: number;
    producto?: Producto;
    precio?: number|null;
    subtotal?: number;
}