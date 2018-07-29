export class Item {
    name: string;
    fields: any[];
    selected: boolean;

    constructor() {
        this.name = "";
        this.fields = [];
        this.selected = false;
    }
}