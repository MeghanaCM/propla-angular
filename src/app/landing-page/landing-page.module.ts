import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './landing-page.component';
import { Section1Component } from './section1/section1.component';
import { Section2Component } from './section2/section2.component';
import { Section3Component } from './section3/section3.component';
import { Section4Component } from './section4/section4.component';
import { Section5Component } from './section5/section5.component';
import { RouterModule } from '@angular/router';
import { MainModule } from '../main/main.module';


@NgModule({
  declarations: [
    LandingPageComponent,
    Section1Component,
    Section2Component,
    Section3Component,
    Section4Component,
    Section5Component
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    RouterModule.forChild([{path:'', component:LandingPageComponent}]),
    MainModule
  ]
})
export class LandingPageModule { }
