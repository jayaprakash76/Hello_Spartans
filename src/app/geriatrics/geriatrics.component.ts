import { Component } from '@angular/core';

@Component({
  selector: 'app-geriatrics',
  templateUrl: './geriatrics.component.html',
  styleUrls: ['./geriatrics.component.css']
})
export class GeriatricsComponent {
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
