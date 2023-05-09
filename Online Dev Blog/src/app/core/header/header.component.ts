import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isShowed = false;
  headerHeight = "90px";

  @ViewChild('header') headerElement?: ElementRef;
  @ViewChild('h1') h1Element?: ElementRef;

  @ViewChild('img') imgElement?: ElementRef;
  @ViewChild('bio') bioElement?: ElementRef;
  @ViewChild('socials') socialsElement?: ElementRef;
  @ViewChild('nav') navElement?: ElementRef;

  constructor() { }

  showMenu() {
    if (!this.isShowed && this.headerElement) {
      console.log(this.isShowed);
      this.headerElement!.nativeElement.style.display = 'none';
// this.h1Element!.nativeElement.style.display = 'block'
      // this.imgElement!.nativeElement.style.display = 'none'
      // this.bioElement!.nativeElement.style.display = 'none'
      // this.socialsElement!.nativeElement.style.display = 'none'
      // // this.isShowed = !this.isShowed;

      // Implement your logic for showing the menu
    }
    else {
      console.log(this.isShowed);

      this.headerElement!.nativeElement.style.display = 'block';
      // this.imgElement!.nativeElement.style.display = 'block'
      // this.bioElement!.nativeElement.style.display = 'block'
      // this.socialsElement!.nativeElement.style.display = 'inline-block'

    }
    this.isShowed = !this.isShowed;

  }
}
