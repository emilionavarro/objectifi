import { IItem } from './item.model';
import { ListItem } from './list-item.model';

export interface IItemList {
    id: number;
    name: string;
    items: ListItem[];
}