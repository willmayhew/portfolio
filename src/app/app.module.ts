import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { GithubStatsComponent } from './pages/github-stats/github-stats.component';
import { DecimalPipe } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { UserStatsComponent } from './pages/user-stats/user-stats.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExperienceComponent } from './pages/experience/experience.component';
import { NgxTimelineModule } from '@frxjs/ngx-timeline';

@NgModule({ declarations: [
        AppComponent,
        HomeComponent,
        GithubStatsComponent,
        HeaderComponent,
        UserStatsComponent,
        ExperienceComponent,
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        DecimalPipe,
        BrowserAnimationsModule,
        NgxTimelineModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
