import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule} from '@ngrx/store';
import { HttpClientModule} from "@angular/common/http";
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';

import {SearchEffects, reducer} from "./state";
import { CommitComponent } from './commit/commit.component';
import {MatCardModule} from "@angular/material/card";
import {MatExpansionModule} from "@angular/material/expansion";
import { UsersComponent } from './users/users.component';
import { RepoComponent } from './repo/repo.component';
import {MatChipsModule} from "@angular/material/chips";
import { IssuesComponent } from './issues/issues.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatCheckboxModule} from "@angular/material/checkbox";
import { SearchResultsComponent } from './search-results/search-results.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CommitComponent,
    UsersComponent,
    RepoComponent,
    IssuesComponent,
    SearchResultsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({search: reducer}),
    EffectsModule.forRoot([SearchEffects]),
    BrowserAnimationsModule,
    AppRoutingModule,
    MatCardModule,
    MatExpansionModule,
    MatChipsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    FormsModule
  ],
  providers: [{provide: "API_URL", useValue: "https://api.github.com/search"}],
  bootstrap: [AppComponent]
})
export class AppModule { }
