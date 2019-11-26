import { Injectable } from '@angular/core';
import {BehaviorSubject } from'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  //SE DECLARA LA VARIABLE PRIVADA QUE SERA LA QUEN GENERE EL CAMBIO

  private tipoDefautl = new BehaviorSubject<String>("");

  // SE DECLARA LA  VARIABLE  QUE  SERA VISIBLE PARA LOS COMPONENTES
  public newType = this.tipoDefautl.asObservable();
  constructor() { }
//URL DEL EJEMPLO :https://dev.to/asfo/como-comunicar-dos-componentes-sin-relacion-en-angular-1gb8
  //SE CREA EL METODO QUE REALIZARA EL CAMBIO DEL  LENGUAJE
  public  changeLanguage(language: string){

    this.tipoDefautl.next(language);

  }
}
