import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent {

  stars = [1,2,3,4,5];
  currentIndex = 0;

  nextTestimonial() {
    this.currentIndex =
      (this.currentIndex + 1) % this.testimonials.length;
  }

  prevTestimonial() {
    this.currentIndex =
      (this.currentIndex - 1 + this.testimonials.length) %
      this.testimonials.length;
  }

  goToTestimonial(index: number) {
    this.currentIndex = index;
  }

  testimonials = [
    {
      text: 'The team at AppNest delivered exceptional results for our fundraising platform. Their attention to detail and technical expertise made the entire process smooth and efficient.',
      name: 'Sarah Johnson',
      title: 'Founder, RaiseFunds',
      company: 'RaiseFunds',
      initials: 'SJ'
    },
    {
      text: 'Working with AppNest was a game-changer for our business. Their expertise in mobile app development helped us reach new customers and streamline our operations.',
      name: 'Vivek Sharma',
      title: 'Director, MAPE Services',
      company: 'MAPE Services',
      initials: 'VS'
    },
    {
      text: 'AppNest transformed our online presence completely. Their team understood our vision perfectly and delivered a website that exceeded our expectations.',
      name: 'Athul Sharma',
      title: 'CEO, Travel2Day',
      company: 'Travel2Day',
      initials: 'AS'
    },
    {
      text: 'Professional, reliable, and innovative. AppNest helped us build a robust e-commerce solution.',
      name: 'Michael Chen',
      title: 'CTO, TechStart',
      company: 'TechStart',
      initials: 'MC'
    }
  ];

}
