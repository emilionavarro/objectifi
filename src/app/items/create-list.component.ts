import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { ItemService } from './shared/item.service';

@Component({
    templateUrl: "create-list.component.html"
})
export class CreateListComponent {
    newList
    isDirty:boolean = true;
    constructor(private router: Router, private itemService: ItemService) {

    } 

    saveList(formValues) {
        formValues.containerType = 'historical'; // All lists in objectifi will be historical, however the type will
        formValues.items = [];

        this.itemService.saveList(formValues);
        this.isDirty = false;
        this.router.navigate(['/items']);
    }

    cancel() {
        this.router.navigate(['/items']);
    }
}