import { Component, OnInit, Input } from '@angular/core';
import { MatCardModule } from "@angular/material/card";

import {Issue} from "../services";

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css']
})
export class IssuesComponent implements OnInit {
  @Input() issue: Issue | undefined
  constructor() { }

  ngOnInit(): void {

  }

}
