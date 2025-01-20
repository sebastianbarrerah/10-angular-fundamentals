import { Component } from '@angular/core';

@Component({
  selector: 'app-feature',
  imports: [],
  templateUrl: './feature.component.html',
  styleUrl: './feature.component.scss',
})
export class FeatureComponent {
  features: Feature[] = [
    {
      image: '../../../public/images/docsStacked.webp',
      name: 'Docs',
      description: 'Build any page, <br /> communicate any idea.',
      ariaLabel: 'Explorar documentos',
    },
    {
      image: '../../../public/images/bookFlat.webp',
      name: 'Wiki',
      description: 'One home base for all your knowledge.',
      ariaLabel: 'Explorar wiki',
    },
    {
      image: '../../../public/images/target.webp',
      name: 'Projects',
      description: 'Manage any project from beginning to end.',
      ariaLabel: 'Explorar proyectos',
    },
    {
      video: '../../../public/videos/everything-you-need-ai.mp4',
      name: 'Notion AI',
      description: 'Finds what you need. Does what you need.',
      ariaLabel: 'Explorar Notion AI',
      image: ''
    },
    {
      image: '../../../public/images/notionCalendarLogo.webp',
      name: 'Calendar',
      description: 'See all your commitments in one place.',
      ariaLabel: 'Explorar calendario',
    },
    {
      image: '../../../public/images/trophy.webp',
      name: 'Goals',
      description: "Track progress toward <br />what's most important.",
      ariaLabel: 'Explorar logros',
    },
    {
      image: '../../../public/images/globe.webp',
      name: 'Sites',
      description: 'Make any page a website in minutes.',
      ariaLabel: 'Explorar sitios web',
    },
    {
      image: '../../../public/images/shapes1.webp',
      name: 'Templates',
      description: 'Get started with one of 30,000+ templates.',
      ariaLabel: 'Explorar plantillas',
    },
  ];
}
