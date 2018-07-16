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
        name: 'item 1'
    }, 
    {
        id: 1,
        name: 'item 2'
    }
];