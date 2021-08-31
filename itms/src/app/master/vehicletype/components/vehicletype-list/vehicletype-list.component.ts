import { Component, OnInit,ViewChild,AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicletype-list',
  templateUrl: './vehicletype-list.component.html',
  styleUrls: ['./vehicletype-list.component.css']
})
export class VehicletypeListComponent implements OnInit, AfterViewInit {

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

  addUpdate(){    
    this.router.navigateByUrl('/login/header/app-vehicletype-form')
  }

}
