import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EventFormDialogComponent, EventListComponent } from './components';
import { EventInfoComponent } from './components/event-info/event-info.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    // { path: 'add', outlet: 'popup', pathMatch: 'full' },
    { path: 'home', component: EventListComponent, pathMatch: 'full' },
    { path: 'card', pathMatch: 'prefix', children: [
        { path: ':id', pathMatch: 'prefix', component: EventInfoComponent, children: [
            { path: 'edit', component: EventFormDialogComponent, pathMatch: 'full' }
        ] }
    ] },
    { path: 'logout', component: AppComponent }
];
