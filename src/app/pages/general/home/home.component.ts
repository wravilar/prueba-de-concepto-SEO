import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

import { environment } from '../../../../environments/environment';

import { Feature } from './feature';

import { SeoService } from '../../../services/seo/seo.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  name = environment.application.name;
  version = environment.application.version;
  bootstrap = environment.application.bootstrap;
  fontawesome = environment.application.fontawesome;

  features: Array<Feature>;

  constructor(private seoService: SeoService) {

    const content =
      'This application was developed with ' + this.version + ' and ' + this.bootstrap +
      ' It applies Routing, Lazy loading and Progressive Web App (PWA)';

    const title = 'angular-seo Title : Home Page';

    this.seoService.setMetaDescription(content);
    this.seoService.setMetaTitle(title);


    this.features =
      [
        {
          name: 'Uso de Bootstrap',
          description: 'Cómo utilizar botones, alertas, paginación, tablas y colapsos',
          icon: 'fab fa-bootstrap',
          link: 'bootstrap'
        },
        {
          name: 'Componentes',
          description: 'Componente de canal con entrada y salida ',
          icon: 'far fa-clone',
          link: 'components'
        },
        {
          name: 'Services',
          description: 'servicios para ver una lista y reproductor de youtube',
          icon: 'fas fa-handshake',
          link: 'services'
        },
        {
          name: 'Formularios',
          description: 'Modelos para manejar entradas de formularios',
          icon: 'far fa-file-alt',
          link: 'forms'
        },

      ];
  }


}
