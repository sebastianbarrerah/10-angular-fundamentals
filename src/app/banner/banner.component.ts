import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  imports: [],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss',
})
export class BannerComponent {
  iconsHeader = [
    {
      src: '../../../public/svg/headSpace.svg',
      alt: 'logo de headSpace',
      class: 'information__items',
    },
    {
      src: '../../../public/svg/remote.svg',
      alt: 'logo de remote',
      class: 'information__items',
    },
    {
      src: '../../../public/svg/password.svg',
      alt: 'logo de password',
      class: 'information__items',
    },
    {
      src: '../../../public/svg/figma.svg',
      alt: 'logo de figma',
      class: 'information__items information__items--figma',
    },
  ];
}
