export class Comment{
    id: number;
    content: string;
    email: string;
    username: string;
    product_id: number;
    created:number;
    updated:number;
    status: number;
    constructor(id, content, email, username, product_id, created, updated, status){
        this.id = id;
        this.content = content;
        this.email = email;
        this.username = username;
        this.product_id = product_id;
        this.created = created;
        this.updated = updated;
        this.status = status;
    }
}