
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {}

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

  slides = [
    { image: './assets/images/airImage.png' , title: 'A' , subtitle: '01.Air',index:'/air', pp: "IR", tt: "polution", description: "Explorez l'atmosphère et comprenez les enjeux liés à la qualité de l'air. De la lutte contre la pollution à la préservation de la couche d'ozone, embarquez pour un voyage aérien essentiel."},  
      { image: './assets/images/waterImage.png' , title: 'E' , subtitle: '02.Eau',index:'/eau',pp: "au", tt: "Océan", description: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores laudantium ex dolorum earum soluta. Laborum, atqueaccusamus libero magni dolores placeat, nemo labore ut, estnumquam quidem incidunt odit nam.'},
    { image: './assets/images/terre.png' , title: 'Ter' , subtitle: '03.Terre',index:'/terre',pp: "re", tt: "Forest", description: '  "Découvrez les écosystèmes terrestres qui façonnent notre planète. De la richesse des forêts aux vastes étendues désertiques, plongez dans la diversité de la vie sur Terre."'}
    // ... Ajoutez d'autres données de diapositives selon votre besoin
  ];
  currentSlide = 0;

  navigateToSlide(index: number) {
    const selectedSlide = this.slides[index];
    
    if (selectedSlide.title === 'A') {
      this.router.navigate(['/air']);
    } else if (selectedSlide.title === 'E') {
      this.router.navigate(['/eau']);
    } else if (selectedSlide.title === 'Ter') {
      this.router.navigate(['/terre']);
    }
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }
}