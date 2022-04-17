import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class UserreposService {

  username = "Olliemint"

  constructor(private reposhttp: HttpClient) { 
    
    
  }
  myRepos(username: string):any{

    const promise2 = new Promise ((resolve, reject)=>{
      resolve(this.reposhttp.get(`https://api.github.com/users/${username}/repos`).toPromise());
    })
    return promise2

  }


}
