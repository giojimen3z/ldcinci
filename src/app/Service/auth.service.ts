import { Injectable } from '@angular/core';
import { UrlService } from './url.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public urlApi: string, private http: HttpClient, public token: any, private Url: UrlService ) {
    // OBTENER URL DEL API
    this.urlApi = this.Url.getUrl();
  }

  // HEADERS PARA EL API
  // ----------------------------->
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' })

  // REGISTRO DE USUARIOS
  // ----------------------------->
  registerUser(data: any): Observable <any> {

    const json = JSON.stringify(data);

    const params = 'json=' + json;

    return this.http.post(this.urlApi + 'user/register', params, {headers: this.headers});

  }

  // LOGIN DE USUARIOS
  // ----------------------------->

  loginUser(data: any): Observable<any> {

    const json = JSON.stringify(data);

    const params = 'json=' + json;

    return this.http.post(this.urlApi + 'user/login', params, {headers: this.headers} );

  }

  // ENVIAR TOKEN
  // ----------------------------->
  getToken() {

    return this.token;

  }

}
