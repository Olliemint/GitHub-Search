import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  name= new FormControl()

  constructor() { }
  searchrepo(){
    let myname = this.name.value
    

    return false
    


  }

  ngOnInit(): void {
  }

}
