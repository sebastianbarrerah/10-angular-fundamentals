import { Component } from '@angular/core';

@Component({
  selector: 'app-service',
  imports: [],
  templateUrl: './service.component.html',
  styleUrl: './service.component.scss',
})
export class ServiceComponent {
  services = [
    {
      id: 'servicios-wiki',
      name: 'Wikis',
      icon: '../../../public/icon/wiki.PNG',
    },
    {
      id: 'servicios-docs',
      name: 'Docs',
      icon: '../../../public/icon/Doc.PNG',
    },
    {
      id: 'servicios-projects',
      name: 'Projects',
      icon: '../../../public/icon/project.svg',
    },
    { id: 'servicios-ai', name: 'Ai', icon: '../../../public/icon/face.PNG' },
    {
      id: 'servicios-calendar',
      name: 'Calendar',
      icon: '../../../public/icon/calendar.PNG',
    },
    {
      id: 'servicios-sites',
      name: 'Sites',
      icon: '../../../public/icon/sites.PNG',
    },
  ];
}
