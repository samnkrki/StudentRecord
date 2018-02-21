import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateRecordComponent } from './create-record/create-record.component';
import { ListRecordComponent } from './list-record/list-record.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StudentRoutingModule } from './student.route.module'
import { StudentService } from './services/student.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        StudentRoutingModule,
        MaterialModule,
        FlexLayoutModule
    ],
    declarations: [CreateRecordComponent, ListRecordComponent, ProfileComponent],
    providers: [StudentService]
})
export class StudentModule { }
