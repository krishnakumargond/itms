import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CircleFormComponent } from './master/circle/components/circle-form/circle-form.component';
import { CircleListComponent } from './master/circle/components/circle-list/circle-list.component';
import { CompanyFormComponent } from './master/company/components/company-form/company-form.component';
import { CompanyListComponent } from './master/company/components/company-list/company-list.component';
import { ProductListComponent } from './master/product/components/product-list/product-list.component';
import { WardFormComponent } from './master/ward/components/ward-form/ward-form.component';
import { WardListComponent } from './master/ward/components/ward-list/ward-list.component';
import { RoleFormComponent } from './master/role/components/role-form/role-form.component';
import { RoleListComponent } from './master/role/components/role-list/role-list.component';
import { ZoneFormComponent } from './master/zone/components/zone-form/zone-form.component';
import { ZoneListComponent } from './master/zone/components/zone-list/zone-list.component';
import { ContactsComponent } from './shared/contacts/contacts.component';
import { HeaderComponent } from './shared/header/header.component';
import { ForgetPasswordComponent } from './user-authentication/forget-password/forget-password.component';
import { LoginComponent } from './user-authentication/login/login.component';
import { CompanyUploadComponent } from './master/company/components/company-upload/company-upload.component';
import { VehicleListComponent } from './master/vehicle/components/vehicle-list/vehicle-list.component';
import { VehicleFormComponent } from './master/vehicle/components/vehicle-form/vehicle-form.component';
import { VehicleUploadComponent } from './master/vehicle/components/vehicle-upload/vehicle-upload.component';

const routes: Routes = [
  {path:'login/header', component:HeaderComponent, 
    children:[
      {path:'contacts', component:ContactsComponent},
      {path:'product', component:ProductListComponent},
      {path:'zone-master', component:ZoneListComponent},
      {path:'zone-form', component:ZoneFormComponent},
      {path:'circle', component:CircleListComponent},
      {path:'add-update-circle', component:CircleFormComponent},
      {path:'role', component:RoleListComponent},
      {path:'add-update-role', component:RoleFormComponent},
      {path:'Add-Update', component:CircleFormComponent},
      {path:'ward-master', component:WardListComponent},
      {path:'ward-form', component:WardFormComponent},
      {path:'company', component:CompanyListComponent},
      {path:'Add-Update-Company', component:CompanyFormComponent},
      {path:'Add-Upload-Company', component:CompanyUploadComponent},
      {path:'List-Vehicle', component:VehicleListComponent},
      {path:'Add-Update-Vehicle', component:VehicleFormComponent},
      {path:'Add-Upload-Vehicle', component:VehicleUploadComponent},
    ]
},
  {path:'login', component:LoginComponent},
  {path:'forget-password', component:ForgetPasswordComponent},
 
  {path:'**', redirectTo:'login', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
