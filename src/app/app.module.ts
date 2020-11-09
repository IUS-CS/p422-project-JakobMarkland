import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeTableViewComponent } from './employee-table-view/employee-table-view.component';
import { EditEmployeeViewComponent } from './edit-employee-view/edit-employee-view.component';
import { AddEmployeeViewComponent } from './add-employee-view/add-employee-view.component';
import { SingleEmployeeViewComponent } from './single-employee-view/single-employee-view.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeTableViewComponent,
    EditEmployeeViewComponent,
    AddEmployeeViewComponent,
    SingleEmployeeViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
