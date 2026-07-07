import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { FooterComponent } from '../../features/home/sections/footer/footer.component';

@Component({
  selector: 'app-team',
  imports: [CommonModule, FooterComponent],
  standalone: true,
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent {
  constructor(private location: Location) {}

  goBack() {
    this.location.back();
  }

  teamMembers = [
    {
      name: 'Hari',
      role: 'Full-stack & DevOps',
      image: 'images/team/hari.jpeg',
      description:
        'Passionate about building scalable applications and optimizing deployment pipelines. Expert in cloud infrastructure and modern web technologies.',

      skills: ['React', 'Node.js', 'AWS', 'Docker'],

      linkedin: '#',
      github: 'https://github.com/',
      twitter: '#',
      email: 'hari@appnest.com',
    },

    {
      name: 'Nitin',
      role: 'Frontend & UX',
      image: 'images/team/nitin.jpeg',
      description:
        'Creative designer and frontend developer focused on creating beautiful, user-friendly interfaces that deliver exceptional user experiences.',

      skills: [
        'React',
        'TypeScript',
        'Figma',
        'Tailwind',
        'GitHub',
        'LinkedIn',
      ],

      linkedin: '#',
      github: 'https://github.com/',
      twitter: '#',
      email: 'nitin@appnest.com',
    },

    {
      name: 'Rohith',
      role: 'Backend & Integration',
      image: 'images/team/rohith.jpeg',
      description:
        'Backend specialist with expertise in API development, database design, and third-party integrations. Ensures robust and secure systems.',

      skills: [
        'Python',
        'PostgreSQL',
        'Redis',
        'GraphQL',
        'GitHub',
        'LinkedIn',
      ],

      linkedin: '#',
      github: 'https://github.com/',
      twitter: '#',
      email: 'rohith@appnest.com',
    },

    {
      name: 'Sachin',
      role: 'Mobile & Cross-platform',
      image: 'images/team/sachin.jpg',
      description:
        'Mobile development expert creating native and cross-platform applications. Focused on performance optimization and user engagement.',

      skills: ['React Native', 'Flutter', 'Firebase', 'iOS', 'Android'],

      linkedin: '#',
      github: 'https://github.com/',
      twitter: '#',
      email: 'sachin@appnest.com',
    },
  ];
}
