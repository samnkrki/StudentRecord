import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UsersListComponent } from './users-list/users-list.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '../shared/material.module';
import { UserDialogComponent } from './user-dialog/user-dialog.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        MaterialModule,
        FlexLayoutModule,
    ],
    declarations: [LoginComponent, RegisterComponent, UsersListComponent, UserDialogComponent],
    entryComponents: [
        UserDialogComponent
    ],
})
export class AuthModule { }
