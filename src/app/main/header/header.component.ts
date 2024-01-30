import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
      constructor(
      private el: ElementRef,
      private router: Router,
    ) { }


    ngOnInit() {

    }

  signInRouting() {
    this.router.navigate(['/accounts/sign-in'])
  }
  
}
