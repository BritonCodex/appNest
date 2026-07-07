import { Component } from '@angular/core';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.scss'
})
export class ClientsComponent {

  technologies = [

    {
      name: 'Apple',
      svg: `
      <svg viewBox="0 0 384 512">
        <path fill="currentColor" d="M318.7 268.6c-.3-48.5 39.7-71.7 41.5-72.8-22.7-33.2-58.2-37.8-70.7-38.3-30.1-3-58.8 17.7-74.1 17.7-15.4 0-39-17.2-64.1-16.7-32.9.5-63.3 19.1-80.3 48.7-34.3 59.5-8.7 147.5 24.6 195.6 16.3 23.5 35.7 49.9 61.2 48.9 24.5-1 33.7-15.8 63.3-15.8 29.6 0 37.8 15.8 63.8 15.3 26.3-.5 43-23.8 59.1-47.4 18.6-27.2 26.3-53.5 26.6-54.8-.6-.2-50.9-19.5-51.3-77.4z"/>
      </svg>
      `
    },

    {
      name: 'Google',
      svg: `
      <svg viewBox="0 0 533.5 544.3">
        <path fill="currentColor" d="M533.5 278.4c0-18.5-1.5-37-4.7-54.8H272v103.7h146.9c-6.3 34-25.3 62.8-54 82v68h87.1c51-47 80.5-116.3 80.5-198.9z"/>
      </svg>
      `
    },

    {
      name: 'Microsoft',
      svg: `
      <svg viewBox="0 0 448 448">
        <path fill="currentColor" d="M0 0h208v208H0zm240 0h208v208H240zM0 240h208v208H0zm240 0h208v208H240z"/>
      </svg>
      `
    },

    {
      name: 'Amazon',
      svg: `
      <svg viewBox="0 0 640 512">
        <path fill="currentColor" d="M129.2 224c35.6-27.3 79.5-41 131.5-41 43.5 0 81.4 8.5 113.8 25.5v-22.7c0-28.7-8.3-50.4-24.8-65-16.5-14.7-41.3-22-74.4-22-38.2 0-77.7 10.8-118.5 32.4L125.8 73c50.3-32.7 107.8-49 172.5-49 63.6 0 112.2 15.3 145.8 45.8 33.6 30.6 50.4 74.4 50.4 131.6v207.6h-88.6v-35.2c-33.8 27.8-77.2 41.8-130.2 41.8-43.3 0-78.8-11.5-106.5-34.5S128 327.5 128 291.3c0-28.2 10.4-50.6 31.2-67.3z"/>
      </svg>
      `
    },

    {
      name: 'Meta',
      svg: `
      <svg viewBox="0 0 512 512">
        <path fill="currentColor" d="M256 128c-52 0-92 128-128 128-28 0-52-48-96-48-18 0-32 14-32 32 0 66 68 144 128 144 60 0 92-128 128-128 36 0 68 128 128 128 60 0 128-78 128-144 0-18-14-32-32-32-44 0-68 48-96 48-36 0-76-128-128-128z"/>
      </svg>
      `
    },

    {
      name: 'Netflix',
      svg: `
      <svg viewBox="0 0 384 512">
        <path fill="currentColor" d="M0 0h96l192 512h-96L0 0zm192 0h96v512h-96z"/>
      </svg>
      `
    },

    {
      name: 'Spotify',
      svg: `
      <svg viewBox="0 0 496 512">
        <path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8z"/>
      </svg>
      `
    },

    {
      name: 'Adobe',
      svg: `
      <svg viewBox="0 0 512 512">
        <path fill="currentColor" d="M0 512L192 0h128L128 512H0zm320-512h192v512H384z"/>
      </svg>
      `
    }

  ];

}
