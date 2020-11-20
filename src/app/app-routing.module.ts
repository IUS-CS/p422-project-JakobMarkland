import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IdButtonDisplayComponent} from './id-button-display/id-button-display.component';
import {EmployeeTableViewComponent} from './employee-table-view/employee-table-view.component';


const routes: Routes = [{
  path: 'app-employee-view',
  component: IdButtonDisplayComponent
}, {
  path: 'app-employee-table-view',
  component: EmployeeTableViewComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
