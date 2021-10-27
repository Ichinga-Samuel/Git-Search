import {createAction, props} from "@ngrx/store";
import {UserResult, IssueResult, RepoResult, CommitResult} from '../services'

export const getCommits = createAction('Get Commits', props<{query: string}>())
export const getUsers = createAction('Get Users', props<{query: string}>())
export const getRepos = createAction('Get Repos', props<{query: string}>())
export const getIssues = createAction('Get Issues', props<{query: string}>())
export const setCommits = createAction('Set Commits', props<{res: CommitResult}>())
export const setUsers = createAction('Set Users', props<{res: UserResult}>())
export const setRepos = createAction('Set Repos', props<{res: RepoResult}>())
export const setIssues = createAction('Set Issues', props<{res: IssueResult}>())
export const reset = createAction('Reset')
