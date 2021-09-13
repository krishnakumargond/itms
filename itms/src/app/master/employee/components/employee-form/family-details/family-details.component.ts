import {Component, OnInit, ViewChild,AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-family-details',
  templateUrl: './family-details.component.html',
  styleUrls: ['./family-details.component.css']
})
export class FamilyDetailsComponent implements OnInit ,AfterViewInit {


  
  constructor() { 
    
  }

@ViewChild("CountryOfIssue") CountryOfIssue;

@ViewChild("StateOfIssue") StateOfIssue;
@ViewChild("cityOFissue") cityOFissue;
@ViewChild("DateOfBirth") DateOfBirth;
@ViewChild("Relationship") Relationship;
@ViewChild("Nationality") Nationality;





Country_Issue : any;
State_Issue : any;
City_Issue : any;
DateBirth : any;
relationship : any;
nationality : any;




  ngOnInit(): void {
  }
  ngAfterViewInit(){   
   
    
    this.Country_Issue= $(this.CountryOfIssue.nativeElement);  
  
    this.State_Issue= $(this.StateOfIssue.nativeElement);  
    this.City_Issue= $(this.cityOFissue.nativeElement);  
    this.DateBirth= $(this.DateOfBirth.nativeElement);  
    this.relationship= $(this.Relationship.nativeElement);  
    this.nationality= $(this.Nationality.nativeElement); 
   
   


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

    this.DateBirth.bootstrapMaterialDatePicker({
      time:false
    }); 
    
    this.relationship.select2({
			theme: 'bootstrap4',
			width: $(this).data('width') ? $(this).data('width') : $(this).hasClass('w-100') ? '100%' : 'style',
			placeholder: $(this).data('placeholder'),
			allowClear: Boolean($(this).data('allow-clear')),
		});
    
    this.nationality.select2({
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


