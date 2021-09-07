import { Component, OnInit, ViewChild,AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-designation-form',
  templateUrl: './designation-form.component.html',
  styleUrls: ['./designation-form.component.css']
})
export class DesignationFormComponent implements OnInit, AfterViewInit {

  constructor() { 
    
  }

@ViewChild("CompanyCode") CompanyCode;
@ViewChild("selectdepartment") selectdepartment;

CCode:any;
Select_Department: any;
  ngOnInit(): void {
  }
  ngAfterViewInit(){   
   
    this.CCode=$(this.CompanyCode.nativeElement);  
    this.Select_Department= $(this.selectdepartment.nativeElement);  
   
    this.CCode.select2({
			theme: 'bootstrap4',
			width: $(this).data('width') ? $(this).data('width') : $(this).hasClass('w-100') ? '100%' : 'style',
			placeholder: $(this).data('placeholder'),
			allowClear: Boolean($(this).data('allow-clear')),
		});

    this.Select_Department.select2({
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
