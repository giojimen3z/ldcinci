import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';



declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  UserLogin: string;
  password: string;
  constructor (public translate: TranslateService, private router: Router) {

    this.translate.addLangs(['en','es']);
    this.translate.setDefaultLang('en');
  }
  public login(UserLogin: string, password: string) {
      this.router.navigate(['sidenav'], { replaceUrl: true });
  }

  // CHANGE  language
//------->
language(tipo:String) {


  if (tipo == 'es'){
    this.translate.use('es');
  }else{

    this.translate.use('en');
  }
}


    // BTN PASSWORD HIDE/SHOW PASSWORD
// ------------------>

 enable_pass(){
    if($("#PasswordLogin").attr("type") == "password"){
        $("#PasswordLogin").attr("type","text");
    }else{
        $("#PasswordLogin").attr("type","password");
    }
}


}
