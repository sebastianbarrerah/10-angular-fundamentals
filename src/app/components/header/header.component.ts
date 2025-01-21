import { Component } from '@angular/core';
// import { SubMenuComponent } from '../../sub-menu/sub-menu.component';
import { ImenuItem } from '../../interfaces/menuItems';
import { BannerComponent } from '../../banner/banner.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ BannerComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  public clicado = false;

  public actionClick() {
    this.clicado = true;
  }

  menuItems: ImenuItem[] = [
    {
      href: '/',
      label: 'Ir al inicio',
      icon: '../../../public/svg/notion.svg',
      iconAlt: 'logo de notion',
      className: 'menu__item',
    },
    {
      label: 'Product',
      icon: '../../../public/icon/arrow-bottom.svg',
      iconAlt: 'icono de flecha hacia abajo',
      hasDropdown: true,
      className: 'menu__item menu__item--product',
    },
    {
      label: 'Teams',
      icon: '../../../public/icon/arrow-bottom.svg',
      iconAlt: 'icono de flecha hacia abajo',
      hasDropdown: true,
      className: 'menu__item menu__item--dropdown',
    },
    {
      label: 'Individuals',
      icon: '../../../public/icon/arrow-bottom.svg',
      iconAlt: 'icono de flecha hacia abajo',
      hasDropdown: true,
      className: 'menu__item',
    },
    {
      label: 'Download',
      icon: '../../../public/icon/arrow-bottom.svg',
      iconAlt: 'icono de flecha hacia abajo',
      hasDropdown: true,
      className: 'menu__item',
    },
    {
      label: 'Pricing',
      className: 'menu__item',
    },
  ];

  menuSeparator: ImenuItem[] = [
    {
      label: 'Request a demo',
    },
    {
      label: 'Log in',
    },
    {
      label: 'Get Notion Free',
    },
  ];

}
