import { Component, OnInit, Input, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { TranslateService } from '@ngx-translate/core';

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
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {



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


displayedColumns: string[] = ['id', 'name', 'progress', 'color'];
dataSource: MatTableDataSource<UserData>;

@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
@ViewChild(MatSort, {static: true}) sort: MatSort;

constructor(public translate: TranslateService) {

      // Create 100 users
      const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

      // Assign the data to the data source for the table to render
      this.dataSource = new MatTableDataSource(users);

      this.translate.addLangs(['en','es']);
      this.translate.setDefaultLang('en');

}

ngOnInit() {
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;
}
applyFilter(filterValue: string) {
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
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
