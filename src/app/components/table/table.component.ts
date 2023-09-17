import { Component } from '@angular/core';
import { CountriesDataService } from 'src/app/services/countries-data.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  displayColumns:string[]= ['position', 'name', 'weight', 'symbol'];
  dataSource:any = [];

  constructor(private countriesService: CountriesDataService) {
  }

  ngOnInit(){
    this.countriesTableData();
  }

  public countriesTableData(){
    this.countriesService.getCountries().subscribe(response => {
      //const stringData = JSON.stringify(response);
      console.log(response);
      return this.dataSource=response;
    })
  }
}
