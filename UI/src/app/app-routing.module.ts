import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WordsComponent } from './words/words.component';
import { WordDetailComponent } from './word-detail/word-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:name', component : WordDetailComponent },
  { path: 'dashboard', component : DashboardComponent },
  { path: 'words', component : WordsComponent }

];

@NgModule(
  {
    imports: [RouterModule.forRoot(routes)],
    exports : [ RouterModule ]
  }
)

export class AppRoutingModule {}
