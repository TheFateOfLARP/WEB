import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material';
import { EventFormDialogComponent } from './components';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);
    constructor(
        public dialog: MatDialog,
        private breakpointObserver: BreakpointObserver
    ) { }

    addDialog() {
        this.dialog.open(EventFormDialogComponent);
    }
}
