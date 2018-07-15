import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'larp-event-form-dialog',
    templateUrl: './event-form-dialog.component.html',
    styleUrls: ['./event-form-dialog.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventFormDialogComponent implements OnInit {

    public event = {types: [
        { name: 'test1', slug: 'slug1' },
        { name: 'test2', slug: 'slug2' },
        { name: 'test3', slug: 'slug3' }
    ]};
    public eventFormGroup: FormGroup;

    constructor(
        private fb: FormBuilder
    ) { }

    ngOnInit() {
        this.eventFormGroup = this.fb.group({
            'eventName': ['', Validators.required],
            'eventType': ['', Validators.required]
        });

        console.log('this.eventFormGroup => ', this.eventFormGroup);
    }

}
