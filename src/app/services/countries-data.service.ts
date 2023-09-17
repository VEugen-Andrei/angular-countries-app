import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesDataService {

  constructor(private http: HttpClient) {}

  getDate(){
    console.log('data-test')
  }

  public getCountries(): Observable<any> {
    const url = 'http://restcountries.net/v3.1/all';
    return this.http.get<any>(url);
  }
}