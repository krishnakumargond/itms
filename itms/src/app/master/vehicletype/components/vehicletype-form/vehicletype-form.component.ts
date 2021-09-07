import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-vehicletype-form',
  templateUrl: './vehicletype-form.component.html',
  styleUrls: ['./vehicletype-form.component.css']
})
export class VehicletypeFormComponent implements OnInit , AfterViewInit {

  constructor() { 
    
  }

@ViewChild("CompanyCode") CompanyCode;
@ViewChild("vehicleType") vehicleType;



CCode:any;
Select_VehicleType: any;
  ngOnInit(): void {
  }
  ngAfterViewInit(){   
   
    this.CCode=$(this.CompanyCode.nativeElement);  
    this.Select_VehicleType= $(this.vehicleType.nativeElement);  
   
    this.CCode.select2({
			theme: 'bootstrap4',
			width: $(this).data('width') ? $(this).data('width') : $(this).hasClass('w-100') ? '100%' : 'style',
			placeholder: $(this).data('placeholder'),
			allowClear: Boolean($(this).data('allow-clear')),
		});

    this.Select_VehicleType.select2({
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
