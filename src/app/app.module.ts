import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { UserreposComponent } from './userrepos/userrepos.component';
import { HttpClientModule } from '@angular/common/http';
import { UserreposService } from './userrepos.service';
import { UserprofilesService } from './userprofiles.service';



@NgModule({
  declarations: [
    AppComponent,
    UserprofileComponent,
    UserreposComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [
    UserprofilesService,
    UserreposService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
