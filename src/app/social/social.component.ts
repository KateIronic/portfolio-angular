import { Component } from '@angular/core';
import { NgIcon, NgIconComponent, provideIcons } from '@ng-icons/core';
import { lucideGithub, lucideLinkedin } from '@ng-icons/lucide';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-social',
  standalone: true,
  imports: [MatIconModule, NgIcon, NgIconComponent],
  providers: [
    provideIcons({
      lucideGithub,
      lucideLinkedin,
    }),
  ],
  templateUrl: './social.component.html',
  styleUrl: './social.component.scss',
})
export class SocialComponent {}
