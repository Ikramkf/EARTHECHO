import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eau',
  templateUrl: './eau.component.html',
  styleUrl: './eau.component.css'
})
export class EauComponent implements OnInit  {
  ngOnInit() {
    const text = document.getElementById('text') as HTMLElement;
    const leaf = document.getElementById('leaf') as HTMLElement;
    const hill1 = document.getElementById('hill1') as HTMLElement;
    const hill4 = document.getElementById('hill4') as HTMLElement;
    const hill5 = document.getElementById('hill5') as HTMLElement;

    window.addEventListener('scroll', () => {
      const value = window.scrollY;

      text.style.marginTop = value * 2.5 + 'px';
      leaf.style.top = value * -1.5 + 'px';
      leaf.style.left = value * 1.5 + 'px';
      hill5.style.left = value * 1.5 + 'px';
      hill4.style.left = value * -1.5 + 'px';
      hill1.style.top = value * 1 + 'px';
    });
  }

}
