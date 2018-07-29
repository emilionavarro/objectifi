import { Component, OnInit, Input } from '@angular/core';
import { Field } from './field.model';
import { MatDialogRef } from '@angular/material';

@Component({
    template: `
    <ol>
        <li>
            <mat-form-field>
                <input matInput [(ngModel)]="field.fieldName" placeholder="Field Name?">
            </mat-form-field>
        </li>
        <li>
            <mat-form-field>
                <input matInput [(ngModel)]="field.value" placeholder="Value?">
            </mat-form-field>
        </li>
    </ol>

    <div mat-dialog-actions>
        <button mat-button (click)="close()">Cancel</button>
        <button mat-button [mat-dialog-close]="field" cdkFocusInitial>Ok</button>
    </div>
    `,
})
export class FieldDialogComponent implements OnInit {
    field: Field;
    
    constructor(public dialogRef: MatDialogRef<FieldDialogComponent>) {

    }

    ngOnInit() {
        this.field = new Field();
    }

    close() {
        this.dialogRef.close();
    }


}