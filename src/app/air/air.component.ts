import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-air',
  templateUrl: './air.component.html',
  styleUrl: './air.component.css'
})
export class AirComponent implements OnInit  {
  ngOnInit() {
    const text = document.getElementById('text') as HTMLElement;
    const img7 = document.getElementById('img7') as HTMLElement;
    const img2 = document.getElementById('img2') as HTMLElement;
    const img4 = document.getElementById('img4') as HTMLElement;
    const img1 = document.getElementById('img1') as HTMLElement;

    window.addEventListener('scroll', () => {
      const value = window.scrollY;

      text.style.marginTop = value * 2.5 + 'px';
      img7.style.top = value * -1.5 + 'px';
      img7.style.left = value * 1.5 + 'px';
      img1.style.left = value * 1.5 + 'px';
      img4.style.left = value * -1.5 + 'px';
      img2.style.top = value * 1 + 'px';
    });
  }

}