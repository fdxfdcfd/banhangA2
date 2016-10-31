export class CateProduct{
    id: number;
    name: string;
    sex: number;
    detail: string;
    created:number;
    updated:number;
    status: number;
    constructor(id, name, sex, detail, created, updated, status){
        this.id = id;
        this.name = name;
        this.detail = detail;
        this.created = created;
        this.updated = updated;
        this.sex = sex;
        this.status = status;
    }
}