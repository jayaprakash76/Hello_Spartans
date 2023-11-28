import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Meta, MetaDefinition } from '@angular/platform-browser';
@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {
  title = 'Directory';
  constructor(private titleService:Title){

  }
  ngOnInit() {
      this.titleService.setTitle(this.title);
  }
  linkRow: string[][] = [
    ["Home", "Contact", "Help","About Us","Press","Service","Sign in"]
  ];

  sepc: string[][] = [
    ["Physicians", "Physician Assistants"],
    ["Nurse Practitionners","Pharmacists"]
  ];
  generateRouterLink(link: string): string {
    return '/' + link.toLowerCase().replace(/ /g, '-');
  }
  linkRows: string[][] = [
    ['About Us','Doximity App','Partner Overview'  ],
    ['Press','Op-Med', 'Residency Navigator' ],
    ['Investors',  'Research','Developer API'],
    ['Blog','Directory', 'Hiring Solutions' ],
    ['Work@','Terms of Service', 'Hospital Solutions' ],
    ['Contact','Privacy', 'Help']
  ];

}
