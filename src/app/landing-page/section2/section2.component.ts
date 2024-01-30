import { Component } from '@angular/core';

@Component({
  selector: 'app-section2',
  templateUrl: './section2.component.html',
  styleUrl: './section2.component.scss'
})
export class Section2Component {
  popularJobCategories= [
    {
      image:'../../../assets/images/popular-jon-icon-1.svg',
      heading:'Accounting',
      about:'1005 jobs live'
    },
    {
      image:'../../../assets/images/popular-job-icon-2.svg',
      heading:'Designing',
      about:'1005 jobs live'
    },
    {
      image:'../../../assets/images/popular-job-icon-3.svg',
      heading:'Programing',
      about:'1005 jobs live'
    },
    {
      image:'../../../assets/images/popular-job-icon-4.svg',
      heading:'Videography',
      about:'1005 jobs live'
    },
    {
      image:'../../../assets/images/popular-job-icon-5.svg',
      heading:'Accounting',
      about:'1005 jobs live'
    },
    {
      image:'../../../assets/images/popular-jon-icon-1.svg',
      heading:'Video Editing',
      about:'1005 jobs live'
    },
    {
      image:'../../../assets/images/popular-job-icon-6.svg',
      heading:'Teaching',
      about:'1005 jobs live'
    },
    {
      image:'../../../assets/images/popular-job-icon-7.svg',
      heading:'More Categories',
      about:'1005 jobs live'
    },
  ]
}
