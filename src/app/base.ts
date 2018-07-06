import { Todo } from 'src/app/todo';

export class Base {
    expenses: any;
    todo: Todo;

    constructor() {
        this.todo = new Todo();
        this.expenses = new Todo();

        this.sample();
    }

    sample() {
        this.todo.createTask('acr bug', 'fix acr bug');
        this.todo.createTask('drop zone bug', 'fix bug');
    }
}
