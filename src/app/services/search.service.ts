import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import {map, retry} from 'rxjs/operators';
import {Commit, CommitResult, User, UserResult, Repo, RepoResult, Issue, IssueResult} from "./results.service";

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor(private http: HttpClient, @Inject("API_URL") private url: string) { }

  commits(query: string): Observable<CommitResult>{
    let url = `${this.url}/commits?q=${query}`
    return this.http.get(url).pipe(map((res: any) => {
      let results = res.items.map((item: any) => new Commit(item))
      return {count: res.total_count, results: results}
    }))
  }

  users(query: string): Observable<UserResult>{
    let url = `${this.url}/users?q=${query}`
    return this.http.get(url).pipe(map((res: any) => {
      let results = res.items.map((item: any) => new User(item))
      return {count: res.total_count, results: results}
    }))
  }

  repos(query: string): Observable<RepoResult>{
    let url = `${this.url}/repositories?q=${query}`
    return this.http.get(url).pipe(map((res: any) => {
      let results = res.items.map((item: any) => new Repo(item))
      return {count: res.total_count, results: results}
    }))
  }
  issues(query: string): Observable<IssueResult>{
    let url = `${this.url}/issues?q=${query}`
    return this.http.get(url).pipe(map((res: any) => {
      console.log(res)
      let results = res.items.map((item: any) => new Issue(item))
      return {count: res.total_count, results: results}
    }))
  }
}
