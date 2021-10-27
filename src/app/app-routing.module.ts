import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import  { HomeComponent } from "./home/home.component";
import { SearchResultsComponent } from "./search-results/search-results.component";


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'search', component: SearchResultsComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
