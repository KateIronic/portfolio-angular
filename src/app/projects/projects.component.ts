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
      title: 'EcoMi Service',
      description:
        'EcoMi Architecture is a robust and scalable microservices architecture developed using Java Spring Boot for an e-commerce platform. This project leverages the microservices design pattern to ensure modularity, flexibility, and ease of maintenance.',

      technologies: ['Spring Boot', 'Spring', 'Java'],
      img: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
      img: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
      img: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
      img: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      link: 'https://github.com',
      github: 'https://github.com/KateIronic/crypto-tracker',
    },
  ];
}
