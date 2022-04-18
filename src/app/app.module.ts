import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { UserreposComponent } from './userrepos/userrepos.component';
import { HttpClientModule } from '@angular/common/http';
import { UserreposService } from './userrepos.service';
import { UserprofilesService } from './userprofiles.service';
import { SearchFormComponent } from './search-form/search-form.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    UserprofileComponent,
    UserreposComponent,
    SearchFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [
    UserprofilesService,
    UserreposService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
