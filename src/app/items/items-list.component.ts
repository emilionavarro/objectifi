import { Component, OnInit } from "@angular/core";
import { IItem } from './shared/index';
import { ItemService } from './shared/item.service';
import { ActivatedRoute } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';

@Component({
    templateUrl: './items-list.component.html'
})
export class ItemsListComponent implements OnInit {
    items:IItem[];

    constructor(private itemService: ItemService, private route:ActivatedRoute) {

    }

    ngOnInit() {
        this.items = this.route.snapshot.data['items']; //get from route data
    }
}