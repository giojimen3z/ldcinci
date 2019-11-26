import { Component, OnInit, ChangeDetectorRef, Input, Output } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from './../../Service/auth.service';

declare var $: any;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})

export class SidenavComponent implements OnInit {
  @Output() public Tipo: String;

  type: any;
  varselecct: string;
  mobileQuery: MediaQueryList;
  panelOpenState = false;
  auxInfo = false;
  // VARIABLES ACTUALIZAR INFO USUARIO
  Nombre: string;
  Apellido: string;
  Correo: string;
  Password: string;
  UserId: string;

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, public translate: TranslateService,
              private UserService: AuthService) {

    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.translate.addLangs(['en', 'es']);
    this.translate.setDefaultLang('en');

    // OBTENER INFO USUARIO
    const InfoUser = this.UserService.obtenerInfoUsuario().subscribe(user => {
      this.Nombre = user['users']['Fname'];
      this.Apellido = user['users']['Lname'];
      this.Correo = user['users']['Email'];
      this.Password = "Password";
      this.UserId = user['users']['id'];
    });


  }

  // ACTUALIZAR IDIOMA
  language() {

    this.varselecct = $('#Prueba').val();

    if (this.varselecct.toString() === 'es') {
      this.Tipo = 'es';
      this.translate.use('es');
      console.log(this.Tipo);
    }  else {
      this.Tipo = 'en';
      this.translate.use('en');
      console.log(this.Tipo);
    }

  }

  // MOSTRAR INFO USUARIO
  ActualizarInfo() {
    $('#update-user').toggle();
    $('#change-leng:visible').css({'display': 'none'})
  }

  // CAMBIAR IDIOMA
  idioma() {
    $('#change-leng').toggle();
    $('#update-user:visible').css({'display':'none'});
  }

  // CERRAR IDIOMA
  closeIdioma() {
    $('#change-leng').css({"display":"none"});
  }

  // CERRAR INFO USUARIO
  closePanel() {
    $('#update-user').css({"display":"none"});
  }
  // ACTUALIZAR INFORMACION DEL USUARIO
  ActualizarInfoUser() {

    const data = {
      Fname: this.Nombre,
      Lname: this.Apellido,
      Email: this.Correo,
      Pass: this.Password
    }

    const update = this.UserService.update(this.UserId, data).subscribe(info => {
      // this.Nombre = info['user']['Fname'];
      // this.Apellido = info['user']['Lname'];
      // this.Correo = info['user']['Email'];
      console.log(info);
    });


    $('#update-user').toggle();
    $("#msjMenu").toggle();

  }

  closeMSJ() {
    $("#msjMenu").toggle();
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  shouldRun = true;

  ngOnInit() {
  }

}
