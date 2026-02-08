import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { GithubStatsComponent } from './pages/github-stats/github-stats.component';
import { DecimalPipe } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { UserStatsComponent } from './pages/user-stats/user-stats.component';
import { ReactiveArrowComponent } from './components/reactive-arrow/reactive-arrow.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExperienceComponent } from './pages/experience/experience.component';
import { NgxTimelineModule } from '@frxjs/ngx-timeline';

@NgModule({ declarations: [
        AppComponent,
        HomeComponent,
        GithubStatsComponent,
        FooterComponent,
        UserStatsComponent,
        ReactiveArrowComponent,
        ExperienceComponent,
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        DecimalPipe,
        BrowserAnimationsModule,
        NgxTimelineModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
