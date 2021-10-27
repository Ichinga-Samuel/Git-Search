import { Component, OnInit, Input } from '@angular/core';
import {Repo} from "../services";
import { MatCardModule } from "@angular/material/card";

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {
  @Input() repo: Repo | undefined
  constructor() { }
  ngOnInit(): void {

  }

}
