import { Component, ElementRef, Renderer2, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-joguinho',
  templateUrl: './joguinho.component.html',
  styleUrls: ['./joguinho.component.scss']
})
export class JoguinhoComponent implements OnInit {

  gameOver: boolean = false;
  score: number = 0;

  constructor(private el: ElementRef, private renderer: Renderer2, private router: Router) {}

  ngOnInit(): void {
    this.startGame();
  }

  startGame() {
    this.gameOver = false;
    this.score = 0;
    this.startInterval();
  }

  startInterval() {
    const pipe = this.el.nativeElement.querySelector('.pipe');
    const astro = this.el.nativeElement.querySelector('.astro');
    let isJumping = false;

    const interval = setInterval(() => {
      const pipePosition = pipe.offsetLeft;
      const astroPosition = +window.getComputedStyle(astro).bottom.replace('px', '');

      if (pipePosition <= 70 && pipePosition > 0 && astroPosition < 45) {
        // Game over logic
        pipe.style.animation = 'none';
        pipe.style.left = '80px';
        astro.style.animation = 'none';
        astro.style.bottom = `${pipePosition}px`;
        astro.src = '../assets/img/astroMorto.png';
        astro.style.width = '80px';
        astro.style.marginRight = '50px';
        astro.style.bottom = '0px';

        this.gameOver = true;

        clearInterval(interval);
      }

      if (pipePosition <= 70 && astroPosition > 45) {
        if (!isJumping) {
          this.score++;
          isJumping = true;
        }
      } else {
        isJumping = false;
      }
    }, 10);
  }

  pular() {
    const astro = this.el.nativeElement.querySelector('.astro');

    const jump = () => {
      this.renderer.addClass(astro, 'jump');

      setTimeout(() => {
        this.renderer.removeClass(astro, 'jump');
      }, 1000);
    };

    jump();
  }

}
