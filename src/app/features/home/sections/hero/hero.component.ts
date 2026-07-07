import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {

  // ==========================
  // COMPANY STATISTICS
  // ==========================

  stats = [
    {
      value: '50+',
      label: 'Projects Delivered'
    },
    {
      value: '98%',
      label: 'Client Satisfaction'
    },
    {
      value: '5+',
      label: 'Years Experience'
    }
  ];

  // ==========================
  // SERVICES
  // ==========================

  services = [
    {
      icon: '💻',
      title: 'Web Development'
    },
    {
      icon: '📱',
      title: 'Mobile Apps'
    },
    {
      icon: '☁️',
      title: 'Cloud Services'
    },
    {
      icon: '🤖',
      title: 'AI Solutions'
    }
  ];
}
