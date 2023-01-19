import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { of, Observable } from 'rxjs'; 

import { environment } from '../../../environments/environment';

import { AuthResponse, Usuario, Autoria, Contacto, Divulgacion, Pinvestigacion, Desarrollo, Estancia, Gacademico, Iacademica, Itecnologica, Libro, Ogrado, Patente, Revista, Sni } from '../interfaces/auth-interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;
  private _usuario !: Usuario;

  get usuario() {
    return { ...this._usuario};
  }

  constructor( private http: HttpClient) { }

    login( email: string, password: string, rfc: string ) {

      const url = `${ this.baseUrl }/auth`;
      const body = { email, password, rfc };

      return this.http.post<AuthResponse>( url, body)
        .pipe(
          tap( resp => {
            if ( resp.ok ) {
             // console.log('resp');
              localStorage.setItem('token', resp.token! );
              this._usuario = {
                email: resp.email!,
                name: resp.name!,
                apellidos: resp.apellidos!,
                rfc: resp.rfc!,
                uid: resp.uid!,                
              }
            }
          }),
          map( valid => valid.ok),
          catchError( err => of(err.error.msg))
        )

    }

    registro( email: string, 
              name: string, 
              apellidos: string, 
              rfc: string, 
              password: string ) {

                const url = `${this.baseUrl}/auth/new`;
                const body = { email, name, apellidos, rfc, password };

                return this.http.post<AuthResponse>( url, body )
                .pipe(
                  tap( resp => {
                    if ( resp.ok ) {
                      localStorage.setItem('token', resp.token! );
                      this._usuario = {
                        name: resp.name!,
                        apellidos: resp.apellidos!,
                        rfc: resp.rfc!,
                        uid: resp.uid!,
                        email: resp.email!,
                        ///password: resp.password!,                        
                      }
                    }
                  }),
                  map( valid => valid.ok),
                  catchError( err => of(err.error))
                )
    }

  validarToken(): Observable<boolean> {

    const url = `${this.baseUrl}/auth/renew`;
    const headers = new HttpHeaders()
      .set('x-token', localStorage.getItem('token') || '');

    return this.http.get<AuthResponse>( url, { headers } )
      .pipe(
        map( resp => {

         /* localStorage.setItem('token', resp.token! );
              this._usuario = {
                name: resp.name!,
                apellidos: resp.apellidos!,
                rfc: resp.rfc!,
                uid: resp.uid!
              }
          */
          return resp.ok;
        }),
        catchError( err => of( false ))

      );

  }

  logout() {
    localStorage.clear();
    //localStorage.removeItem('token');
  }

  subirAutoria(
    titulo: string,
    autor: string,
    editorial: string) {

      const url = `${this.baseUrl}/auth/autoria`;
      const body = {titulo, autor, editorial}

      return this.http.post<Autoria>( url, body );

  }

  subirContacto(
    correop: string,
    correoins: string,
    numero: string) {

      const url = `${this.baseUrl}/auth/contacto`;
      const body = {correop, correoins, numero};

      return this.http.post<Contacto>( url, body );

    }

    subirDivulgacion(
      nombre: string,
      revista: string,
      autor: string,
      faceptacion: string,
      fpublicacion: string) {

        const url = `${this.baseUrl}/auth/divulgacion_cientifica`;
        const body = {nombre, revista, autor, faceptacion,fpublicacion};

        return this.http.post<Divulgacion>( url, body );

      }

    subirPinvestigacion(
      referencia: String,
      titulo: string,
      particion: string,
      finicio: string,
      ftermino: string,
      area: string,
      iprincipal: string,
      iasociadas: string,
      monto: string,
      pderivados: string,
      usuarios: string
    ) {

      const url = `${this.baseUrl}/auth/proyectos_investigacion`;
      const body = { referencia, titulo, particion, finicio, ftermino, area, iprincipal, iasociadas, pderivados,monto, usuarios };

      return this.http.post<Pinvestigacion>( url, body);

    }

    subirDesarrollo(
      area: string,
      campo: string,
      disciplina: string,
      ques1: string,
      ques2: string,
      ques3: string,
      ques4: string
    ) {

      const url = `${this.baseUrl}/auth/desarrollo`;
      const body = { area, campo, disciplina, ques1, ques2, ques3, ques4 };

      return this.http.post<Desarrollo>( url, body );

    }

    subirEstancia(
      institucion: string,
      proyecto: string,
      finicio: string,
      ftermino: string) {

      const url = `${this.baseUrl}/auth/estancias`;
      const body = { institucion, proyecto, finicio, ftermino };

      return this.http.post<Estancia>( url, body );

    } 

    subirGacademico(
      nivel: string,
      titulo: string,
      institucion: string,
      year: string) {

      const url = `${this.baseUrl}/auth/grado_academico`;
      const body = { nivel, titulo, institucion, year };

      return this.http.post<Gacademico>( url, body);
    }

    subirIacademica(
      nivel: string,
      titulo: string,
      institucion: string,
      year: string) {

        const url = `${this.baseUrl}/auth/informacion_academica`;
        const body = { nivel, titulo, institucion, year };

        return this.http.post<Iacademica>( url, body);

      }

    subirItecnologica(
      tipo: string,
      producto: string,
      registro: string,
      fregistro: string) {

        const url = `${this.baseUrl}/auth/implementacion_tecnologica`;
        const body = { tipo, producto, registro, fregistro };

        return this.http.post<Itecnologica>( url, body);

      }

    subirLibro(
      titulo: string,
      autor: string,
      editorial: string,
      referencia: string) {

      const url = `${this.baseUrl}/auth/libros`;
      const body = { titulo, autor, editorial, referencia };

      return this.http.post<Libro>(url, body);

      }

    subirOgrado(
      nombre: string,
      institucion: string,
      grado: string,
      nivel: string) {
        
        const url = `${this.baseUrl}/auth/obtencion_grado`;
        const body = { nombre, institucion, grado, nivel };

        return this.http.post<Ogrado>( url, body);

      }

    subirPatente(
      tipo: string,
      nombre: string,
      registro: string,
      fecha: string,
      referencia: string) {

        const url = `${this.baseUrl}/auth/patentes`;
        const body = { tipo, nombre, registro, fecha, referencia };

        return this.http.post<Patente>( url, body );

      }

    subirRevista(
      articulo: string,
      autor: string,
      fpublicacion: string,
      faceptacion: string,
      revista: string) {

        const url = `${this.baseUrl}/auth/revistas`;
        const body = { articulo, autor, fpublicacion, faceptacion, revista };

        return  this.http.post<Revista>( url, body);

      }

    subirSni(
      nivel: string,
      year: string) {

        const url = `${this.baseUrl}/auth/sni`;
        const body = { nivel, year };

        return this.http.post<Sni>( url, body );

      }
}
