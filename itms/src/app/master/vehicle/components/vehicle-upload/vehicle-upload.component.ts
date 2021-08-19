import {  AfterViewInit, Component, OnInit, ViewChild  } from '@angular/core';

@Component({
  selector: 'app-vehicle-upload',
  templateUrl: './vehicle-upload.component.html',
  styleUrls: ['./vehicle-upload.component.css']
})
export class VehicleUploadComponent implements OnInit {

  @ViewChild('upload') upload;
  myUplaod:any;
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(){
    this.myUplaod = $(this.upload.nativeElement)
   { 
    this.myUplaod.imageuploadify();
    }
  }

}
