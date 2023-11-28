import { Component } from '@angular/core';

@Component({
  selector: 'app-rehab',
  templateUrl: './rehab.component.html',
  styleUrls: ['./rehab.component.css']
})
export class RehabComponent {
  linksPhy: string[][] = [
    ["Home", "Contact", "Help","About Us","Press","Product","Sign in"]
  ];
}
