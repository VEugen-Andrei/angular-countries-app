import { Component } from '@angular/core';
import { CountriesDataService } from 'src/app/services/countries-data.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent {

  test() {
    console.log("component-test");
  }

  countries:any = '';
  booleanValue = false;
  // jsonDummyData = [
  //     {"firstName":"John", "lastName":"Doe"},
  //     {"firstName":"Anna", "lastName":"Smith"},
  //     {"firstName":"Peter", "lastName":"Jones"}
  //   ];
  // toUppercase = "oarecare";
  // toLowercase = "OARECARE";
  countryDetails = false;
  clicked = '';

  onClickShowBoolean(){
    if(this.booleanValue == true){
      this.booleanValue = false;
    }
    this.booleanValue = true;
  }

  onClickHideBoolean(){
    this.booleanValue = false;
  }

  showCountryDetails(){
    this.countryDetails = true;
  }

  hideCountryDetails(){
    this.countryDetails = false;
  }

  constructor(private countriesService: CountriesDataService) {
  }

  ngOnInit(){
    this.countriesData();
  }

  countriesData(){
    this.countriesService.getCountries().subscribe(response => {
      this.countries = response;
      console.log(response);
      console.log(this.countries[0]);
      console.log(this.clicked);
      return response;
    })
  }
}