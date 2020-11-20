import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeTableViewComponent } from './employee-table-view/employee-table-view.component';
import { EditEmployeeViewComponent } from './edit-employee-view/edit-employee-view.component';
import { AddEmployeeViewComponent } from './add-employee-view/add-employee-view.component';
import { SingleEmployeeViewComponent } from './single-employee-view/single-employee-view.component';
import { IdButtonDisplayComponent } from './id-button-display/id-button-display.component';
import {FormsModule} from '@angular/forms';
import { EmployeeNavBarComponent } from './employee-nav-bar/employee-nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeTableViewComponent,
    EditEmployeeViewComponent,
    AddEmployeeViewComponent,
    SingleEmployeeViewComponent,
    IdButtonDisplayComponent,
    EmployeeNavBarComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        NgbModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
