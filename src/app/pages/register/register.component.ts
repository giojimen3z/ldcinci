import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  @Input() Tipo:String;




  // CHANGE  language
//------->
language(tipo:String) {


  if (tipo == 'es'){
    this.translate.use('es');
  }else{

    this.translate.use('en');
  }

}

  constructor(public translate: TranslateService) {

    this.translate.addLangs(['en','es']);
    this.translate.setDefaultLang('en');
   }

  ngOnInit() {
  }

}
