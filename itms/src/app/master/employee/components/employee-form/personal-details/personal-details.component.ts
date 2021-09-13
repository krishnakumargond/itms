import {Component, OnInit, ViewChild,AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit,AfterViewInit {


  
  constructor() { 
    
  }

@ViewChild("CountryOfIssue") CountryOfIssue;

@ViewChild("StateOfIssue") StateOfIssue;
@ViewChild("cityOFissue") cityOFissue;

@ViewChild("Country") Country;

@ViewChild("State") State;
@ViewChild("city") city;

@ViewChild("Religion") Religion;

@ViewChild("Employee_bloodgroup") Employee_bloodgroup;





Country_Issue : any;
State_Issue : any;
City_Issue : any;
Country_: any;
State_ : any;
City_ : any;
religion_ :any;

Employee_blood : any;


  ngOnInit(): void {
  }
  ngAfterViewInit(){   
   
    
    this.Country_Issue= $(this.CountryOfIssue.nativeElement);  
  
    this.State_Issue= $(this.StateOfIssue.nativeElement);  
    this.City_Issue= $(this.cityOFissue.nativeElement);  

      
    this.Country_= $(this.Country.nativeElement);  
  
    this.State_= $(this.State.nativeElement);  
    this.City_= $(this.city.nativeElement);

    this.religion_= $(this.Religion.nativeElement);
        
    this.Employee_blood= $(this.Employee_bloodgroup.nativeElement);  
   


    this.Country_Issue.select2({
			theme: 'bootstrap4',
			width: $(this).data('width') ? $(this).data('width') : $(this).hasClass('w-100') ? '100%' : 'style',
			placeholder: $(this).data('placeholder'),
			allowClear: Boolean($(this).data('allow-clear')),
		});
    

    this.State_Issue.select2({
			theme: 'bootstrap4',
			width: $(this).data('width') ? $(this).data('width') : $(this).hasClass('w-100') ? '100%' : 'style',
			placeholder: $(this).data('placeholder'),
			allowClear: Boolean($(this).data('allow-clear')),
		});
   
    
    this.City_Issue.select2({
			theme: 'bootstrap4',
			width: $(this).data('width') ? $(this).data('width') : $(this).hasClass('w-100') ? '100%' : 'style',
			placeholder: $(this).data('placeholder'),
			allowClear: Boolean($(this).data('allow-clear')),
		});

    this.Country_.select2({
			theme: 'bootstrap4',
			width: $(this).data('width') ? $(this).data('width') : $(this).hasClass('w-100') ? '100%' : 'style',
			placeholder: $(this).data('placeholder'),
			allowClear: Boolean($(this).data('allow-clear')),
		});
    
    this.State_.select2({
			theme: 'bootstrap4',
			width: $(this).data('width') ? $(this).data('width') : $(this).hasClass('w-100') ? '100%' : 'style',
			placeholder: $(this).data('placeholder'),
			allowClear: Boolean($(this).data('allow-clear')),
		});
    
    this.City_.select2({
			theme: 'bootstrap4',
			width: $(this).data('width') ? $(this).data('width') : $(this).hasClass('w-100') ? '100%' : 'style',
			placeholder: $(this).data('placeholder'),
			allowClear: Boolean($(this).data('allow-clear')),
		});
    
    
    this.religion_.select2({
			theme: 'bootstrap4',
			width: $(this).data('width') ? $(this).data('width') : $(this).hasClass('w-100') ? '100%' : 'style',
			placeholder: $(this).data('placeholder'),
			allowClear: Boolean($(this).data('allow-clear')),
		});
    
    
    this.Employee_blood.select2({
			theme: 'bootstrap4',
			width: $(this).data('width') ? $(this).data('width') : $(this).hasClass('w-100') ? '100%' : 'style',
			placeholder: $(this).data('placeholder'),
			allowClear: Boolean($(this).data('allow-clear')),
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

