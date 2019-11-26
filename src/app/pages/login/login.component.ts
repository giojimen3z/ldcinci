import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from './../../Service/auth.service';

declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit {
  //
  Email: string;
  password: string;
  mensaje: string;

  constructor(public translate: TranslateService, private router: Router,
              private userService: AuthService ) {

    this.translate.addLangs(['en','es']);
    this.translate.setDefaultLang('en');

  }

ngOnInit(){
}

  login(){

    const data = {
      Email: this.Email,
      Pass: this.password
    }

    this.userService.login(data).subscribe((response)=>{
      if(typeof(response) === 'object'){
        this.mensaje = "Forgot-Btn";
        $("#msjLogin").toggle();
      } else {
        this.userService.setToken(response);
        this.router.navigate(['sidenav'], { replaceUrl: true });
      }

    });


  }

  closeMSJ(){
    $("#msjLogin").toggle();
  }

// CHANGE  language
// ------->
language(tipo: String) {


  if (tipo === 'es'){
    this.translate.use('es');
  }else{

    this.translate.use('en');
  }
}


// BTN PASSWORD HIDE/SHOW PASSWORD
// ------------------>
icono: string = "visibility";

enable_pass(){


 if($("#PasswordLogin").attr("type") == "password"){

       this.icono = "visibility_off";
       $("#PasswordLogin").attr("type","text");
   }else{
       this.icono = "visibility";
       $("#PasswordLogin").attr("type","password");
   }

}

}
