import { Injectable } from '@angular/core';
import {Store} from "@ngrx/store";
import {catchError, exhaustMap, map} from "rxjs/operators";
import {Actions, createEffect, ofType} from "@ngrx/effects";

import {getUsers, getCommits, getIssues, getRepos, setRepos, setCommits, setUsers, setIssues} from "./actions";
import {SearchService} from "../services";

@Injectable()
export class SearchEffects{

  repos$ = createEffect(() => {
    return this.actions$.pipe(ofType(getRepos),
      exhaustMap(action => this.ss.repos(action.query).pipe(
        map(res => setRepos({res: res})), catchError(err => {throw err})))
    )})

  commits$ = createEffect(() => {
    return this.actions$.pipe(ofType(getCommits),
      exhaustMap(action => this.ss.commits(action.query).pipe(
        map(res => setCommits({res: res})), catchError(err => {throw err})))
    )})

  users$ = createEffect(() => {
    return this.actions$.pipe(ofType(getUsers),
      exhaustMap(action => this.ss.users(action.query).pipe(
        map(res => setUsers({res: res})), catchError(err => {throw err})))
    )})

  issues$ = createEffect(() => {
    return this.actions$.pipe(ofType(getIssues),
      exhaustMap(action => this.ss.issues(action.query).pipe(
        map(res => setIssues({res: res})), catchError(err => {throw err})))
    )})

  constructor(private actions$: Actions, private store: Store, private ss: SearchService){
  }
}
