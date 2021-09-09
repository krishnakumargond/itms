import {  Component, OnInit, ViewChild,AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit ,AfterViewInit {


  
  constructor() { 
    
  }

@ViewChild("salutation") salutation;
@ViewChild("Department") Department;
@ViewChild("Designation") Designation;
@ViewChild("empType") empType;
@ViewChild("DateOfBirth") DateOfBirth;
@ViewChild("CountryOfBirth") CountryOfBirth;
@ViewChild("CityOfBirth") CityOfBirth;
@ViewChild("StateOfBirth") StateOfBirth;
@ViewChild("DateOfJoining") DateOfJoining;
@ViewChild("ResignedDate") ResignedDate;


Salutation:any;
Select_department : any;
Select_designation :any;
Employee_Type : any;
DateBirth : any;
CountryBirth : any;
CityBirth : any;
StateBirth : any;
DateJoin : any;
Resigned_Date :any;

  ngOnInit(): void {
  }
  ngAfterViewInit(){   
   
    
    this.Salutation= $(this.salutation.nativeElement);  
    this.Select_department= $(this.Department.nativeElement);  
    this.Select_designation= $(this.Designation.nativeElement);
    this.Employee_Type= $(this.empType.nativeElement);  
    this.DateBirth= $(this.DateOfBirth.nativeElement);  
    this.CountryBirth= $(this.CountryOfBirth.nativeElement);  
    this.CityBirth= $(this.CityOfBirth.nativeElement);  
    this.StateBirth= $(this.StateOfBirth.nativeElement);  
    this.DateJoin= $(this.DateOfJoining.nativeElement);  
    this.Resigned_Date= $(this.ResignedDate.nativeElement);  
   


    this.Salutation.select2({
			theme: 'bootstrap4',
			width: $(this).data('width') ? $(this).data('width') : $(this).hasClass('w-100') ? '100%' : 'style',
			placeholder: $(this).data('placeholder'),
			allowClear: Boolean($(this).data('allow-clear')),
		});
    this.Select_department.select2({
			theme: 'bootstrap4',
			width: $(this).data('width') ? $(this).data('width') : $(this).hasClass('w-100') ? '100%' : 'style',
			placeholder: $(this).data('placeholder'),
			allowClear: Boolean($(this).data('allow-clear')),
		});
    this.Select_designation.select2({
			theme: 'bootstrap4',
			width: $(this).data('width') ? $(this).data('width') : $(this).hasClass('w-100') ? '100%' : 'style',
			placeholder: $(this).data('placeholder'),
			allowClear: Boolean($(this).data('allow-clear')),
		});
    this.Employee_Type.select2({
			theme: 'bootstrap4',
			width: $(this).data('width') ? $(this).data('width') : $(this).hasClass('w-100') ? '100%' : 'style',
			placeholder: $(this).data('placeholder'),
			allowClear: Boolean($(this).data('allow-clear')),
		});
    
    this.DateBirth.bootstrapMaterialDatePicker({
      time:false
    });  
    this.CountryBirth.select2({
			theme: 'bootstrap4',
			width: $(this).data('width') ? $(this).data('width') : $(this).hasClass('w-100') ? '100%' : 'style',
			placeholder: $(this).data('placeholder'),
			allowClear: Boolean($(this).data('allow-clear')),
		});
    this.CityBirth.select2({
			theme: 'bootstrap4',
			width: $(this).data('width') ? $(this).data('width') : $(this).hasClass('w-100') ? '100%' : 'style',
			placeholder: $(this).data('placeholder'),
			allowClear: Boolean($(this).data('allow-clear')),
		});
    this.StateBirth.select2({
			theme: 'bootstrap4',
			width: $(this).data('width') ? $(this).data('width') : $(this).hasClass('w-100') ? '100%' : 'style',
			placeholder: $(this).data('placeholder'),
			allowClear: Boolean($(this).data('allow-clear')),
		});
    this.DateJoin.bootstrapMaterialDatePicker({
      time:false
    });  
    this.Resigned_Date.bootstrapMaterialDatePicker({
      time:false
    });  
   
    
    let forms: NodeListOf<Element> = document.querySelectorAll(".needs-validation");    
    Array.prototype.slice.call(forms)
    .forEach(function (form) {
        form.addEventListener('submit', function (event) {          
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
  }

}
