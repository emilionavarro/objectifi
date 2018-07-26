import { Injectable, EventEmitter } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { IItem } from './item.model'

@Injectable({
    providedIn: 'root'
})
export class ItemService {
    getItems(): Observable<IItem[]> {
        let subject = new Subject<IItem[]>()
        setTimeout(() => { subject.next(ITEMS); subject.complete(); }, 100)
        return subject
    }

    getItem(id: number) {
        return ITEMS.find(item => item.id === id)
    }

    saveList(list) {
        list.id = ITEMS.length;
        ITEMS.push(list);
    }

    updateList(list) {
        let index: number = -1;

        for (var i = 0, len = ITEMS.length; i < len; i++) {
            if (list.name === ITEMS[i].name) {
                index = i;
            }
        }

        if (index > 0) {
            ITEMS[index] = list;
        }
    }
}

/* 
 * FieldsTypes:
 *      String
 *      Int
 *      Float
 *      {Object}
 *      Boolean
 *      Date
 *      Time
 */
/*
 * Object Field Properies:
 *      DisplayName - String
 *      FieldType - FieldTypes
 *      NotChangeableOnEdit - boolean
 *      TextHidden - boolean
 *      EditRule(s) - JS function list(?)
 */

/* 
 * Example Type of Item:
 *     Consumer
 *         {
 *             DisplayName: 'Name',
 *             FieldType: string,
 *             NotChangeableOnEdit: true,
 *             TextHidden: false,
 *             EditRules: function(value) { return value !== null ? true : false };
 *         },
 *         {
 *             DisplayName: 'Quantity',
 *             FieldType: int,
 *             NotChangeableOnEdit: false,
 *             TextHidden: false,
 *             EditRules: function(value) { return value > 0 ? true : false };
 *         },
 *         {
 *             DisplayName: 'Price',
 *             FieldType: Float,
 *             NotChangeableOnEdit: false,
 *             TextHidden: false,
 *             EditRules: function(value) { return value > 0 ? true : false };
 *         }
 *     See below in Items for an example of what would be saved in the DB.
 */

const ITEMS = [
    {
        id: 0,
        name: 'Shopping List',
        type: "consumer",
        items: [
            {
                name: "banana",
                quantity: 5,
                price: null
            },
            {
                name: "apple",
                quantity: 1,
                price: 5.12
            }
        ]
    },
    {
        id: 1,
        name: 'todo',
        type: 'todo',
        items: [
            {
                name: "talk to mert",
                createdOn: Date.now(),
                dueDate: Date.now(),
                completedDate: null,
                description: "do it",
                subItems: []
            }
        ]
    },
    {
        id: 2,
        name: 'my pc parts',
        type: 'historical',
        items: [
            {
                name: "cpu",
                date: Date.now(),
                textHidden: false,
                customFields: [
                    {
                        price: 500.12
                    }
                ]

            }
        ]
    },
    {
        id: 3,
        name: 'invalid list',
        type: 'invalid',
        items: [
            {
                name: 'invalid item'
            }
        ]
    }
];