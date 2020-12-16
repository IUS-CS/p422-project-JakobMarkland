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
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeTableViewComponent,
    EditEmployeeViewComponent,
    AddEmployeeViewComponent,
    SingleEmployeeViewComponent,
    IdButtonDisplayComponent,
    PageNotFoundComponent,
    HomePageComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        NgbModule,
        ReactiveFormsModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
