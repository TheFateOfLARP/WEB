import { NgModule } from '@angular/core';
import { EntityMetadataMap, NgrxDataModule, DefaultDataServiceConfig } from 'ngrx-data';

export const entityMetadata: EntityMetadataMap = {
    Event: {},
    User: {}
};

export const defaultDataServiceConfig: DefaultDataServiceConfig = {
    root: ''
};

@NgModule({
    imports: [
        NgrxDataModule.forRoot({ entityMetadata })
    ],
    declarations: [],
    providers: [{
        provide: DefaultDataServiceConfig,
        useValue: defaultDataServiceConfig
    }]
})
export class EntityStoreModule { }
