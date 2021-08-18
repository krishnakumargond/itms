import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-ward-form',
  templateUrl: './ward-form.component.html',
  styleUrls: ['./ward-form.component.css']
})
export class WardFormComponent implements OnInit, AfterViewInit {
@ViewChild('dropdown') list;

myList:any;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.myList = $(this.list.nativeElement);
    this.myList.select2({
			theme: 'bootstrap4',
			width: $(this).data('width') ? $(this).data('width') : $(this).hasClass('w-100') ? '100%' : 'style',
			placeholder: $(this).data('placeholder'),
			allowClear: Boolean($(this).data('allow-clear')),
		});
  }

}
