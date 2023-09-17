import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesComponent } from './components/countries/countries.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { TableComponent } from './components/table/table.component';

const routes: Routes = [
  {path: 'app-countries', component: CountriesComponent},
  {path: 'app-login', component: LoginComponent},
  {path: 'app-register', component: RegisterComponent},
  {path: 'app-table', component: TableComponent}
  //{path: 'app-countries', component: CountriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
