export class Order{
    id: number;
    user_id: number;
    created:number;
    updated:number;
    status: number;
    constructor(id, user_id, created, updated, status){
        this.id = id;
        this.user_id = user_id;
        this.created = created;
        this.updated = updated;
        this.status = status;
    }
}