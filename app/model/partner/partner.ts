export class Partner{
    id:number;
    name:string;
    img:string;
    detail:string;
    created:number;
    updated:number;
    status: number;
    constructor(id, name, img, detail, created, updated, status){
        this.id = id;
        this.name = name;
        this.img = img;
        this.detail = detail;
        this.created = created;
        this.updated = updated;
        this.status = status;
    }
}