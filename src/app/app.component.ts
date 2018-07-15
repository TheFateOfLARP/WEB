import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material';
import { EventFormDialogComponent } from './components';

@Component({
    selector: 'larp-root',
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
        const dialogRef = this.dialog.open(EventFormDialogComponent);
        dialogRef.afterClosed().subscribe(result => console.log('result => ', result));
    }
}
