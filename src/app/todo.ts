import { Task } from 'src/app/task';

export class Todo {
    tasks: Task[];

    constructor() {
        this.tasks = [];
    }

    createTask(name: string, description: string, dueOn?: string, subTasks?: Task[]) {
        this.tasks.push(new Task(name, description, dueOn, subTasks));
    }
}
