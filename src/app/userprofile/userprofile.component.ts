import { Component, OnInit } from '@angular/core';
import { UserprofilesService } from '../userprofiles.service';
import { ProfileClass } from '../profile-class';



@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css'],
  // providers: [UserprofilesService]
})
export class UserprofileComponent implements OnInit {

  Profile: any =[]
  user!: ProfileClass;

  constructor(public profileservice: UserprofilesService) {
    this.user = new ProfileClass ('',0);
    
    
   }
   


  ngOnInit(): void {
      this.myProfile()
      interface Apiresponse{
        bio:string,
        followers:number
     
      }
  }
  
   async myProfile(): Promise<void>{
     const profileData = await this.profileservice.myProfile(this.Profile);

     this.Profile = profileData

     console.log(this.Profile);
     
   }

}
