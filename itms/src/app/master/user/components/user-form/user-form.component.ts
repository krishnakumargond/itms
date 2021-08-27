import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit, AfterViewInit {
  @ViewChild('dropdown4') list;
  @ViewChild('dropdown5') list1;
  formValue:FormGroup;
  myList:any;
  myList1:any;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formValue= this.formBuilder.group({
      userName: new FormControl('',[
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(255)
      ]),
      employee: new FormControl('',),
      role: new FormControl(''),
      mobile:new FormControl(null,[
        Validators.required
      ]),
      password:new FormControl(null,[
        Validators.required,
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$')
      ]),
      loginID:new FormControl('',[
        Validators.required
      ]),
      status:new FormControl(false,[
        Validators.required
      ])

    })
  }

  ngAfterViewInit(){
    this.myList = $(this.list.nativeElement);
    this.myList.select2({
			theme: 'bootstrap4',
			width: $(this).data('width') ? $(this).data('width') : $(this).hasClass('w-100') ? '100%' : 'style',
			placeholder: $(this).data('placeholder'),
			allowClear: Boolean($(this).data('allow-clear')),
		});

    this.myList1 = $(this.list1.nativeElement);
    this.myList1.select2({
			theme: 'bootstrap4',
			width: $(this).data('width') ? $(this).data('width') : $(this).hasClass('w-100') ? '100%' : 'style',
			placeholder: $(this).data('placeholder'),
			allowClear: Boolean($(this).data('allow-clear')),
		});
  }

}
