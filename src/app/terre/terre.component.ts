import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terre',
  templateUrl: './terre.component.html',
  styleUrls: ['./terre.component.css']
})
export class TerreComponent implements OnInit {
  ngOnInit() {
    const text = document.getElementById('text') as HTMLElement;
    const front = document.getElementById('front') as HTMLElement;
    const back = document.getElementById('back') as HTMLElement;

    window.addEventListener('scroll', () => {
      const value = window.scrollY;

      text.style.marginTop = value * 2.5 + 'px';
      front.style.top = value * -1.5 + 'px';
      // front.style.left = value * 1.5 + 'px';
      back.style.top = value * -1.5 + 'px';
      // back.style.left = value * 1.5 + 'px';
    });
  }
}