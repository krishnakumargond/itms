import {  Component, OnInit,ViewChild,AfterViewInit} from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-area-list',
  templateUrl: './area-list.component.html',
  styleUrls: ['./area-list.component.css']
})
export class AreaListComponent implements OnInit,AfterViewInit {

  constructor(private router:Router) { }
  @ViewChild('example5') table;
  dataTable: any;
  dtOptions: any;
  ngOnInit(): void {    
  }

  ngAfterViewInit(){   
    this.dtOptions = {
      dom: 'Bfrtip',
      buttons: [
          'copyHtml5',
          'excelHtml5',
          'csvHtml5',
          'pdfHtml5'
      ]     
  };
    this.dataTable = $(this.table.nativeElement);
    this.dataTable.DataTable(this.dtOptions);    
  }

  addUpdates(){    
    this.router.navigateByUrl('/login/header/app-area-form')
  }

}