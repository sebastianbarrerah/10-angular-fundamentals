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

  imagenes = [
    {
      src: '../../../public/images/carousel/Wiki-V2.webp',
      alt: 'imagen de onboarding',
      class: 'services__image--wiki',
    },
    {
      src: '../../../public/images/carousel/Docs-V2.webp',
      alt: 'imagen de documentos',
      class: 'services__image--docs',
    },
    {
      src: '../../../public/images/carousel/Projects-V2.webp',
      alt: 'imagen de un projects',
      class: 'services__image--projects',
    },
    {
      src: '../../../public/images/carousel/AI-V2.webp',
      alt: 'imagen de inteligencia artificial',
      class: 'services__image--ai',
    },
    {
      src: '../../../public/images/carousel/calendar.webp',
      alt: 'imagen de un calendario de estudio',
      class: 'services__image--calendar',
    },
    {
      src: '../../../public/images/carousel/sites.webp',
      alt: 'imagen de sitio de diseño',
      class: 'services__image--sites',
    },
  ];
}
