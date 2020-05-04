import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpListComponent } from './emp-list/emp-list.component';
import { DepListComponent } from './dep-list/dep-list.component';
import { DepDetailComponent } from './dep-detail/dep-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



const routes: Routes = [
  {path:'',redirectTo:'/emp-list1',pathMatch:"full"},
  {path:'emp-list1',component:EmpListComponent},
  {path:'dep-list',component:DepListComponent},
  {path:'emp-list1/:id',component:DepDetailComponent},
  {path:'**',component:PageNotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
