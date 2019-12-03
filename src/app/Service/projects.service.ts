import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UrlService } from '../Service/url.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {


  urlApi;
  token = '';

  constructor(private http: HttpClient, private url: UrlService, private user: AuthService ) {

    this.urlApi = url.getUrl();
    this.token = user.getToken();

  }

  // OBTENER PROYECTOS DEL USUARIO
  getProjects() {

    const headersHttp: HttpHeaders  = new HttpHeaders({'content-type': 'appication/json', 'Authorization': this.token})
    return this.http.get(this.urlApi + 'user/project', {headers: headersHttp})

  }

}
