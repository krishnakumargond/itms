import { Component, OnInit,AfterViewInit,ViewChild} from '@angular/core';


@Component({
  selector: 'app-circle-form',
  templateUrl: './circle-form.component.html',
  styleUrls: ['./circle-form.component.css']
})
export class CircleFormComponent implements OnInit,AfterViewInit {


  
  constructor() { 
    
  }
  
@ViewChild("DateOfCommission") DateOfCommission;
@ViewChild("CompanyCode") CompanyCode;

DateComm: any;
CCode:any;
  ngOnInit(): void {
  }
  ngAfterViewInit(){   
    this.DateComm = $(this.DateOfCommission.nativeElement);   
    this.CCode=$(this.CompanyCode.nativeElement);
    this.DateComm.bootstrapMaterialDatePicker({
      time:false
    });   
    this.CCode.select2({
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
