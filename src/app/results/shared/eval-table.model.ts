/**
 * A truth table or activity table, e.g., built from a CSV.
 */
export class EvalTable {
  header: string[];
  table: (string | number)[][];

  /**
   * Instantiate a new {@link EvalTable}.
   * @param csv The CSV string that Cello returns.
   */
  constructor(csv: string) {
    this.header = [];
    this.table = [];
    for (let line of csv.split('\n')) {
      if (line === '') {
        continue;
      }
      let fields = line.split(',');
      this.header.push(fields[0]);
      for (let i = 1; i < fields.length; i++) {
        if (this.table.length < i) {
          this.table.push([]);
        }
        let num: string | number = 0;
        if (fields[i] === 'true') {
          num = 1;
        } else if (fields[i] === 'false') {
          num = 0;
        } else {
          num = Number(fields[i]).toExponential(2);
        }
        this.table[i - 1].push(num);
      }
    }
  }
}
