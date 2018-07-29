import { Component, OnInit } from "@angular/core";
import { ItemService } from './shared/item.service';
import { ActivatedRoute } from '@angular/router';
import { ItemContainer } from "../container/item-container.model";

@Component({
    templateUrl: './items-list.component.html'
})
export class ItemsListComponent implements OnInit {
    containers:ItemContainer[];

    constructor(private itemService: ItemService, private route:ActivatedRoute) {

    }

    ngOnInit() {
        this.containers = this.route.snapshot.data['items']; //get from route data
    }
}