import { Component, OnInit, ViewChild,AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-payroll-details',
  templateUrl: './payroll-details.component.html',
  styleUrls: ['./payroll-details.component.css']
})
export class PayrollDetailsComponent implements OnInit,AfterViewInit {


  
  constructor() { 
    
  }

@ViewChild("EmpBankName") EmpBankName;

@ViewChild("ModeOfPayment") ModeOfPayment;



Emp_Bankname:any;

Mode_Payment : any;

  ngOnInit(): void {
  }
  ngAfterViewInit(){   
   
    
    this.Emp_Bankname= $(this.EmpBankName.nativeElement);  
  
    this.Mode_Payment= $(this.ModeOfPayment.nativeElement);  
   
   


    this.Emp_Bankname.select2({
			theme: 'bootstrap4',
			width: $(this).data('width') ? $(this).data('width') : $(this).hasClass('w-100') ? '100%' : 'style',
			placeholder: $(this).data('placeholder'),
			allowClear: Boolean($(this).data('allow-clear')),
		});
    

    this.Mode_Payment.select2({
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
