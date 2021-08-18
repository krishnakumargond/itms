import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from "jquery";
import 'datatables.net-buttons';
@Component({
  selector: 'app-ward-list',
  templateUrl: './ward-list.component.html',
  styleUrls: ['./ward-list.component.css']
})
export class WardListComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
   
			var table = $('#example2').DataTable( {
				lengthChange: false,
				buttons: [ 'copy', 'excel', 'pdf', 'print']
			} );
		 
			table.buttons().container()
				.appendTo( '#example2_wrapper .col-md-6:eq(0)' );
  }
  addWardForm(){
    this.router.navigateByUrl('/login/header/add-update-ward')
  }

}
