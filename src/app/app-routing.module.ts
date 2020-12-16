import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IdButtonDisplayComponent} from './id-button-display/id-button-display.component';
import {EmployeeTableViewComponent} from './employee-table-view/employee-table-view.component';
import {AddEmployeeViewComponent} from './add-employee-view/add-employee-view.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {HomePageComponent} from './home-page/home-page.component';


const routes: Routes = [
  { path: 'homePage', component: HomePageComponent },
  { path: 'idButtonDisplay', component: IdButtonDisplayComponent },
  { path: 'addEmployee', component: AddEmployeeViewComponent },
  { path: 'employeeTableView', component: EmployeeTableViewComponent },
  { path: 'addEmployeeView', component: AddEmployeeViewComponent },
  { path: '', redirectTo: '/idButtonDisplay', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
