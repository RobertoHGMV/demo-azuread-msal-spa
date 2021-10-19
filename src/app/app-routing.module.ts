import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ListPageComponent } from './list-page/list-page.component';
import { MsalGuard } from './msal.guard';

const routes: Routes = [{
  path: 'home-page', component: HomePageComponent
}, {
  path: 'list-page', component: ListPageComponent, canActivate: [MsalGuard]
}, {
  path: '*', component: HomePageComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
