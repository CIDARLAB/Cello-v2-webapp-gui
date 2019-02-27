export class Project {

    name: string;
    application: string;
    id: string;

    verilog: string;
    settings: object;
    constraints: object;
    library: object;

    results: {};

    constructor() {
        this.verilog = '';
    }

}
