import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'countries-app';

  countryApi = () => {
    this.router.navigateByUrl("/app-countries");
  }

  goToLogin = () => {
    this.router.navigateByUrl("/app-login");
  }

  goToRegister = () => {
    this.router.navigateByUrl("/app-register");
  }

  goToTable = () => {
    this.router.navigateByUrl("/app-table");
  }

  constructor(private router:Router){}
  ngOnInit() {
    
  }
}
