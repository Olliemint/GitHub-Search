import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
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

  name = new FormControl()

  constructor(private reposservice: UserreposService) {

    
    

   }

  ngOnInit(): void {

    this.getRepos('Olliemint')
  }

  async getRepos(myfieldn:string):Promise<void>{

    const Repos = await this.reposservice.myRepos(myfieldn);

    this.repos = Repos

    console.log(this.repos);
    
  }

  getusername(){
   let myfieldn = this.name.value

   this.getRepos(myfieldn)

console.log(myfieldn);

   return false;
  }



  
}
