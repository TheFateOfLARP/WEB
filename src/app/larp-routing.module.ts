import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { EventListComponent } from './views';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: EventListComponent, pathMatch: 'full'},
    {
        path: 'event', children: [
            { path: 'add', component: AppComponent },
            { path: ':id', component: AppComponent }
        ]
    },
    { path: 'logout', component: AppComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class LarpRoutingModule { }
