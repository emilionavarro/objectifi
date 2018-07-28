import { IItem } from "./item.model";

export class ListItem implements IItem{
    id: number;
    name: string;
    type: string;
    items: any[];
    constructor() {  
        this.name = "";
    }
  
  }