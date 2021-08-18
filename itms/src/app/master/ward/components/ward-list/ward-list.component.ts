import { Component, OnInit,ViewChild,AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from "jquery";
@Component({
  selector: 'app-ward-list',
  templateUrl: './ward-list.component.html',
  styleUrls: ['./ward-list.component.css']
})
export class WardListComponent implements OnInit {

  constructor(private router:Router) { }
  @ViewChild('example2') table;
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
  addWardForm(){
    this.router.navigateByUrl('/login/header/add-update-ward')
  }

}
