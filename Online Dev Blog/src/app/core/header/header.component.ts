import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    // const script = this.renderer.createElement('script');
    // script.type = 'text/javascript';
    // script.text = `
    // const hamburger = document.querySelector('.hamburger');
    // const header = document.querySelector('.header');
    
    // hamburger.addEventListener('click', () => {
    //   header.style.top = 0;
    // });
    
    // `;
    // this.renderer.appendChild(document.body, script);
  }

}
