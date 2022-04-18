import { Component, OnInit } from '@angular/core';
import { UserreposService } from '../userrepos.service';


@Component({
  selector: 'app-userrepos',
  templateUrl: './userrepos.component.html',
  styleUrls: ['./userrepos.component.css']
})
export class UserreposComponent implements OnInit {

  repos: any = []

  constructor(private reposservice: UserreposService) {

    
    

   }

  ngOnInit(): void {

    this.getRepos()
  }

  async getRepos():Promise<void>{

    const Repos = await this.reposservice.myRepos("Olliemint");

    this.repos = Repos

    // console.log(this.repos);
    
  }

}
