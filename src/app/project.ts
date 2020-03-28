import { Constraint } from './constraint';

export class Project {

    name: string;
    application: string;
    id: string;

    verilog: string;
    settings: {
        application: string,
        applications: Map<string, any>
    };
    constraints: {
        input: Constraint[],
        output: Constraint[]
    };
    library: object;

    results: object[];

    constructor() {
        this.verilog = '';
        this.application = 'DNACompiler';
        this.results = [];
        this.constraints = { input: [], output: [] };
    }

}
