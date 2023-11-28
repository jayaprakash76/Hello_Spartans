import { Directive, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { DirectoryComponent } from './directory/directory.component';
import { PhysiciansComponent } from './physicians/physicians.component';
import { AnesthesiologyComponent } from './anesthesiology/anesthesiology.component';
import { GeriatricsComponent } from './geriatrics/geriatrics.component';
import { OrthopaedicComponent } from './orthopaedic/orthopaedic.component';
import { RehabComponent } from './rehab/rehab.component';
import { ContactComponent } from './contact/contact.component';
import { AaronKalinComponent } from './aaron-kalin/aaron-kalin.component';
import { PhysicianDetailsComponent } from './physician-details/physician-details.component';
import { HelpComponent } from './help/help.component';
import { PressComponent } from './press/press.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ServiceComponent } from './service/service.component';
import { PartnerOverviewComponent } from './partner-overview/partner-overview.component';
import { OpMedComponent } from './op-med/op-med.component';
import { ResearchComponent } from './research/research.component';
import { PhysicianAssistantsComponent } from './physician-assistants/physician-assistants.component';
import { NursePractitionnersComponent } from './nurse-practitionners/nurse-practitionners.component';
import { PharmacistsComponent } from './pharmacists/pharmacists.component';
import { HematologyComponent } from './hematology/hematology.component';
const routes: Routes = [
  {
    path:'',component: HomeComponent,pathMatch:"full",
    data: {
      title: 'Home',
      description: 'Welcome to our comprehensive medical platform offering a diverse range of healthcare solutions. Explore our innovative services, meet our experienced physicians, and discover more about our commitment to quality care.',
      ogTitle: 'Healthcare Innovations: Unveiling Advanced Medical Solutions | Doctors',
      ogDescription: 'Description of Anesthesiology for social media',
    }
},
  { 
    path: 'about-us', component: AboutUsComponent,
    data: {
      title: 'About Us',
      description: 'Title of About Us',
      robots: 'noindex, nofollow',
      ogTitle: 'Explore of About us Component'
    }
},
  { 
  path: 'hematology', component: HematologyComponent,
  data: {
    title: 'Hematology',
    description: 'Title of Hematology',
    robots: 'noindex, nofollow',
    ogTitle: 'Explore the Hematology Component'
  } },
  {
  path:'press', component:PressComponent,
  data: {
    title: 'Press',
    description: 'Title of Press',
    robots: 'noindex, nofollow',
    ogTitle: 'Explore the Press Component'
  }
},
  { path: 'directory', component: DirectoryComponent,
  data: {
    title: 'Directory',
    description: 'Directory of Clinicians',
    ogTitle: 'Explore The Directory Component',
    ogDescription: 'Discover a diverse directory of skilled clinicians specializing in various medical fields. Find comprehensive information about experienced physicians, their expertise, and services, ensuring quality care and specialized treatments for your healthcare needs.'
  }},
  { path: 'op-med', component: OpMedComponent},
  { path: 'physicians', component: PhysiciansComponent,
  data: {
    title: 'Physicians Specilization',
    description: 'Discription of Physicians',
    ogTitle: 'Explore Specializations of Skilled Physicians',
    ogDescription: 'Discover a comprehensive range of physician specializations. Find details about expert doctors in various medical fields, ensuring high-quality care tailored to specific health needs.'
  }},
  { 
  path: 'pharmacists', component: PharmacistsComponent,
  data: {
    title: 'Pharmacists',
    description: 'Discription of Pharmacists',
    ogTitle: 'Explore the Pharmacists page'
  }},
  { 
  path: 'research', component: ResearchComponent,
  data: {
    title: 'research',
    description: 'Discription of research',
    ogTitle: 'Explore the research page'
  }
},
  { path: 'physician-assistants', component: PhysicianAssistantsComponent},
  { path: 'nurse-practitionners', component: NursePractitionnersComponent},
  { path: 'part', component: PhysiciansComponent},
  { path: 'partner-overview', component: PartnerOverviewComponent},
  { path: 'anesthesiology', component: AnesthesiologyComponent,
  data: {
    title: 'Anesthesiology',
    description: 'Description of Anesthesiology',
    ogTitle: 'Anesthesiology Physicians Directory',
    ogDescription: 'Explore our comprehensive directory of anesthesiology physicians. Find experienced anesthesiologists, discover specialized services, and get detailed insights into their practice and expertise in anesthesiology.'
  }},
  { 
  path: 'service', component: ServiceComponent,
  data: {
    title: 'Server',
    description: 'Description of Server'
    
  }},
  { 
  path: 'help', component: HelpComponent,
  data: {
    title: 'Help',
    description: 'Explore our comprehensive Help Center directory offering a wide array of solutions, guides, and resources. Find answers to common questions, troubleshoot issues, and access various support channels for all your needs.',
    ogDescription: 'Delve into our expansive Help Center directory, providing a wealth of resources, FAQs, and troubleshooting guides. Access expert advice, knowledge bases, and various support channels, ensuring you find the answers and assistance you are seeking.',
    robots: 'noindex, nofollow',
    ogTitle: 'Explore the Help Component'
  }
},
  { path: 'rehab', component: RehabComponent},
  {
  path: 'physician-details/:id', component: PhysicianDetailsComponent,
  data: {
    description: 'Description of Physician Details',
    ogTitle: 'Meet Dr. ${physicianName} | Specialized Physician Details',
    ogDescription: 'Explore detailed information about Dr. [Physician Name], their professional expertise, specialties, and experience in providing quality healthcare services. Discover insights into their medical practice and commitment to patient care.'
      } },
  { path: 'aaron-kalin', component: AaronKalinComponent},
  { path: 'contact', component: ContactComponent,
  data: {
    title: 'Contact',
    description: 'Description of Contact',
    robots: 'noindex, nofollow',
    ogTitle: 'Explore the Contact Component'
  }},
  { path: 'sign-in', component: SignInComponent,
  data: {
    title: 'Sign-in',
    description: 'Description of Sign in',
    robots: 'noindex, nofollow',
    ogTitle: 'Explore the Sign-in Component'
  }},
  {path:'**', component: HomeComponent }

];
@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
