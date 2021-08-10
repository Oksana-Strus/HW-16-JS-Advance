import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CenzorComponent } from './cenzor/cenzor.component';
import { HeaderComponent } from './header/header.component';
import { MainPageComponent } from './main-page/main-page.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { UserlistComponent } from './userlist/userlist.component';
import { AngularTaskListComponent } from './task/angular-task-list/angular-task-list.component';
import { TaskComponent } from './task/task.component';

@NgModule({
  declarations: [
    AppComponent,
    CenzorComponent,
    HeaderComponent,
    MainPageComponent,
    HeaderMenuComponent,
    UserlistComponent,
    AngularTaskListComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
