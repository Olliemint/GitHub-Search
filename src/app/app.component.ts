import { Component } from '@angular/core';
// import { SearchFormComponent } from './search-form/search-form.component';
// import { UserprofilesService } from './userprofiles.service';
import { UserreposService } from './userrepos.service';



@Component({
  
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'GitHub-Search';

  repos: any = []

  constructor(private reposservice: UserreposService) {

    
    

   }

  ngOnInit(): void {

    this.getRepos()
  }

  async getRepos():Promise<void>{

    const Repos = await this.reposservice.myRepos("Olliemint");

    this.repos = Repos

    console.log(this.repos);
    
  }



  
}
