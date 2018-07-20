import { Component, OnInit, Input } from "@angular/core";
import { IItem } from './shared/index';
import { ItemService } from './shared/item.service';
import { componentFactoryName } from "@angular/compiler";

@Component({
    selector: 'list-item',
    template: `
        <a href="#" class="card">
            <div class="card-body">
                {{item.name}}
            </div>
        </a>
    `
})
export class ItemComponent {
    @Input() item: IItem;
}   