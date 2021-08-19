import { Component, OnInit,ViewChild,AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit,AfterViewInit {

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
  addUpdateVehicle(){
    console.log('working')
    this.router.navigateByUrl('/login/header/Add-Update-Vehicle')
  }
  UploadCompanyVehicle(){
    console.log('working')
    this.router.navigateByUrl('/login/header/Add-Upload-Vehicle')
  }

}
