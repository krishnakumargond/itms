import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CircleFormComponent } from './master/circle/components/circle-form/circle-form.component';
import { CircleListComponent } from './master/circle/components/circle-list/circle-list.component';
import { ProductListComponent } from './master/product/components/product-list/product-list.component';
import { RoleFormComponent } from './master/role/components/role-form/role-form.component';
import { RoleListComponent } from './master/role/components/role-list/role-list.component';
import { ContactsComponent } from './shared/contacts/contacts.component';
import { HeaderComponent } from './shared/header/header.component';
import { ForgetPasswordComponent } from './user-authentication/forget-password/forget-password.component';
import { LoginComponent } from './user-authentication/login/login.component';

const routes: Routes = [
  {path:'login/header', component:HeaderComponent, 
    children:[
      {path:'contacts', component:ContactsComponent},
      {path:'product', component:ProductListComponent},
      {path:'circle', component:CircleListComponent},
      {path:'add-update-circle', component:CircleFormComponent},
      {path:'role', component:RoleListComponent},
      {path:'add-update-role', component:RoleFormComponent},
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
