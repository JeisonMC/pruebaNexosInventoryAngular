import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatTableModule} from "@angular/material/table";
import {HomeComponent} from "./component/page/home/home.component";
import {MatIconModule} from "@angular/material/icon";
import { RegisterUserComponent } from './component/shared/register-user/register-user.component';
import {MatDialogModule} from "@angular/material/dialog";
import { SelectUserComponent } from './component/shared/select-user/select-user.component';
import { RegisterRoleComponent } from './component/shared/register-role/register-role.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import { RegisterInventoryComponent } from './component/shared/register-inventory/register-inventory.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { UpdateInventoryComponent } from './component/shared/update-inventory/update-inventory.component';
import { DetailsInventoryComponent } from './component/shared/details-inventory/details-inventory.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterUserComponent,
    SelectUserComponent,
    RegisterRoleComponent,
    RegisterInventoryComponent,
    UpdateInventoryComponent,
    DetailsInventoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
