import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Meta, MetaDefinition } from '@angular/platform-browser';
@Component({
  selector: 'app-anesthesiology',
  templateUrl: './anesthesiology.component.html',
  // template:'<h1>Anesthesiology Component</h1>',
  styleUrls: ['./anesthesiology.component.css']
})
export class AnesthesiologyComponent implements OnInit{
  title = 'Anesthesiology';
 
  constructor( private router: Router,  private titleService:Title) {
  }
 
  ngOnInit() {
    this.titleService.setTitle(this.title);
  }
  linksPhy: string[][] = [
    ["Home", "Contact", "Help","About Us","Press","Service","Sign in"]
  ];
  // linkSpec: string[][] = [
  //   ["Aaron Kalin","Allen Ninh","Andrew G.Newman"],
  //   ["Brent Altenhof","Brent Michael Altenhof","Raffi Vahan Chemsian"],
  //   ["David C Lyons","Edward M.Tavel","Farooq Anwar Khan"],
  //   ["James R Diesfeld","Joseph David Belmonte","John Scott Walton"],
  //   ["Margaret Kathleen Menzel","Kenneth R Goldschneider","Lorne M Cross"]
  // ];
  linkRows: string[][] = [
    ['About Us','Doximity App','Partner Overview'  ],
    ['Press','Op-Med', 'Residency Navigator' ],
    ['Investors',  'Research','Developer API'],
    ['Blog','Directory', 'Hiring Solutions' ],
    ['Work@','Terms of Service', 'Hospital Solutions' ],
    ['Contact','Privacy', 'Help']
  ];
  // constructor() {}


  onClick(physicianId: number) {
    this.router.navigate(['/physician-details', physicianId]);
  }
}