import { Component, OnInit, Input } from '@angular/core';
import { IItem } from '../shared/index';

@Component({
    selector: 'todo-list',
    template: `
        <ul class="list-group">
            <li *ngFor="let subItem of item.items" class="list-group-item">
                {{subItem.name}}
            </li>
        </ul>
    `
})
export class TodoListComponent implements OnInit {
    @Input() item: IItem;

    ngOnInit() {

    }
}