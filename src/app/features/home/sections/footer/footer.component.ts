import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  quickLinks = [
    {
      name: 'Home',
      url: '#hero',
    },
    {
      name: 'Services',
      url: '#services',
    },
    {
      name: 'Team',
      url: '#team',
    },
    {
      name: 'Testimonials',
      url: '#testimonials',
    },
    {
      name: 'Contacts',
      url: '#contacts',
    },
  ];

  socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/',
    },
    {
      name: 'LinkedIn',
      url: '#',
    },
    {
      name: 'Twitter',
      url: '#',
    },
  ];
}
