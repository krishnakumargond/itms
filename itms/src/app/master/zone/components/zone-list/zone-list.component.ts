import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-zone-list',
  templateUrl: './zone-list.component.html',
  styleUrls: ['./zone-list.component.css']
})
export class ZoneListComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  addZoneForm(){
    this.router.navigateByUrl('/login/header/add-update-zone')
  }

}
