export class Constraint {

    node: string | null;
    device: string | null;
    public id: number | null;

    constructor(id?: number, node?: string, device?: string) {
        this.id = id ? id : null;
        this.node = node ? node : null;
        this.device = device ? device : null;
    }

    valid() {
        if (this.node && this.device)
            return true;
        return false;
    }

}
