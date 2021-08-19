import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-zone-form',
  templateUrl: './zone-form.component.html',
  styleUrls: ['./zone-form.component.css']
})
export class ZoneFormComponent implements OnInit, AfterViewInit {
@ViewChild('drop') list;
zoneList:any;
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(){
    this.zoneList = $(this.list.nativeElement);
    this.zoneList.select2({
			theme: 'bootstrap4',
			width: $(this).data('width') ? $(this).data('width') : $(this).hasClass('w-100') ? '100%' : 'style',
			placeholder: $(this).data('placeholder'),
			allowClear: Boolean($(this).data('allow-clear')),
		});
  }

}
