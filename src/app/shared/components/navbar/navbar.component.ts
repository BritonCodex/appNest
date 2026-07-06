import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NavbarComponent {

  isDarkMode = false;
  isMenuOpen = false;

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark-theme', this.isDarkMode);
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

}
