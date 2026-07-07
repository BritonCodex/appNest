import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss'
})
export class ContactsComponent {

  contact = {
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  };

  services = [
    'Website Development',
    'Mobile App Development',
    'UI / UX Design',
    'Cloud & DevOps',
    'AI Solutions',
    'Maintenance & Support'
  ];

  socialLinks = [
    {
      name: 'GitHub',
      icon: 'github',
      url: 'https://github.com/'
    },
    {
      name: 'LinkedIn',
      icon: 'linkedin',
      url: 'https://linkedin.com/'
    },
    {
      name: 'Twitter',
      icon: 'twitter',
      url: 'https://twitter.com/'
    }
  ];

  submitForm() {

    console.log('Contact Form Submitted');

    console.log(this.contact);

    alert(
      'Thank you! Your message has been received. We will get back to you soon.'
    );

    this.contact = {
      name: '',
      email: '',
      company: '',
      service: '',
      message: ''
    };

  }

}
