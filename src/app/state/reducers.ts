import {Commit, Repo, Issue, User, UserResult, IssueResult, RepoResult, CommitResult} from '../services'
import {setIssues, setCommits, setRepos, setUsers, reset} from "./actions";
import {createReducer, Action, on} from "@ngrx/store";

export interface SearchState {
  count: number,
  commits: CommitResult
  users: UserResult | null
  issues: IssueResult | null
  repos: RepoResult | null
}

export const InitialState: SearchState = {
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

export const SearchReducer = createReducer(
  InitialState,
  on(setUsers, (state, {res}) => ({...state, users: res, count: state.count + res.count})),
  on(setIssues, (state, {res}) => ({...state, issues: res, count: state.count + res.count})),
  on(setCommits, (state, {res}) => ({...state, commits: res, count: state.count + res.count})),
  on(setRepos, (state, {res}) => ({...state, repos: res, count: state.count + res.count})),
  on(reset, (state) => InitialState)
)

export function reducer(state: SearchState |undefined, action: Action){return SearchReducer(state, action)}
