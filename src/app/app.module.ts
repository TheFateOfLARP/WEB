import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';

import { LarpRoutingModule } from './larp-routing.module';
import { MatDesignModule } from './mat-design.module';

import { AppComponent } from './app.component';
import { EventCardComponent, EventFormDialogComponent } from './components/';
import { EventListComponent } from './views/';
import { ShortTextPipe } from './pipes/';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        AppComponent,
        EventCardComponent,
        EventListComponent,
        EventFormDialogComponent,
        ShortTextPipe
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        LayoutModule,
        LarpRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatDesignModule
    ],
    entryComponents: [
        EventFormDialogComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
