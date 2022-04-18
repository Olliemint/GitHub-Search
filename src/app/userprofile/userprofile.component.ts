import { Component, OnInit } from '@angular/core';
import { UserprofilesService } from '../userprofiles.service';
import { ProfileClass } from '../profile-class';
import { FormControl } from '@angular/forms';







@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css'],
  // providers: [UserprofilesService]
})
export class UserprofileComponent implements OnInit {

  name= new FormControl()

  Profile: any =[]
  // name2!: string
  // public username = 'Olliemint'
  // user!: ProfileClass;

  constructor(public profileservice: UserprofilesService) {
    // this.user = new ProfileClass ('',0);
   
    
    
   }
   


  ngOnInit(): void {
      
      this.myProfile('Olliemint')
      // interface Apiresponse{
      //   bio:string,
      //   followers:number
     
      // }
  }
  
   async myProfile(username:string): Promise<void>{
     
     
     const profileData = await this.profileservice.myProfile(username);

     this.Profile = profileData

     console.log(this.Profile);
     
   }

   getname(){
    let username = this.name.value
    this.myProfile(username)
    // const fetchname = this.name.value
    

     return false;
     
   }

 

   
}
