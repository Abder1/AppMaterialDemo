import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './component/toolbar.component';
import { MainContentComponent } from './component/main-content.component';
import { SidenavComponent } from './component/sidenav.component';
import { MaterialModule } from '../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ContactmanagerAppComponent } from './component/contactmanager-app.component';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: '',  component: ContactmanagerAppComponent,
    children: [
      { path: ':id', component: MainContentComponent },
      { path: '', component: MainContentComponent }
    ]},
  { path: '**', redirectTo: 'contactmanager'}
]

@NgModule({
  declarations: [
    ToolbarComponent,
    MainContentComponent,
    SidenavComponent,
    ContactmanagerAppComponent
  ],
  providers: [
    UserService
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class ContactmanagerModule { }
