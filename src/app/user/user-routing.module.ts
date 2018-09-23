import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserEditComponent } from './user-edit/user-edit.component';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'userList',
        component: UserListComponent,
      },
      {
        path: 'userEdit',
        component : UserEditComponent
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
exports: [ RouterModule ]
})

export class UserRoutingModule { }
