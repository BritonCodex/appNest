import { Component } from '@angular/core';

@Component({
  selector: 'app-process',
  standalone: true,
  imports: [],
  templateUrl: './process.component.html',
  styleUrl: './process.component.scss'
})
export class ProcessComponent {

  steps = [

    {
      number: '01',
      title: 'Discover',
      icon: '🔍',
      description:
        'Understanding your business goals, audience and project requirements.'
    },

    {
      number: '02',
      title: 'Design',
      icon: '🎨',
      description:
        'Creating modern user experiences, prototypes and visual systems.'
    },

    {
      number: '03',
      title: 'Develop',
      icon: '💻',
      description:
        'Building scalable, secure and high-performance software.'
    },

    {
      number: '04',
      title: 'Deploy',
      icon: '🚀',
      description:
        'Launching your solution and providing continuous maintenance.'
    }

  ];

}
