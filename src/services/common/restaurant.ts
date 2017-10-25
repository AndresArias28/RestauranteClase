export class Location{
    type:string;
    coordinates:number[];
}
export class Reserver{
    nombre:string;
    cedual:string;

}
export class reserv{
    inicio: Date;
    fin:Date;
    usuario:Reserver
}
export class Table{
    numero:number;
    reserva:reserv
}
export class Restaurant{
    _id:string;
    nombre:string;
    direccion:string;
    contacto:string;
    imagen:string;
    localizacion:string;
    mesas: Table[];
}