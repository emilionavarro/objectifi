import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { ItemService } from './shared/item.service'
import { map } from "rxjs/operators";

@Injectable()
export class ItemListResolver implements Resolve<any> {
    constructor(private itemService:ItemService) {

    }

    resolve() {
        return this.itemService.getItems().pipe(map(items => items))
    }
}