import { Component, OnInit } from "@angular/core";
import { IItem } from './shared/index';
import { ItemService } from './shared/item.service';
import { Params, ActivatedRoute } from '@angular/router'

@Component({
    templateUrl: './item-details.component.html'
})
export class ItemDetailsComponent implements OnInit {
    item: IItem;

    constructor(private itemService: ItemService, private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            this.item = this.itemService.getItem(+params['id']);
        })
    }
}