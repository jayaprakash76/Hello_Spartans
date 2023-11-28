import { NgModule } from '@angular/core';
import { BrowserModule, Meta, Title } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { DirectoryComponent } from './directory/directory.component';
import { PhysiciansComponent } from './physicians/physicians.component';
import { AnesthesiologyComponent } from './anesthesiology/anesthesiology.component';
import { GeriatricsComponent } from './geriatrics/geriatrics.component';
import { OrthopaedicComponent } from './orthopaedic/orthopaedic.component';
import { RehabComponent } from './rehab/rehab.component';
import { AaronKalinComponent } from './aaron-kalin/aaron-kalin.component';
import { PhysicianDetailsComponent } from './physician-details/physician-details.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactComponent } from './contact/contact.component';
import { PressComponent } from './press/press.component';
import { HelpComponent } from './help/help.component';
import { FormsModule } from '@angular/forms';
import { SignInComponent } from './sign-in/sign-in.component';
import { ServiceComponent } from './service/service.component';
import { PartnerOverviewComponent } from './partner-overview/partner-overview.component';
import { OpMedComponent } from './op-med/op-med.component';
import { ResearchComponent } from './research/research.component';
import { PhysicianAssistantsComponent } from './physician-assistants/physician-assistants.component';
import { NursePractitionnersComponent } from './nurse-practitionners/nurse-practitionners.component';
import { PharmacistsComponent } from './pharmacists/pharmacists.component';
import { HematologyComponent } from './hematology/hematology.component';
const routes: Routes= [
  {path:'',redirectTo:'home',pathMatch:"full"},
  {path:'home', component: HomeComponent},
  {path:'**', component:HomeComponent }

]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    DirectoryComponent,
    PhysiciansComponent,
    AnesthesiologyComponent,
    GeriatricsComponent,
    OrthopaedicComponent,
    RehabComponent,
    AaronKalinComponent,
    PhysicianDetailsComponent,
    ContactComponent,
    PressComponent,
    HelpComponent,
    SignInComponent,
    ServiceComponent,
    PartnerOverviewComponent,
    OpMedComponent,
    ResearchComponent,
    PhysicianAssistantsComponent,
    NursePractitionnersComponent,
    PharmacistsComponent,
    HematologyComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule

  ],
  exports: [RouterModule],
  providers: [Title,Meta],
  bootstrap: [AppComponent]
})
export class AppModule { }
