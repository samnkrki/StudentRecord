import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateRecordComponent } from './create-record/create-record.component';
import { ListRecordComponent } from './list-record/list-record.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from '../auth/services/guard.service';

const routes: Routes = [
    { path: 'create', component: CreateRecordComponent, canActivate: [AuthGuard] },
    { path: 'list', component: ListRecordComponent, canActivate: [AuthGuard] },
    { path: 'profile/:id', component: ProfileComponent, canActivate: [AuthGuard] },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StudentRoutingModule { }