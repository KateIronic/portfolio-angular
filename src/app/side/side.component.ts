import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

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

  isMounted: boolean = false;
  prefersReducedMotion: boolean = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches;
      this.isMounted = true;
    }
  }
}
