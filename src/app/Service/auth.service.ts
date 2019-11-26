import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Data } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: string;

  constructor(private http: HttpClient) {

  }

  // OBTENER INFO USUARIO
  obtenerInfoUsuario() {

    const headersHttp: HttpHeaders  = new HttpHeaders({'content-type': 'appication/json', 'Authorization': this.token});

    return this.http.get('http://localhost/api/public/api/user/show', {headers: headersHttp});

  }

  // LOGIN PLATAFORMA
  login(data: Data): Observable<any> {

    const headersHttp: HttpHeaders  = new HttpHeaders({'content-type': 'appication/json'});

    const json = JSON.stringify(data);

    const params = '?json=' + json;

    return this.http.post('http://localhost/api/public/api/user/login' + params , {headers: headersHttp});

  }

  // ACTUALIZAR INFORMACION
  update(id: string, data: Data) {

    const headersHttp: HttpHeaders  = new HttpHeaders({'content-type': 'appication/json', 'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjIwMSwiRW1haWwiOiJBZG1pbkBrYW50YXIuY29tIiwiaWF0IjoxNTc0NzM3NjA4LCJleHAiOjE1NzUzNDI0MDh9.ccdtJOlgxJRsvnEk4mfzIeAqVis_-c3oVooR6MkF1T4'});

    const json = JSON.stringify(data);

    const params = '?json=' + json;

    return this.http.put('http://localhost/api/public/api/user/update/' + id + params , {headers: headersHttp});

  }

  // OBTENER TOKEN
  setToken(dato: string) {
    this.token = dato;
  }

  // RETORNAR TOKEN
  getToken() {
    return this.token;
  }

}
