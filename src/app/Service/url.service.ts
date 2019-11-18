import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor(public url) {
    const hostName = window.location.hostname;
    switch (hostName) {
      case 'localhost':
        this.url = 'http://localhost/api/';
        break;
      default:
        this.url = 'url producción';
        break;
    }
  }

  getUrl() {
    return this.url;
  }

}
