import { Component, OnInit } from '@angular/core';
import { ProjectService } from '@app/project/project.service';
import { ApiService } from '@app/api/api.service';
import { HttpClient } from '@angular/common/http';
// @ts-ignore
import * as antlr4 from 'antlr4';
// @ts-ignore
import * as Verilog2001Parser from '@app/../assets/editor/parser/Verilog2001Parser.js';
// @ts-ignore
import * as Verilog2001Lexer from '@app/../assets/editor/parser/Verilog2001Lexer.js';

interface Ports {
  input: string[];
  output: string[];
}

@Component({
  selector: 'app-verilog',
  templateUrl: './verilog.component.html',
  styleUrls: ['./verilog.component.scss'],
})
export class VerilogComponent implements OnInit {
  ports: Ports = { input: [], output: [] };

  public sampleVerilog = [
    'and_gate.v',
    'xor_gate.v',
    'struct.v',
    'mixed.v',
    'sub_modules.v',
    '0x01_behavioral.v',
    '0x01.v',
    '0x6F.v',
    '0x78.v',
    'sr_latch.v',
  ];

  constructor(public projectService: ProjectService, private httpClient: HttpClient) {}

  ngOnInit(): void {}

  verilog(verilog: string) {
    this.projectService.project.verilog = verilog;
    this.ports = this.getPorts(verilog);
  }

  loadSample(event: any) {
    // console.log(event.detail.value);
    this.httpClient
      .get<string>('/assets/verilog/' + event.detail.value, { responseType: 'text' as 'json' })
      .subscribe((data) => {
        window['editor'].setValue(data, 1);
      });
  }

  /////////////////////
  // verilog parsing //
  /////////////////////

  private getPortDeclarations(portDeclarations: any) {
    let rtn: Ports = { input: [], output: [] };
    for (let portDeclaration of portDeclarations) {
      let inputDeclaration = portDeclaration.input_declaration();
      let outputDeclaration = portDeclaration.output_declaration();
      if (inputDeclaration) {
        let listOfPortIdentifiers = inputDeclaration.list_of_port_identifiers();
        rtn.input = rtn.input.concat(this.getPortIdentifiers(listOfPortIdentifiers));
      }
      if (outputDeclaration) {
        let listOfPortIdentifiers = outputDeclaration.list_of_port_identifiers();
        rtn.output = rtn.output.concat(this.getPortIdentifiers(listOfPortIdentifiers));
      }
    }
    return rtn;
  }

  private getPortIdentifiers(listOfPortIdentifierContext: any) {
    let rtn = [];
    let portIdentifiers = listOfPortIdentifierContext.port_identifier();
    for (let portIdentifier of portIdentifiers) {
      rtn.push(portIdentifier.getText());
    }
    return rtn;
  }

  private getPorts(verilog: string) {
    let rtn: Ports = { input: [], output: [] };
    let stream = new antlr4.InputStream(verilog);
    // let stream = new antlr4.InputStream(this.project.verilog);
    let lexer = new Verilog2001Lexer.Verilog2001Lexer(stream);
    let tokens = new antlr4.CommonTokenStream(lexer);
    let parser = new Verilog2001Parser.Verilog2001Parser(tokens);
    let tree = parser.source_text();
    let descriptions = tree.description();
    // FIXME assess heirarchy
    if (descriptions.length < 1) {
      return rtn;
    }
    let description = descriptions[descriptions.length - 1];
    // for (let description of descriptions) {
    let moduleDeclaration = description.module_declaration();
    let listOfPorts = moduleDeclaration.list_of_ports();
    let listOfPortDeclarations = moduleDeclaration.list_of_port_declarations();
    if (listOfPorts) {
      let moduleItems = moduleDeclaration.module_item();
      let portDeclarations = [];
      for (let moduleItem of moduleItems) {
        let portDeclaration = moduleItem.port_declaration();
        if (portDeclaration) {
          portDeclarations.push(portDeclaration);
        }
      }
      return this.getPortDeclarations(portDeclarations);
    }
    if (listOfPortDeclarations) {
      let portDeclarations = listOfPortDeclarations.port_declaration();
      return this.getPortDeclarations(portDeclarations);
    }
    return rtn;
  }
}
