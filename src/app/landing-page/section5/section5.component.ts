import { Component } from '@angular/core';

@Component({
  selector: 'app-section5',
  templateUrl: './section5.component.html',
  styleUrl: './section5.component.scss'
})
export class Section5Component {
  arrayData = [
    {
      id: 1,
      image: '../../../assets/images/carousel-img-1.png',
      heading: 'Kim',
      role: 'Front End Developer',
      content:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi optio cumque nihil'
    },
    {
      id: 2,
      image: '../../../assets/images/carousel-img-6.png',
      heading: 'John',
      role: 'Back End Developer',
      content:'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint doloremque laudantium'
    },
    {
      id: 3,
      image: '../../../assets/images/carousel-img-7.png',
      heading: 'Park',
      role: 'Android Developer',
      content:'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor iusto odio dignissimos ducimus'
    },
    {
      id: 4,
      image: '../../../assets/images/carousel-img-8.png',
      heading: 'Davis',
      role: 'Ui/Ux Designer',
      content:'sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis quo minus id quod maxime'
    },
    {
      id: 5,
      image: '../../../assets/images/carousel-img-9.png',
      heading: 'Smith',
      role: 'Digital Marketing',
      content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation aliquam quaerat voluptatem'
    },
  ];

  currentIndex = 0;
  currentData: any; 

  ngOnInit() {
    this.currentData = this.arrayData[0];
  
    const intervalFunction = () => {
      this.currentIndex = (this.currentIndex + 1) % this.arrayData.length;
      this.currentData = this.arrayData[this.currentIndex];
      setTimeout(intervalFunction, 5000);
    };
  
    setTimeout(intervalFunction, 5000);
  }

  changeCurrentIndex(index: number) {
    this.currentIndex = index;
    this.currentData = this.arrayData[this.currentIndex];
  }
}
