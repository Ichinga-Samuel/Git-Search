import { Component, OnInit, Input } from '@angular/core';
import {Commit} from "../services";
import {MatCardModule} from '@angular/material/card';
import {MatAccordion} from '@angular/material/expansion';

@Component({
  selector: 'app-commit',
  templateUrl: './commit.component.html',
  styleUrls: ['./commit.component.css']
})
export class CommitComponent implements OnInit {
  @Input() commit: Commit | undefined
  constructor() { }

  ngOnInit(): void {

  }

}
