import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./component/page/home/home.component";

const routes: Routes = [
  {path: '', redirectTo: '/inventory', pathMatch: 'full'},
  {path: 'inventory', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
