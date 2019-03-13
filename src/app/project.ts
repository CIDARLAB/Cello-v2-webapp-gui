export class Project {

    name: string;
    application: string;
    id: string;

    verilog: string;
    settings = {
        application: '',
        algorithms: {},
        parameters: {}
    };
    constraints: object;
    library: object;

    results: object;

    constructor() {
        this.verilog = '';
        this.application = 'DNACompiler';
        this.results = {};
    }

}
