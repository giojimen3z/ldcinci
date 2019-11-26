import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

declare var $: any;

@Component({
  selector: 'app-cost',
  templateUrl: './cost.component.html',
  styleUrls: ['./cost.component.css']
})

export class CostComponent implements OnInit {

  Adicionales: Array<any> = [];

  constructor(public translate: TranslateService) { 
    this.translate.addLangs(['en','es']);
    this.translate.setDefaultLang('en');
  }

  ngOnInit() {
  }

  Hora_Script: number
  Hora_DP: number
  Hora_Code: number
  type: string
  Solicitud: string
  Costo_Adicional: number
  Month_Adittional: Date
  Facturado: string

  //AGREGAR ADICIONAL
  addAdicional(){
    $("#newAdd").toggle()
    
  }

  guardarAdicional(){
    $("#newAdd").toggle() 
      this.Adicionales.push({
      type:this.type,
      Solicitud:this.Solicitud,
      Costo_Adicional:this.Costo_Adicional,
      Month_Adittional: this.Month_Adittional
    })
    
    // REINICIAR FORMULARIO
    this.type = null
    this.Solicitud = null
    this.Costo_Adicional = null
    this.Month_Adittional = null

  }

  DeleteAdd(add){
    this.Adicionales.splice(add, 1);
  }

  Guardar(){
    const data = {
      
    }
  }

}
