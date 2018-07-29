import { IItem } from "./item.model";

export class ListItem implements IItem{
    id: number;
    name: string;
    type: string;
    items: any[];
    selected: boolean;
    constructor() {  
        this.name = "";
        this.selected = false;
    }
  
  }