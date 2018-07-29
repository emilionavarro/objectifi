import { Injectable, EventEmitter } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { ItemContainer } from './../../container/item-container.model';

@Injectable({
    providedIn: 'root'
})
export class ItemService {
    getItems(): Observable<ItemContainer[]> {
        let subject = new Subject<ItemContainer[]>()
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
        // let index: number = -1;

        // for (var i = 0, len = ITEMS.length; i < len; i++) {
        //     if (list.name === ITEMS[i].name) {
        //         index = i;
        //     }
        // }

        // if (index > 0) {
        //     ITEMS[index] = list;
        // }
        //SHOULD THIS BE A COPY TO KEEP SAFE?

        //Call api to save changes to list
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
        name: "Computer Parts",
        description: "A container with item parts and their purchase dates",
        containerType: "historical",
        items: [
            {
                name: "cpu",
                fields: [
                    {
                        fieldName: "date",
                        value: "1/1/2018"
                    },
                    {
                        fieldName: "price",
                        value: 300
                    }
                ]
            },
            {
                name: "Ram",
                field: [
                    {
                        fieldName: "date",
                        value: "1/1/2018"
                    },
                    {
                        fieldName: "price",
                        value: 300
                    }
                ]
            }
        ]
    }
];