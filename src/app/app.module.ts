import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { EventInfoComponent } from './components/event-info/event-info.component';
import { ModelInterceptor } from './services/model-interceptor';


@NgModule({
    declarations: [
        AppComponent,
        EventCardComponent,
        EventListComponent,
        EventFormDialogComponent,
        ShortTextPipe,
        EventInfoComponent
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
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ModelInterceptor,
            multi: true
        }
    ],
    entryComponents: [
        EventFormDialogComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
