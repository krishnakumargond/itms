import { Component, OnInit,ViewChild,AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit,AfterViewInit {

  constructor(private router: Router) { }
  @ViewChild('example3') table;
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
  addUpdateCompany(){
    console.log('working')
    this.router.navigateByUrl('/login/header/Add-Update-Company')
  }
  UploadCompany(){
    console.log('working')
    this.router.navigateByUrl('/login/header/Add-Upload-Company')
  }
}
