import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';

@Component({
    selector: 'larp-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavComponent {
    isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);
    constructor(private breakpointObserver: BreakpointObserver) { }
}
