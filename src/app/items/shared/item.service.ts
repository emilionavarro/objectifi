import { Injectable, EventEmitter } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { IItem } from './item.model'

@Injectable()
export class ItemService {
    getItems():Observable<IItem[]> {
        let subject = new Subject<IItem[]>()
        setTimeout(() => {subject.next(ITEMS); subject.complete(); }, 100)
        return subject
      }
    
      getItem(id: number) {
        return ITEMS.find(item => item.id === id)
      }
}


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