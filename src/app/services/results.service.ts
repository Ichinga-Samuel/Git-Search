
export class Commit {
  html_url: string;
  name: string;
  message: string;
  repo_url: string;
  commit_url: string;
  author: string;
  date: Date;
  constructor(obj: any) {
    this.name = obj.repository.full_name || null
    this.html_url = obj.html_url || null
    this.repo_url = obj.repository.html_url || null
    this.author = obj.commit.committer.name || null
    this.date = new Date(obj.commit.committer.date) || null
    this.message = obj.commit.message || null
    this.commit_url = `${obj.repository.html_url}/commits?author=${obj.commit.committer.name}`
  }
}

export interface CommitResult{
  count: number,
  results: Commit[]
}

export class User{
    name: string
    avatar: string
    url: string

    constructor(obj: any) {
      this.name = obj.login || null
      this.avatar = obj.avatar_url || null
      this.url = obj.html_url || null
    }
}

export interface UserResult{
  count: number,
  results: User[]
}

export class Repo{
  name: string
  description: string
  topics: string[]
  license: string
  language: string
  url: string
  stars: number
  date: Date

  constructor(obj: any) {
    this.name = obj.full_name || null
    this.description = obj.description || null
    this.url = obj.html_url || null
    this.language = obj.language || null
    this.stars = obj.stargazers_count || null
    this.license = obj.license?.name || null
    this.topics = obj.topics || []
    this.date = new Date(obj.updated_at)
  }
}

export interface RepoResult{
  count: number
  results: Repo[]
}


export class Issue{
  title: string;
  state: string
  date: Date
  url: string
  tag: string | null
  body: string
  issue_url: string
  constructor(obj: any) {
    this.title = obj.title || null
    this.state = obj.state || null
    this.date = new Date(obj.created_at) || null
    this.url = obj.html_url || null
    let a = obj.html_url.split('/') || null
    this.tag = `${a[3]}/${a[4]} #${a[a.length-1]}` || null
    this.issue_url = `https://github.com/${a[3]}/${a[4]}/issues`
    this.body = obj.body || null
  }
}

export interface IssueResult{
  count: number
  results: Issue[]
}
