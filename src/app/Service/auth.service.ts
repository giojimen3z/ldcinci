import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor(private http: HttpClient){

}

headers: HttpHeaders  = new HttpHeaders({'content-type': 'appication/json'})

obtenerUsuario(){

 return this.http.get('http://localhost/api/public/api/user/show', {headers: this.headers})

}



}
