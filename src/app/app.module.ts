import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { LayoutModule } from '@angular/cdk/layout';

import { MatDesignModule } from './mat-design.module';
import { AppStoreModule } from './store/app-store.module';

import { AppComponent } from './app.component';
import { EventCardComponent, EventFormDialogComponent, EventListComponent } from './components/';
import { ShortTextPipe } from './utils/pipes/';
import { routes } from './app.routing';


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
        RouterModule.forRoot(routes),
        BrowserAnimationsModule,
        LayoutModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatDesignModule,
        AppStoreModule,
    ],
    entryComponents: [
        EventFormDialogComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
