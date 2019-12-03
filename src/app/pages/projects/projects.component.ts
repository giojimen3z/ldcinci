import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TranslateService } from '@ngx-translate/core';
import { ProjectsService } from 'src/app/Service/projects.service';
import {  LanguageService } from 'src/app/Service/language.service';
import { map } from 'rxjs/operators';
import { Projects } from 'src/app/models/Projects';


declare var $: any;

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

Tipo: String;
newLang: String;
private proyectos: any = [];

constructor(public translate: TranslateService,private projects: ProjectsService, private lang: LanguageService) {


  this.translate.addLangs(['en', 'es']);
  this.translate.setDefaultLang('en');

}


dataSource: MatTableDataSource<any>;
displayedColumns: ['Jobnumber_LDCG', 'Pname', 'Cliente'];


@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
@ViewChild(MatSort, {static: true}) sort: MatSort;



ngOnInit() {
  this.dataSource = new MatTableDataSource();
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;


   this.lang.newType.subscribe(language => this.Tipo = language, data =>  this.newLang = this.Tipo);
   this.projects.getProjects().subscribe(  data => this.proyectos = data);

  console.log(this.proyectos)
  if (this.newLang === 'es') { this.translate.use('es'); }  else { this.translate.use('en'); }



}

applyFilter(filterValue: string) {
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}
}
