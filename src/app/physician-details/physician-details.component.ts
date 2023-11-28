import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-physician-details',
  templateUrl: './physician-details.component.html',
  styleUrls: ['./physician-details.component.css']
})
export class PhysicianDetailsComponent implements OnInit {
  physicianName: string = '';
  Details: any;
  physicianId: number = 0;
  doctors: any[] = [];

  constructor(private titleService: Title, private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.physicianId = +params['id'];
      this.getDetails();
    });
  }

  getDetails() {
    this.http.get<any[]>('https://d93a59523eb7cfbb97cc12469b6ebe9c.serveo.net/assets/data/DrList.json').subscribe((doctors) => {
      this.doctors = doctors;
      this.Details = this.doctors.find(doctor => doctor.id === this.physicianId);
      console.log(this.Details);
      
      if (this.Details) {
        this.titleService.setTitle("Dr. " + this.Details.name); // Set the title to the physician's name

        // Set the ogTitle meta tag
        const meta = document.querySelector('meta[property="og:title"]') as HTMLMetaElement;
        meta.content = `Mr. ${this.Details.name} Education qualifications are ${this.Details.Education}.`;;

        
        // Update the ogDescription meta tag
        const metaDescription = document.querySelector('meta[property="og:description"]') as HTMLMetaElement;
        metaDescription.content = `Explore detailed information about Dr. ${this.Details.name}, their professional expertise, specialties, and experience in providing quality healthcare services. Discover insights into their medical practice and commitment to patient care.`;

        // const additionalMeta = document.createElement('meta');
        // additionalMeta.setAttribute('content', 'og:additionalDescription');
        // additionalMeta.content = `Mr. ${this.Details.name} Education qualifications are ${this.Details.Education}.`;
        // document.head.appendChild(additionalMeta);
       

      }
      
      
    });
  }
}
