import { Component, OnInit, Input } from '@angular/core';
import { IItem, IItemList } from '../shared/index';

@Component({
    selector: 'historical-list',
    templateUrl: 'historical-list.component.html'
})
export class HistoricalListComponent implements OnInit {
    addMode: boolean;
    @Input() item: IItemList;

    ngOnInit() {
        this.addMode = false;
    }

    enterAddMode() {
        this.addMode = true;

        if (!this.item.items) {
            this.item.items = [] as IItem[];
        }
    }

    saveItems(formValues) {
        //service.saveItems(items

        this.item.items.push(formValues);
        this.addMode = false;
    }

}