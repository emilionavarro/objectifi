import { Component } from '@angular/core';
import { IItem } from './shared/index';
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
        this.itemService.saveList(formValues);
        this.isDirty = false;
        this.router.navigate(['/items']);
    }

    cancel() {
        this.router.navigate(['/items']);
    }
}