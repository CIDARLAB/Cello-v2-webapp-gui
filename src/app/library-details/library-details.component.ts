import { Component, OnInit } from '@angular/core';


interface Header {
    description: string;
    version: string;
    date: string;
    author: string[];
    organism: string;
    genome: string;
    temperature: string;
    media: string;
    growth: string;
}

interface Library {
    file: string;
    header: Header;
}

@Component({
    selector: 'app-library-details',
    templateUrl: './library-details.component.html',
    styleUrls: ['./library-details.component.scss'],
})
export class LibraryDetailsComponent implements OnInit {

    public library: Library;

    constructor() { }

    ngOnInit() { }

}
