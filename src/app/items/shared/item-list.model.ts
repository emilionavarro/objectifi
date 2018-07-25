import { IItem } from './item.model';

export interface IItemList {
    id: number;
    name: string;
    items: IItem[];
}