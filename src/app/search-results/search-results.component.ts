import { Component, OnInit } from '@angular/core';
import { SearchState, selectState } from "../state";
import { Store, select } from "@ngrx/store";
import {ActivatedRoute} from "@angular/router";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  SearchResults: SearchState = {
    count: 0,
    commits: {
      count: 0,
      results: []
    },
    users: {
      count: 0,
      results: []
    },
    repos: {
      count: 0,
      results: []
    },
    issues: {
      count: 0,
      results: []
    }
}
  commits = {stat: false, str: 'commits'}
  repos = {stat: true, str: 'repos'}
  issues = {stat: false, str: 'issues'}
  users = {stat: false, str: 'users'}
  query = ''
  constructor(private store: Store, private route: ActivatedRoute) { }

  change(type: string){
    this.commits.stat = this.issues.stat = this.repos.stat = this.users.stat = false
    if(this.commits.str === type){this.commits.stat = true; return}
    if(this.repos.str === type){this.repos.stat = true; return}
    if(this.users.str === type){this.users.stat = true; return}
    if(this.issues.str === type){this.issues.stat = true; return}
  }
  ngOnInit(): void {
    this.store.pipe(select(selectState)).subscribe(res => this.SearchResults = res.state)
    this.route.queryParamMap.pipe(map(param => param.get('query') || '')).subscribe(q => {this.query = q})
  }

}
