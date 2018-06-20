import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EventListComponent } from './views';
import { EventResolver } from './services/event.resolver';
import { EventFormDialogComponent } from './components';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    // { path: 'add', outlet: 'popup', pathMatch: 'full' },
    { path: 'home', component: EventListComponent/*, resolve: { events: EventResolver }*/, pathMatch: 'full' },
    { path: 'event', pathMatch: 'prefix', children: [
        { path: '', children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: ':id', pathMatch: 'prefix', children: [
                { path: 'edit', component: EventFormDialogComponent, pathMatch: 'full' }
            ] },
        ] }
    ] },
    { path: 'logout', component: AppComponent }
];
