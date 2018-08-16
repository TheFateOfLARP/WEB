export class User {
    public id: number;
    public userName: string;

    constructor(
        data?: User
    ) {
        this.id = data['id'];
        this.userName = data['username'];
    }
}
