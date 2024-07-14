import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-side',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './side.component.html',
  styleUrl: './side.component.scss',
})
export class SideComponent implements OnInit {
  @Input() isHome: boolean = false;
  @Input() orientation: 'left' | 'right' = 'left';
  prefersReducedMotion: boolean = false;
  isMounted: boolean = false;
  loaderDelay: number = 1000; // Adjust as necessary

  ngOnInit() {
    // Check for prefers-reduced-motion using Angular approach
    this.prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (!this.isHome || this.prefersReducedMotion) {
      this.isMounted = true;
    } else {
      setTimeout(() => {
        this.isMounted = true;
        console.log('isMounted set to true');
      }, this.loaderDelay);
    }
    console.log('prefersReducedMotion:', this.prefersReducedMotion);
    console.log('isMounted:', this.isMounted);
  }
}
