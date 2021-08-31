import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-vehicletype-form',
  templateUrl: './vehicletype-form.component.html',
  styleUrls: ['./vehicletype-form.component.css']
})
export class VehicletypeFormComponent implements OnInit , AfterViewInit {

  @ViewChild('dropdown') list;

  zoneList:any;
  formValue:FormGroup;
    constructor(private formBuilder : FormBuilder) { }
  
    ngOnInit(): void {
      this.formValue = this.formBuilder.group({
        vehicleType:new FormControl(''),
        
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
  