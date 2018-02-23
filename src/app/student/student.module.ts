import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateRecordComponent } from './create-record/create-record.component';
import { ListRecordComponent } from './list-record/list-record.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StudentRoutingModule } from './student.route.module'
import { StudentService } from './services/student.service';
import { FileUploadModule} from 'ng2-file-upload'

@NgModule({
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpModule,
        StudentRoutingModule,
        MaterialModule,
        FlexLayoutModule,
        StudentRoutingModule,
        FileUploadModule,
    ],
    declarations: [CreateRecordComponent, ListRecordComponent, ProfileComponent],
    providers: [StudentService, ]
})
export class StudentModule { }
