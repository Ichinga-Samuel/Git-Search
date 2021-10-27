import { Component, OnInit } from '@angular/core';
import { Store, select } from "@ngrx/store";
import {Router} from "@angular/router";
import { getIssues, getRepos, getCommits, getUsers, reset} from "../state";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  repos = true
  commits = true
  issues = true
  users = true
  constructor(private store: Store, private router: Router) { }

  search(query: string){
     this.store.dispatch(reset())
     if(query.length>=3 && this.users){this.store.dispatch(getUsers({query: query}))}
     if(query.length>=3 && this.commits){this.store.dispatch(getCommits({query: query}))}
     if(query.length>=3 && this.repos){this.store.dispatch(getRepos({query: query}))}
     if(query.length>=3 && this.users){this.store.dispatch(getIssues({query: query}))}
     this.router.navigate(['search'], {queryParams: {query: query}}).then(res => {})
  }
  ngOnInit(): void {

  }

}
