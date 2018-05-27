import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';

import { LarpRoutingModule } from './larp-routing.module';
import { MatDesignModule } from './mat-design.module';

import { AppComponent } from './app.component';
import { NavComponent, EventCardComponent } from './components/';
import { EventListComponent } from './views/';


@NgModule({
    declarations: [
        AppComponent,
        NavComponent,
        EventCardComponent,
        EventListComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        LayoutModule,
        LarpRoutingModule,
        HttpClientModule,
        MatDesignModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
