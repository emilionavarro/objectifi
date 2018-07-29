import { Component, OnInit } from "@angular/core";
import { ItemService } from './shared/item.service';
import { Params, ActivatedRoute } from '@angular/router'
import { ItemContainer } from "../container/item-container.model";

@Component({
    templateUrl: './item-details.component.html'
})
export class ItemDetailsComponent implements OnInit {
    container: ItemContainer;

    constructor(private itemService: ItemService, private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            this.container = this.itemService.getItem(+params['id']);
        })
    }
}