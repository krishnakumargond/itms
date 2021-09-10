import {Component, OnInit, ViewChild,AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-education-details',
  templateUrl: './education-details.component.html',
  styleUrls: ['./education-details.component.css']
})
export class EducationDetailsComponent implements OnInit ,AfterViewInit {


  
  constructor() { 
    
  }

@ViewChild("QualificationType") QualificationType;

@ViewChild("YearOfPassing") YearOfPassing;

@ViewChild("BoardName") BoardName;


Quali_Type:any;

Year_Passing : any;
Board_Name : any;

  ngOnInit(): void {
  }
  ngAfterViewInit(){   
   
    
    this.Quali_Type= $(this.QualificationType.nativeElement);  
  
    this.Year_Passing= $(this.YearOfPassing.nativeElement);  
    
    this.Board_Name= $(this.BoardName.nativeElement);  
   
   
   


    this.Quali_Type.select2({
			theme: 'bootstrap4',
			width: $(this).data('width') ? $(this).data('width') : $(this).hasClass('w-100') ? '100%' : 'style',
			placeholder: $(this).data('placeholder'),
			allowClear: Boolean($(this).data('allow-clear')),
		});
    

    this.Year_Passing.select2({
			theme: 'bootstrap4',
			width: $(this).data('width') ? $(this).data('width') : $(this).hasClass('w-100') ? '100%' : 'style',
			placeholder: $(this).data('placeholder'),
			allowClear: Boolean($(this).data('allow-clear')),
		});
   
    this.Board_Name.select2({
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

