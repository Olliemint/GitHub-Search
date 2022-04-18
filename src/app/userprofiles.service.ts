import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserprofilesService {
  Profile: string;

  

  constructor(private httpprofile: HttpClient) { 
    this.Profile ='Olliemint'
    
  }

      myProfile(profiles:string):any{
        const promise1 = new Promise ((resolve, reject)=>{
          resolve(this.httpprofile.get(`https://api.github.com/users/${this.Profile}`).toPromise());
        });

        return promise1
      }



}
