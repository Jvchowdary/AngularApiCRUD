import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentComponent} from './department/department.component';
import { ShowDepartmentComponent } from './department/show-department/show-department.component';
import { ApiserviceService } from './apiservice.service';
import { EmployeeComponent } from './employee/employee.component';
import { ShowEmployeeComponent } from './employee/show-employee/show-employee.component';
import { AddEditDepartmentComponent } from './department/add-edit-department/add-edit-department.component';
import { AddiEditEmployeeComponent } from './employee/addi-edit-employee/addi-edit-employee.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent,
    ShowDepartmentComponent,
    EmployeeComponent,
    ShowEmployeeComponent,
    AddEditDepartmentComponent,
    AddiEditEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration(),ApiserviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
