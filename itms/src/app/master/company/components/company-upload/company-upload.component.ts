import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-company-upload',
  templateUrl: './company-upload.component.html',
  styleUrls: ['./company-upload.component.css']
})
export class CompanyUploadComponent implements OnInit, AfterViewInit {
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
