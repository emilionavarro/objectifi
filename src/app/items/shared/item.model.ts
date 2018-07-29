import { Field } from "../../field/field.model";

export class Item {
    name: string;
    fields: Field[];
    selected: boolean;

    constructor() {
        this.name = "";
        this.fields = [];
        this.selected = false;
    }
}