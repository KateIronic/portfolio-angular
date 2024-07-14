import { NgFor, CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './achievements.component.html',
  styleUrl: './achievements.component.scss',
})
export class AchievementsComponent {
  companies: string[] = ['JP Morgan Chase Co.', 'IIT Kharagpur'];
  matter: any = {
    post: 'Lead Engineer',
    date: 'May 2018 - Present',
    company: this.companies[0],
    description: [
      'Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more',
      'Work alongside creative directors to lead the research, development, and architecture of technical solutions to fulfill business requirements',
    ],
  };
}
