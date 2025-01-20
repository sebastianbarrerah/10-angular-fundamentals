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
