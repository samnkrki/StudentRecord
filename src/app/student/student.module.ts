import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateRecordComponent } from './create-record/create-record.component';
import { ListRecordComponent } from './list-record/list-record.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CreateRecordComponent, ListRecordComponent, ProfileComponent]
})
export class StudentModule { }
