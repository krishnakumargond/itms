import {Component, OnInit, ViewChild,AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-experience-details',
  templateUrl: './experience-details.component.html',
  styleUrls: ['./experience-details.component.css']
})
export class ExperienceDetailsComponent implements OnInit  ,AfterViewInit {


  
  constructor() { 
    
  }


@ViewChild("FromDate") FromDate;
@ViewChild("ToDate") ToDate;



Form_Date : any;
To_Date : any;


  ngOnInit(): void {
  }
  ngAfterViewInit(){   
   
    
   
    this.Form_Date= $(this.FromDate.nativeElement);  
    this.To_Date= $(this.ToDate.nativeElement);  
   
   


    this.Form_Date.bootstrapMaterialDatePicker({
      time:false
    });  
    
    
    this.To_Date.bootstrapMaterialDatePicker({
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
