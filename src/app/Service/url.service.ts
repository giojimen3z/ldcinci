import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  urlapi: String;

  constructor() {

    let hostname = window.location.hostname

    switch (hostname) {
      case 'localhost':
          this.urlapi ='http://localhost/api/public/api/';
        break;

      default:
          this.urlapi = 'pruebas';
        break;
    }
  }

  getUrl(){

    return this.urlapi;

  }

}
