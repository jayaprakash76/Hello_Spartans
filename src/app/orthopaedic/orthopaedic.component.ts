import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Meta, MetaDefinition } from '@angular/platform-browser';
@Component({
  selector: 'app-orthopaedic',
  templateUrl: './orthopaedic.component.html',
  styleUrls: ['./orthopaedic.component.css']
})
export class OrthopaedicComponent implements OnInit{
  title = 'Orthopaedic';
 
  constructor(private titleService:Title) {
  }
 
  ngOnInit() {
    this.titleService.setTitle(this.title);
  }
  linksPhy: string[][] = [
    ["Home", "Contact", "Help","About Us","Press","Product","Sign in"]
  ];
  linkRows: string[][] = [
    ['About Us','Doximity App','Partner Overview'  ],
    ['Press','Op-Med', 'Residency Navigator' ],
    ['Investors',  'Research','Developer API'],
    ['Blog','Directory', 'Hiring Solutions' ],
    ['Work@','Terms of Service', 'Hospital Solutions' ],
    ['Contact','Privacy', 'Help']
  ];
}
