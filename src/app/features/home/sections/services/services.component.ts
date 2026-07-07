import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {

  services = [

    {
      title: 'Web Development',
      icon: '💻',
      description: 'High-performance websites, dashboards and enterprise web applications built with modern technologies.',
      featured: true
    },

    {
      title: 'Mobile Applications',
      icon: '📱',
      description: 'Cross-platform Android and iOS applications with beautiful user experiences.',
      featured: false
    },

    {
      title: 'UI / UX Design',
      icon: '🎨',
      description: 'Modern interfaces focused on usability, accessibility and conversion.',
      featured: false
    },

    {
      title: 'Cloud Solutions',
      icon: '☁️',
      description: 'Cloud deployment, DevOps automation and scalable infrastructure.',
      featured: false
    },

    {
      title: 'Artificial Intelligence',
      icon: '🤖',
      description: 'AI-powered software, automation and intelligent business solutions.',
      featured: false
    },

    {
      title: 'Maintenance & Support',
      icon: '🛠️',
      description: 'Continuous updates, monitoring and long-term technical support.',
      featured: false
    }

  ];

}
