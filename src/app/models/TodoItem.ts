export class TodoItem {
    id: string;
    title: string;
    body: string;
    isDone: boolean;

    constructor(
        id: string,
        title: string,
        body: string,
        isDone = false
    ) {
        this.id = id;
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