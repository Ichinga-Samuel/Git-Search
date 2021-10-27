import { Component, OnInit, Input } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {User} from "../services";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  @Input() user: User | undefined
  constructor() { }

  ngOnInit(): void {
  }

}
