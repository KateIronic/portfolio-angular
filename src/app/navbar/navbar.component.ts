import { Component } from '@angular/core';

import { NgIcon, NgIconComponent, provideIcons } from '@ng-icons/core';

import { RouterModule } from '@angular/router';
import { tablerKayak } from '@ng-icons/tabler-icons';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, NgIcon, NgIconComponent],
  providers: [
    provideIcons({
      tablerKayak,
    }),
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {}
