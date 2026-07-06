import { Component } from '@angular/core';
import { HeroComponent } from './sections/hero/hero.component';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { ServicesComponent } from './sections/services/services.component';
import { ClientsComponent } from './sections/clients/clients.component';
import { FooterComponent } from './sections/footer/footer.component';
import { ContactsComponent } from './sections/contacts/contacts.component';
import { TestimonialsComponent } from './sections/testimonials/testimonials.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: 
  [
    NavbarComponent,
    HeroComponent,
    ServicesComponent,
    ClientsComponent, 
    TestimonialsComponent,
    ContactsComponent,
    FooterComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {}