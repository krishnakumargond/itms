import {  Component, OnInit, ViewChild,AfterViewInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-sector-form',
  templateUrl: './sector-form.component.html',
  styleUrls: ['./sector-form.component.css']
})
export class SectorFormComponent implements OnInit ,AfterViewInit {

  @ViewChild('dropdown') list;

  zoneList:any;
  formValue:FormGroup;
    constructor(private formBuilder : FormBuilder) { }
  
    ngOnInit(): void {
      this.formValue = this.formBuilder.group({
        selectWard:new FormControl(''),
        sectorName:new FormControl('',[
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(15)
        ]),
        sectorShortName:new FormControl('',[
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(5)
        ]),
        status:new FormControl(false),
        remark:new FormControl('') 
      })
    }
  
    ngAfterViewInit(){
      this.zoneList = $(this.list.nativeElement);
      this.zoneList.select2({
        theme: 'bootstrap4',
        width: $(this).data('width') ? $(this).data('width') : $(this).hasClass('w-100') ? '100%' : 'style',
        placeholder: $(this).data('placeholder'),
        allowClear: Boolean($(this).data('allow-clear')),
      });
    }
  }
  