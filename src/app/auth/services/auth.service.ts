import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { of, Observable } from 'rxjs'; 

import { environment } from '../../../environments/environment';

import { AuthResponse, Usuario } from '../interfaces/auth-interfaces';

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
              //console.log(resp)
              localStorage.setItem('token', resp.token! );
              /*this._usuario = {
                name: resp.name!,
                apellidos: resp.apellidos!,
                rfc: resp.rfc!,
                uid: resp.uid!
              }*/
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
                      /*this._usuario = {
                        name: resp.name!,
                        apellidos: resp.apellidos!,
                        rfc: resp.rfc!,
                        uid: resp.uid!
                      }*/
                    }
                  }),
                  map( valid => valid.ok),
                  catchError( err => of(err.error.msg))
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

}
