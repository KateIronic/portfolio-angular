import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  paragraph1 =
    "Welcome to my portfolio! I'm Raghav, a dedicated full stack developer with a fervent passion for crafting digital solutions that thrive on the web. My journey in the tech world is driven by my love for creating beautiful, functional web applications that resonate with users's needs and exceed their expectations.";
  paragraph2 =
    'With a robust skill set that spans across HTML, CSS, JavaScript, React, Angular, Node.js, Express, MongoDB, and SQL, I bring versatility and depth to my projects. My experience has equipped me with the knowledge to navigate the complexities of web development, from front-end aesthetics to back-end functionality.';
  paragraph3 =
    " I'm on a continuous quest for knowledge, always eager to explore new technologies and methodologies that push the boundaries of what's possible. As I seek to join a team as a full-time software developer, I'm excited about the opportunity to bring my blend of creativity, technical expertise, and insatiable curiosity to create impactful web solutions.";

  paragraph4 =
    "Let's build something amazing together. Reach out to me, and let's embark on a journey of innovation and collaboration in the digital realm.Here are a few technologies I've been working with recently:";

  about = {
    title: 'About Me',
    description: [
      this.paragraph1,
      this.paragraph2,
      this.paragraph3,
      this.paragraph4,
    ],
  };
  skillsLeft: any[] = [];
  skillsRight: any[] = [];

  ngOnInit() {
    this.skillsLeft = [
      { name: 'JavaScript (ES6+)' },
      { name: 'TypeScript' },
      { name: 'Angular' },
      { name: 'React.js' },
      { name: 'Node.js' },
    ];

    this.skillsRight = [
      { name: 'Express.js' },
      { name: 'MongoDB' },
      { name: 'SQL' },
      { name: 'HTML & CSS' },
      { name: 'Git' },
    ];
  }

  trackById(index: number, skill: any): number {
    return skill.id;
  }
}
