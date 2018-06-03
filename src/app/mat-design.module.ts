import { NgModule } from '@angular/core';
import {
    MatCardModule,
    MatDialogModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule
} from '@angular/material';
import { MatMomentDateModule } from '@angular/material-moment-adapter';

@NgModule({
    imports: [
        MatCardModule,
        MatDatepickerModule,
        MatDialogModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatSelectModule,
        MatIconModule,
        MatInputModule,
        MatFormFieldModule,
        MatListModule,
        MatMomentDateModule
    ],
    exports: [
        MatCardModule,
        MatDatepickerModule,
        MatDialogModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatSelectModule,
        MatIconModule,
        MatInputModule,
        MatFormFieldModule,
        MatListModule,
        MatMomentDateModule
    ]
})
export class MatDesignModule { }
