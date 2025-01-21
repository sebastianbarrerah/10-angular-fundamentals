import { Component } from '@angular/core';
import { SubMenuComponent } from '../../sub-menu/sub-menu.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SubMenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  public clicado = false;

  public actionClick() {
    this.clicado = true;
  }

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
  }
]

  subMenu = [
    { label: 'Product' },
    { label: 'Engineering' },
    { label: 'Design' },
    { label: 'Marketing' },
    { label: 'IT' },
    { label: 'Startups' },
    { label: 'Enterprise' },
    { label: 'Customer stories' },
  ];

  menuDrow = [
    { label: 'Product' },
    { label: 'Engineering' },
    { label: 'Design' },
    { label: 'Marketing' },
    { label: 'IT' },
    { label: 'Startups' },
    { label: 'Enterprise' },
    { label: 'Customer stories' },
  ];
}



  // <img
  //         src="../../../public/svg/headSpace.svg"
  //         alt="logo de headSpace"
  //         class="information__items"
  //       />

  //       <img
  //         src="../../../public/svg/remote.svg"
  //         alt="logo de remote"
  //         class="information__items"
  //       />

  //       <img
  //         src="../../../public/svg/password.svg"
  //         alt="logo de password"
  //         class="information__items"
  //       />

  //       <img
  //         src="../../../public/svg/figma.svg"
  //         alt="logo de figma"
  //         class="information__items information__items--figma"
  //       />
