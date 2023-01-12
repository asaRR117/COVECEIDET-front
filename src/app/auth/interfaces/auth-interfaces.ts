
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