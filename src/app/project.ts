import { Constraint } from './constraint';

export class Project {

    name: string;
    application: string;
    id: string;

    verilog: string;
    settings: {
        application: string,
        algorithms: object,
        parameters: object
    };
    constraints: {
        input: Constraint[],
        output: Constraint[]
    };
    library: object;

    results: object;

    constructor() {
        this.verilog = '';
        this.application = 'DNACompiler';
        this.results = {};
        this.settings = { application: '', algorithms: {}, parameters: {} };
        this.constraints = { input: [], output: [] };
    }

}
