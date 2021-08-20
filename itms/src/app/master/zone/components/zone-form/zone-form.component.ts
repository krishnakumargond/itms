import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-zone-form',
  templateUrl: './zone-form.component.html',
  styleUrls: ['./zone-form.component.css']
})
export class ZoneFormComponent implements OnInit, AfterViewInit {
@ViewChild('drop') list;
zoneList:any;
formValue:FormGroup;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      selectCircle: new FormControl(''),
      zoneName:new FormControl('',[
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(15)
      ]),
      zoneShortName:new FormControl('',[
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(5)
      ]),
      status:new FormControl(false)
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
