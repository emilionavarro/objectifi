import { Component, OnInit, Input } from '@angular/core';
import { ItemService, Item } from '../shared/index';
import { ItemContainer } from '../../container/item-container.model';
import { FieldDialogComponent } from '../../field/field-dialog.component';
import { MatDialog } from '../../../../node_modules/@angular/material';

@Component({
    selector: 'historical-list',
    templateUrl: 'historical-list.component.html'
})
export class HistoricalListComponent implements OnInit {
    newItem: Item;
    selectedItem: Item;
    addModeIndex: number;
    @Input() container: ItemContainer;

    constructor(private itemService: ItemService, public dialog: MatDialog) {
    }

    ngOnInit() {
        this.newItem = new Item();
        this.addModeIndex = -1;
    }

    enterAddMode(index: number) {
        this.addModeIndex = index;
    }

    exitAddMode() {
        this.addModeIndex = -1;
    }

    selectItem(item: Item) {
        this.deselectItems();
        this.selectedItem = item;
        this.selectedItem.selected = true;
    }

    deselectItems() {
        for (var i = 0, len = this.container.items.length; i < len; i++) {
            this.container.items[i].selected = false;
        }

        this.selectedItem = null;
    }

    saveItems() {
        //service.saveItems(items

        if (this.newItem.name !== '') {
            this.container.items.push(this.newItem);
            this.newItem = new Item();
        }

    }

    saveList() {
        //service.saveList()
        //Should be a better way to do this. Find the edited item via the 'selected' field
        //then checks if the name is empty or not before saving. i is effectively the same as item.id. 
        var i = 0;
        for(i; i < this.container.items.length; i++){
        if (this.container.items[i].selected ===true){
            i = i;
            break;
        }
    }
    if (this.container.items[i].name !==''){
        this.itemService.updateList(this.container);
        this.exitAddMode();
    }


    }

    trackByIndex(index: number, obj: any): any {
        return index;
    }

    deleteItem(index: number) {
        this.deselectItems();
        this.container.items.splice(index, 1);

        if (this.addModeIndex >= 0) {
            this.exitAddMode();
        }
        //service.saveList()
    }

    addNewField() {
        this.openNewFieldDialog();
    }

    openNewFieldDialog() {
        let dialogRef = this.dialog.open(FieldDialogComponent, {
            data: {}
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.selectedItem.fields.push(result);
            }
        });
    }
}