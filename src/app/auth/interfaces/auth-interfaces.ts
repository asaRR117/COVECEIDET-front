import { RevistaComponent } from '../../protected/revista/revista.component';

export interface AuthResponse {

    ok: boolean;
    uid?: string;
    name?: string;
    apellidos?: string;
    rfc?: string;
    token?: string;
    msg?: string;
    email?: string;
    //password?: string;

}

export interface Usuario {

    uid: string;
    name: string;
    apellidos: string;
    rfc: string;
    email: string;
   // password: string;
    
}

export interface Autoria {

    titulo: string;
    autor: string;
    editorial: string;

}

export interface Contacto {

    correop: string;
    correoinst: string;
    numero: string;

}

export interface Divulgacion {

    nombre: string;
    revista: string;
    autor: string;
    faceptacion: string;
    fpublicacion: string;
    
}

export interface Desarrollo {

    area: string;
    campo: string;
    disciplina: string;
    ques1: string;
    ques2: string;
    ques3: string;
    ques4: string;

}

export interface Estancia {

    institucion: string;
    proyecto: string;
    finicio: string;
    ftermino: string;

}

export interface Gacademico {

    nivel: string;
    titulo: string;
    institucion: string;
    year: string;

}

export interface Iacademica {

    nivel: string;
    titulo: string;
    institucion: string;
    year: string;

}

export interface Itecnologica {

    tipo: string;
    producto: string;
    registro: string;
    fregistro: string;

}

export interface Libro {

    titulo: string;
    autor: string;
    editorial: string;
    referencia: string;

}

export interface Ogrado {

    nombre: string;
    institucion: string;
    grado: string;
    nivel: string;

}

export interface Patente {

    tipo: string;
    nombre: string;
    registro: string;
    fecha: string;
    referencia: string;

}

export interface Pcientifica {


}

export interface Pproyecto {


}

export interface Pinvestigacion {

    referencia: string;
    titulo: string;
    particion: string;
    finicio: string;
    ftermmino: string;
    area: string;
    iprincipal: string;
    iasociadas: string;
    monto: string;
    pderivados: string;
    usuarios: string;

}

export interface Revista {

    articulo: string;
    autor: string;
    fpublicacion: string;
    faceptacion: string;
    revista: string;

}

export interface Sni {

    nivel: string;
    year: string;
}