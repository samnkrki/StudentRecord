import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppRoutingModule} from './app.route.module'
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { AuthModule } from './auth/auth.module';
import { BaseService } from './shared/base.service';
import { AuthService } from './auth/services/auth.service';
import { AuthGuard } from './auth/services/guard.service';
import { MaterialModule } from './shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeComponent } from './home/home.component';


@NgModule({
    declarations: [
        AppComponent,
        NavComponent,
        FooterComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AuthModule,
        MaterialModule,
        FlexLayoutModule,

    ],
    providers: [BaseService,AuthService,AuthGuard],
    bootstrap: [AppComponent]
})
export class AppModule { }
