import { Component, OnInit, Input, ViewChild } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {MatTableDataSource} from '@angular/material/table';

import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatSnackBar} from '@angular/material/snack-bar';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}

/** Constants used to fill up our data base. */
const COLORS: string[] = [
  'maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple', 'fuchsia', 'lime', 'teal',
  'aqua', 'blue', 'navy', 'black', 'gray'
];

const NAMES: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];

declare var $: any;


@Component({
  selector: 'app-script-incidence',
  templateUrl: './script-incidence.component.html',
  styleUrls: ['./script-incidence.component.css']
})

export class ScriptIncidenceComponent {

  constructor(public translate: TranslateService, private snackBar: MatSnackBar) {
    // Create 100 users
    const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);

    this.translate.addLangs(['en','es']);
    this.translate.setDefaultLang('en');

  }

  // CHANGE  language
  //------------------------>
  @Input() Tipo:String;

  language(tipo:String) {
    if (tipo == 'es'){
      this.translate.use('es');
    }else{
      this.translate.use('en');
    }
  }

  // VARIABLES FORMULARIO
  VerMaterial: number;
  VerScript: number;
  TipoIn: string;
  Causal: string;
  Comentario: string;
  pregunta: string;
  Ronda: string;


  //MOSTRAR FORMULARIO
  mostrarNuevaIncidencia(){
    $(".new-incidence").toggle();
  }

  onSubmit() {

    let errors = 0;

    //VALIDAR CAMPOS DEL FORMULARIO
    if(this.VerMaterial == undefined || this.VerMaterial == null){
      $("#VerMaterial").css({"border":"1px solid red"});
      errors++;
    }else{
      $("#VerMaterial").css({"border":"1px solid #ced4da"});
    }

    if(this.VerScript == undefined || this.VerScript == null){
      $("#VerScript").css({"border":"1px solid red"});
      errors++;
    }else{
      $("#VerScript").css({"border":"1px solid #ced4da"});
    }

    if(this.TipoIn == undefined || this.TipoIn == null){
      $("#TipoIn").css({"border":"1px solid red"});
      errors++;
    }else{
      $("#TipoIn").css({"border":"1px solid #ced4da"});
    }

    if(this.Causal == undefined || this.Causal == null){
      $("#Causal").css({"border":"1px solid red"});
      errors++;
    }else{
      $("#Causal").css({"border":"1px solid #ced4da"});
    }

    if(this.Comentario == undefined || this.Comentario == null){
      $("#Comentario").css({"border":"1px solid red"});
      errors++;
    }else{
      $("#Comentario").css({"border":"1px solid #ced4da"});
    }

    if(this.pregunta == undefined || this.pregunta == null){
      $("#pregunta").css({"border":"1px solid red"});
      errors++;
    }else{
      $("#pregunta").css({"border":"1px solid #ced4da"});
    }

    if(this.Ronda == undefined || this.Ronda == null){
      $("#Ronda").css({"border":"1px solid red"});
      errors++;
    }else{
      $("#Ronda").css({"border":"1px solid #ced4da"});
    }

    //MENSAJE DE ERROR
    if(errors > 0){
      this.snackBar.open($("#msj_error").html(), $("#btn_error").html(), { duration: 2000, });
    }else{
      //INSERTAR LOS DATOS AL API

      //DEJAR LOS INPUTS VACIOS
      $("#VerMaterial").val(null);
      $("#VerScript").val(null);
      $("#TipoIn").val(null);
      $("#Causal").val(null);
      $("#Comentario").val(null);
      $("#pregunta").val(null);
      $("#Ronda").val(null);

      this.snackBar.open($("#msj_done").html(), $("#btn_error").html(), { duration: 2000, });

    }

  }




  displayedColumns: string[] = ['id', 'name', 'progress', 'color'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {

    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) this.dataSource.paginator.firstPage();

  }

}

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

return {
  id: id.toString(),
  name: name,
  progress: Math.round(Math.random() * 100).toString(),
  color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
};


}
