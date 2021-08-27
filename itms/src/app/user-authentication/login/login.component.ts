import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit, OnDestroy {

  constructor(private router: Router) { }

  ngOnInit(): void {  
  }

  ngAfterViewInit(){
    $("body").css('background-image', "url('assets/images/login-bg.jpg')");
    $(document).ready(function () {
      $("#show_hide_password a").on('click', function (event) {
          event.preventDefault();
          if ($('#show_hide_password input').attr("type") == "text") {
              $('#show_hide_password input').attr('type', 'password');
              $('#show_hide_password i').addClass("bx-hide");
              $('#show_hide_password i').removeClass("bx-show");
          } else if ($('#show_hide_password input').attr("type") == "password") {
              $('#show_hide_password input').attr('type', 'text');
              $('#show_hide_password i').removeClass("bx-hide");
              $('#show_hide_password i').addClass("bx-show");
          }
      });
  });
  }

  ngOnDestroy(){
    $("body").css('background-image', 'none');
  }



  authenticate(){
    this.router.navigateByUrl('/login/header/contacts')
  }

}
