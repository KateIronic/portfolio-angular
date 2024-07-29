import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  works = [
    {
      id: 1,
      preTitle: 'Featured Project',
      title: 'Payment App',
      description:
        'Implemented a Paytm like payment app which allows users to send and receive money, view transaction history, and manage account settings. The app was built using Node.js, PostgreSQL,  Next.js and Tailwind CSS, ensuring secure and efficient payment processing.',

      technologies: ['Node.js', 'PostgreSQL', 'Next.js'],
      img: '../../assets/images/payment.png',
      link: 'https://github.com',
      github: 'https://github.com/KateIronic/Java-Microservices',
    },
    {
      id: 2,
      preTitle: 'Featured Project',
      title: 'Deliveroo 2.0',
      description:
        'Designed and built a feature-rich food delivery application using React Native and Tailwind CSS. The app includes functionalities such as restaurant listings, order placement, real time tracking, and user authentication, providing a seamless user experience.',
      technologies: ['ReactNative', 'Tailwind CSS'],
      img: '../../assets/images/image.png',
      link: 'https://github.com',
      github: 'https://github.com',
    },
    {
      id: 3,
      preTitle: 'Featured Project',
      title: 'Netflix Clone',
      description:
        'Created a fully functional Netflix clone using Next.js and Tailwind CSS. The application supports user authentication, dynamic content loading, and a sleek, responsive UI, closely mimicking the core functionalities of the original Netflix platform.',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      img: '../../assets/images/netflix.png',
      link: 'https://github.com',
      github: 'https://github.com/KateIronic/netflix-clone',
    },
    {
      id: 4,
      preTitle: 'Featured Project',
      title: 'CryptoTracker',
      description:
        'Developed an interactive cryptocurrency tracking dashboard with React.js and CSS, APIs The application offers real-time updates, detailed charts, and user-specific tracking, allowing users to monitor and analyze cryptocurrency trends effectively.',
      technologies: ['React.js', 'CSS'],
      img: '../../assets/images/crypto.png',
      link: 'https://github.com',
      github: 'https://github.com/KateIronic/crypto-tracker',
    },
  ];
}
