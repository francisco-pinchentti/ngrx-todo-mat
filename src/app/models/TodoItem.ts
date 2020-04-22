import { v4 as uuidv4 } from 'uuid';

export class TodoItem {
    id: string;
    title: string;
    body: string;
    isDone: boolean;

    constructor(title: string, body: string, isDone = false, id?: string) {
        this.id = id || uuidv4();
        this.title = title;
        this.body = body;
        this.isDone = isDone;
    }

    markAsDone(): void {
        this.isDone = true;
    }

    markAsPending(): void {
        this.isDone = false;
    }
}
