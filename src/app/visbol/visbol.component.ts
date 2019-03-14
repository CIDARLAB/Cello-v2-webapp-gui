import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as SBOLDocument from 'sboljs';
import { SynBioHubService } from '../synbiohub.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

const NS_CELLO = "cellocad.org/Terms/cello#n";

@Component({
    selector: 'app-visbol',
    templateUrl: './visbol.component.html',
    styleUrls: ['./visbol.component.scss'],
})
export class ViSbolComponent implements OnInit {

    // @ViewChild('view')
    // private view: ElementRef;

    public items: SafeHtml[];

    @Input()
    public collection: string | null = null;

    private sbol: string | null = null;

    constructor(
        private http: HttpClient,
        private synbiohub: SynBioHubService,
        private sanitizer: DomSanitizer,
    ) {
        this.items = [];
        this.collection = "https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/Eco1C1G1T1_collection/1";
    }

    ngOnInit() {
        this.populate();
    }

    private roots(document: SBOLDocument) {
        let cds: SBOLDocument.ComponentDefinition[] = document.componentDefinitions;
        let roots: Set<SBOLDocument.ComponentDefinition> = new Set();
        let visited: SBOLDocument.ComponentDefinition[] = [];
        while (cds.length > 0) {
            let cd = cds.pop();
            if (visited.includes(cd))
                continue;
            visited.push(cd);
            roots.add(cd);
            for (let c of cd.components) {
                let def: SBOLDocument.Component = c.definition;
                visited.push(def);
                if (roots.has(def)) {
                    roots.delete(def);
                }
            }
        }
        return roots;
    }

    foo() {
        return '<p>foo</p>';
    }

    populate() {
        this.synbiohub.sbol(this.collection).subscribe((result) => {
            SBOLDocument.loadRDF(result, (error, document) => {
                const roots: Set<SBOLDocument.ComponentDefinition> = this.roots(document);
                roots.forEach((cd) => {
                    for (let a of cd.annotations) {
                        if (a.name.includes(NS_CELLO)) {
                            this.items.push(this.sanitizer.bypassSecurityTrustResourceUrl(cd.uri + '/visualization'));

                            // this.synbiohub.visualization(cd.uri).subscribe((data) => {
                            //     let rebase = data.replace(/((src|href) ?= ?")\//g, '$1https:\/\/synbiohub.programmingbiology.org\/');
                            //     let trust = this.sanitizer.bypassSecurityTrustHtml(rebase);
                            //     this.items.push(trust);
                            //     console.log(trust);
                            // });
                            break;
                        }
                    }
                });
            });
        });
    }

}
