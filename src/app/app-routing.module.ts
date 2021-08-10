import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CenzorComponent } from './cenzor/cenzor.component';
import { HeaderComponent } from './header/header.component';
import { MainPageComponent } from './main-page/main-page.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { UserlistComponent } from './userlist/userlist.component';
import { AngularTaskListComponent } from './task/angular-task-list/angular-task-list.component';
import { TaskComponent } from './task/task.component';


const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'task', component: TaskComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'cenzor', component: CenzorComponent },
  { path: 'menu', component: HeaderMenuComponent },
  { path: 'users', component: UserlistComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
