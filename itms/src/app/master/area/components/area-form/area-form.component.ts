import { Component, OnInit, ViewChild,AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-area-form',
  templateUrl: './area-form.component.html',
  styleUrls: ['./area-form.component.css']
})
export class AreaFormComponent implements OnInit ,AfterViewInit {


  
  constructor() { 
    
  }

@ViewChild("CompanyCode") CompanyCode;
@ViewChild("selectSector") selectSector;



CCode:any;
Select_Sector: any;
  ngOnInit(): void {
  }
  ngAfterViewInit(){   
   
    this.CCode=$(this.CompanyCode.nativeElement);  
    this.Select_Sector= $(this.selectSector.nativeElement);  
   
    this.CCode.select2({
			theme: 'bootstrap4',
			width: $(this).data('width') ? $(this).data('width') : $(this).hasClass('w-100') ? '100%' : 'style',
			placeholder: $(this).data('placeholder'),
			allowClear: Boolean($(this).data('allow-clear')),
		});

    this.Select_Sector.select2({
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
