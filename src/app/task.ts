export class Task {
    name: string;
    addedOn: string;
    dueOn: string;
    description: string;
    subTasks: Task[];

    constructor(name: string, description: string, dueOn?: string, subTasks?: Task[]) {
        this.name = name;
        this.description = description; 
        this.dueOn = dueOn || Date.now().toString();
        this.subTasks = subTasks || [];
    }
}
