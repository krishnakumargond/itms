import {Component, OnInit, ViewChild,AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-proof-details',
  templateUrl: './proof-details.component.html',
  styleUrls: ['./proof-details.component.css']
})
export class ProofDetailsComponent implements OnInit ,AfterViewInit {


  
  constructor() { 
    
  }

@ViewChild("CountryOfIssue") CountryOfIssue;

@ViewChild("StateOfIssue") StateOfIssue;
@ViewChild("cityOFissue") cityOFissue;
@ViewChild("proofType") proofType;
@ViewChild("Proof_parameter") Proof_parameter;
@ViewChild("DateOfIssue") DateOfIssue;
@ViewChild("DateOfExpiry") DateOfExpiry;



Country_Issue : any;
State_Issue : any;
City_Issue : any;
Proof_Type : any;
Proof_para : any;
Date_Issue : any;
Date_Expiry : any;




  ngOnInit(): void {
  }
  ngAfterViewInit(){   
   
    
    this.Country_Issue= $(this.CountryOfIssue.nativeElement);  
  
    this.State_Issue= $(this.StateOfIssue.nativeElement);  
    this.City_Issue= $(this.cityOFissue.nativeElement);  
    this.Proof_Type= $(this.proofType.nativeElement);  
    this.Proof_para= $(this.Proof_parameter.nativeElement);  
    this.Date_Issue= $(this.DateOfIssue.nativeElement);  
    this.Date_Expiry= $(this.DateOfExpiry.nativeElement);  
   
   
   


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

     


    this.Proof_Type.select2({
			theme: 'bootstrap4',
			width: $(this).data('width') ? $(this).data('width') : $(this).hasClass('w-100') ? '100%' : 'style',
			placeholder: $(this).data('placeholder'),
			allowClear: Boolean($(this).data('allow-clear')),
		});
   
    
    this.Proof_para.select2({
			theme: 'bootstrap4',
			width: $(this).data('width') ? $(this).data('width') : $(this).hasClass('w-100') ? '100%' : 'style',
			placeholder: $(this).data('placeholder'),
			allowClear: Boolean($(this).data('allow-clear')),
		});
    
    this.Date_Issue.bootstrapMaterialDatePicker({
      time:false
    }); 
     
    this.Date_Expiry.bootstrapMaterialDatePicker({
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

