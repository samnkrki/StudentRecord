import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AuthGuard } from './auth/services/guard.service';
import { UsersListComponent } from './auth/users-list/users-list.component';
import { HomeComponent } from './home/home.component';
import { RoleGuardService } from './auth/services/role-guard.service';


const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    {
        path: 'users', component: UsersListComponent, canActivate: [RoleGuardService], data: {
            expectedRole: 2
        }
    },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: '', component: HomeComponent },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }