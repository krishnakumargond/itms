import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { LoginComponent } from './user-authentication/login/login.component';
import { ContactsComponent } from './shared/contacts/contacts.component';
import { ForgetPasswordComponent } from './user-authentication/forget-password/forget-password.component';
import { CircleListComponent } from './master/circle/components/circle-list/circle-list.component';
import { ZoneListComponent } from './master/zone/components/zone-list/zone-list.component';
import { ZoneFormComponent } from './master/zone/components/zone-form/zone-form.component';
import { CircleFormComponent } from './master/circle/components/circle-form/circle-form.component';
import { WardListComponent } from './master/ward/components/ward-list/ward-list.component';
import { WardFormComponent } from './master/ward/components/ward-form/ward-form.component';
import { RoleListComponent } from './master/role/components/role-list/role-list.component';
import { RoleFormComponent } from './master/role/components/role-form/role-form.component';
import { CompanyFormComponent } from './master/company/components/company-form/company-form.component';
import { CompanyListComponent } from './master/company/components/company-list/company-list.component';
import { CompanyUploadComponent } from './master/company/components/company-upload/company-upload.component';
import { VehicleFormComponent } from './master/vehicle/components/vehicle-form/vehicle-form.component';
import { VehicleListComponent } from './master/vehicle/components/vehicle-list/vehicle-list.component';
import { VehicleUploadComponent } from './master/vehicle/components/vehicle-upload/vehicle-upload.component';


import { UserListComponent } from './master/user/components/user-list/user-list.component';
import { UserFormComponent } from './master/user/components/user-form/user-form.component';

import { AreaListComponent } from './master/area/components/area-list/area-list.component';
import { AreaFormComponent } from './master/area/components/area-form/area-form.component';
import { SectorFormComponent } from './master/sector/components/sector-form/sector-form.component';
import { SectorListComponent } from './master/sector/components/sector-list/sector-list.component';
import { VehicletypeFormComponent } from './master/vehicletype/components/vehicletype-form/vehicletype-form.component';
import { VehicletypeListComponent } from './master/vehicletype/components/vehicletype-list/vehicletype-list.component';

import { EmployeeListComponent } from './master/employee/components/employee-list/employee-list.component';
import { RegistrationComponent } from './master/employee/components/employee-form/registration/registration.component';
import { PayrollDetailsComponent } from './master/employee/components/employee-form/payroll-details/payroll-details.component';
import { PersonalDetailsComponent } from './master/employee/components/employee-form/personal-details/personal-details.component';
import { ProofDetailsComponent } from './master/employee/components/employee-form/proof-details/proof-details.component';
import { FamilyDetailsComponent } from './master/employee/components/employee-form/family-details/family-details.component';
import { EducationDetailsComponent } from './master/employee/components/employee-form/education-details/education-details.component';
import { ReferenceDetailsComponent } from './master/employee/components/employee-form/reference-details/reference-details.component';
import { ExperienceDetailsComponent } from './master/employee/components/employee-form/experience-details/experience-details.component';
import { DepartmentFormComponent } from './master/department/components/department-form/department-form.component';
import { DesignationFormComponent } from './master/designation/components/designation-form/designation-form.component';
import { PreRegistrationFormComponent } from './master/pre-registration/components/pre-registration-form/pre-registration-form.component';



@NgModule({
  declarations: [
    AppComponent,    
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    LoginComponent,
    ContactsComponent,
    ForgetPasswordComponent,
    ZoneListComponent,
    ZoneFormComponent,
    CircleListComponent,
    CircleFormComponent,
    WardListComponent,
    WardFormComponent,
    RoleListComponent,
    RoleFormComponent,
    CompanyFormComponent,
    CompanyListComponent,
    CompanyUploadComponent,
    VehicleFormComponent,
    VehicleListComponent,
    VehicleUploadComponent,

    UserListComponent,
    UserFormComponent,
 
    AreaFormComponent,
    AreaListComponent,
    SectorFormComponent,
    SectorListComponent,
    VehicletypeFormComponent,
    VehicletypeListComponent,
   
    EmployeeListComponent,
    RegistrationComponent,
    PayrollDetailsComponent,
    PersonalDetailsComponent,
    ProofDetailsComponent,
    FamilyDetailsComponent,
    EducationDetailsComponent,
    ReferenceDetailsComponent,
    ExperienceDetailsComponent,
    DepartmentFormComponent,
    DesignationFormComponent,
    PreRegistrationFormComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
