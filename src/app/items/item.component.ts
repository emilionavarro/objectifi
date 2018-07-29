import { Component, Input } from "@angular/core";
import { ItemContainer } from "../container/item-container.model";

@Component({
    selector: 'list-item',
    template: `
        <a [routerLink]="['/item', container.id]" class="card">
            <div class="card-body">
                {{container.name}}
            </div>
        </a>
    `
})
export class ItemComponent {
    @Input() container: ItemContainer;
}   