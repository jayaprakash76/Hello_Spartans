import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Meta, MetaDefinition } from '@angular/platform-browser';
@Component({
  selector: 'app-physicians',
  templateUrl: './physicians.component.html',
  styleUrls: ['./physicians.component.css']
})
export class PhysiciansComponent implements OnInit {
  title = 'Physicians Specilization';
 
  constructor(private titleService:Title, private router: Router) {
  }
 
  ngOnInit() {
    this.titleService.setTitle(this.title);
  }

  linksPhy: string[][] = [
    ["Home", "Contact", "Help","About Us","Press","Service","Sign in"]
  ];

  linkSpec: string[][] = [
    ["Anesthesiology","Geriatrics","Orthopaedic","Rehab"],
    ["Hematology","Pathology","Research","Plastic Surgery"],
    ["Cardiology","Rheumatology","Otolaryngology","Preventive"],
    ["Registered Nurse","Medical Genetics","Pathology","Psychiatry"],
    ["Anesthetist","Medicine/Pediatrics","Pediatric Surgery","Pulmonology"],
    ["Child Neurology","Perinatology","Pediatric Cardiology","Radiation Oncology"],
    ["Colon Surgery","Nephrology","Pediatric Medicine","Radiology"],
    ["Dermatology","Neurology","Endocrinology","Research"],
    ["Medicine","Neurosurgery","Gastroenterology","Resident Physician"]

  ];
  generateRouterLink(link: string): string {
    return '/' + link.toLowerCase().replace(/ /g, '-');
  }
  linkRows: string[][] = [
    ['About Us','Doctors App','Partner Overview'  ],
    ['Press','Op-Med', 'Residency Navigator' ],
    ['Investors',  'Research','Developer API'],
    ['Blog','Directory', 'Hiring Solutions' ],
    ['Work@','Terms of Service', 'Hospital Solutions' ],
    ['Contact','Privacy', 'Help']
  ];


  // Define the viewPhysicianDetails function
  viewPhysicianDetails(route: string) {
    this.router.navigate(['/physician-details', route]);
  }
}
