import { IItem } from "./item.model";

export class ListItem implements IItem{
    id: number;
    name: string;
    constructor() {  
        this.name = "";
    }
  
  }