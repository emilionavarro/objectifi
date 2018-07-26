import { Component, OnInit, Input } from '@angular/core';
import { IItem, IItemList, ListItem } from '../shared/index';

@Component({
    selector: 'historical-list',
    templateUrl: 'historical-list.component.html'
})
export class HistoricalListComponent implements OnInit {
    newItem;
    @Input() item: IItemList;

    ngOnInit() {
        this.newItem = new ListItem();

        this.newItem.nam
    }

    enterAddMode() {
        if (!this.item.items) {
            this.item.items = [] as IItem[];
        }
    }

    saveItems() {
        //service.saveItems(items
        this.item.items.push(this.newItem);
        this.newItem = new ListItem();
    }

}