import { Component, OnInit } from '@angular/core';
import { UserprofilesService } from '../userprofiles.service';


@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css'],
  // providers: [UserprofilesService]
})
export class UserprofileComponent implements OnInit {

  Profile: any =[]

  constructor(public profileservice: UserprofilesService) {
    console.log('MY SERVICE WORK');
    
    
   }


  ngOnInit(): void {
      this.myProfile()
  }
   async myProfile(): Promise<void>{
     const profileData = await this.profileservice.myProfile("Olliemint");

     this.Profile = profileData

     console.log(this.Profile);
     
   }

}
