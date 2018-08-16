import { NgModule } from '@angular/core';
import { EntityStoreModule } from './/entity-store.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';

import { environment } from '../../environments/environment';

@NgModule({
    imports: [
        StoreModule.forRoot({ ...routerReducer }),
        !environment.production ? StoreDevtoolsModule.instrument({maxAge: 25}) : [],
        StoreRouterConnectingModule.forRoot({stateKey: 'router'}),
        EffectsModule.forRoot([]),
        EntityStoreModule
    ]
})
export class AppStoreModule { }
