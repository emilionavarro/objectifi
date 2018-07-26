import { Component, OnInit, Input } from '@angular/core';
import { IItem, IItemList, ListItem, ItemService } from '../shared/index';

@Component({
    selector: 'historical-list',
    templateUrl: 'historical-list.component.html'
})
export class HistoricalListComponent implements OnInit {
    newItem: ListItem;
    addMode: boolean;
    @Input() item: IItemList;

    constructor(private itemService: ItemService) {
    }

    ngOnInit() {
        this.newItem = new ListItem();
        this.addMode = false;
    }

    toggleAddMode() {
        this.addMode = !this.addMode;
    }

    saveItems() {
        //service.saveItems(items
        this.item.items.push(this.newItem);
        this.newItem = new ListItem();
    }

    saveList() {
        //service.saveList()
        this.itemService.updateList(this.item);
        this.toggleAddMode();
    }

    trackByIndex(index: number, obj: any): any {
        return index;
    }

}