import { IDescriber } from "../interfaces/describer.interface";

export class ItemContainer implements IDescriber {
    id: number;
    name: string;
    description: string;
    containerType: string;
    items: any[];
}