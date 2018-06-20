import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { environment } from '../environments/environment';
import { routes } from './app.routing';
import { MatDesignModule } from './mat-design.module';

import { AppComponent } from './app.component';
import { EventCardComponent, EventFormDialogComponent } from './components/';
import { EventListComponent } from './views/';
import { ShortTextPipe } from './pipes/';
import { reducers, metaReducers } from './reducers';
import { EventEffects } from './effects/event.effects';

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
        StoreModule.forRoot(reducers, { metaReducers, ...routerReducer }),
        !environment.production ? StoreDevtoolsModule.instrument({maxAge: 25}) : [],
        StoreRouterConnectingModule.forRoot({stateKey: 'router'}),
        RouterModule.forRoot(routes),
        EffectsModule.forRoot([EventEffects]),
        BrowserAnimationsModule,
        LayoutModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatDesignModule,
    ],
    entryComponents: [
        EventFormDialogComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
