import { Injectable } from '@angular/core';
import {HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GitService implements HttpInterceptor{

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler){
    const re = req.clone({
      setHeaders: {accept: "application/vnd.github.v3+json"}
    })
    return next.handle(re)
  }
}
