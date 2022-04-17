import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserprofilesService {

  profiles = "Olliemint"

  constructor(private httpprofile: HttpClient) { 
    console.log('hello');
    
  }

      myProfile(profiles:string):any{
        const promise1 = new Promise ((resolve, reject)=>{
          resolve(this.httpprofile.get(`https://api.github.com/users/${profiles}`).toPromise());
        });

        return promise1
      }



}
