import { Component, OnInit, Input } from '@angular/core';
import { IItem, IItemList, ListItem, ItemService } from '../shared/index';

@Component({
    selector: 'historical-list',
    templateUrl: 'historical-list.component.html'
})
export class HistoricalListComponent implements OnInit {
    newItem: ListItem;
    addModeIndex: number;
    @Input() item: IItemList;

    constructor(private itemService: ItemService) {
    }

    ngOnInit() {
        this.newItem = new ListItem();
        this.addModeIndex = -1;
    }

    enterAddMode(index: number) {
        this.addModeIndex = index;
    }

    exitAddMode() {
        this.addModeIndex = -1;
    }

    saveItems() {
        //service.saveItems(items
        this.item.items.push(this.newItem);
        this.newItem = new ListItem();
    }

    saveList() {
        //service.saveList()
        this.itemService.updateList(this.item);
        this.exitAddMode();
    }

    trackByIndex(index: number, obj: any): any {
        return index;
    }

    deleteItem(index: number) {
        this.item.items.splice(index, 1);
        
        if (this.addModeIndex >= 0) {
            this.exitAddMode();
        }
        //service.saveList()
    }

}