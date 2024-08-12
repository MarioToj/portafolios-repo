import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { CarouselComponent } from '../../../shared/components/carousel/carousel.component';
import { Tecnology } from '../../../interfaces/tecnologia.interface';
import { Project } from '../../../interfaces/project.interface';
import { FormComponent } from '../../../shared/components/form/form.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    CommonModule, CarouselComponent, FormComponent
],
  templateUrl: './profile.component.html',
  styles:`
    img {
      object-fit: contain;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ProfileComponent {

  public navItems = [
    { name: 'About', id: 'about'},
    { name: 'Projects', id: 'projects'},
    { name: 'Habilities', id: 'habilties'},
    { name: 'Contacto', id: 'contact'},
  ]

  public projects = signal<Project[]>([
    {  
      id: 1,
      name: 'Maps App',
      img: 'https://www.mappng.com/png-world-maps/2021-07-03216high-detail-color-world-map.png',
      desc: 'Un proyecto personal desarrollado principalmente con Angular, consume una Api, donde podemos buscar paises, regiones y continentes.',
      link: 'https://stately-longma-e941fb.netlify.app/countries/by-capital',
      logos: ['devicon-angularjs-plain colored', 'devicon-rxjs-plain colored', 'devicon-bootstrap-plain-wordmark colored']
    },
    {  
      id: 2,
      name: 'Maps App',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT950I0RMCF6fa_Vdg299jAkYN0CfPRcmNP9A&s',
      desc: 'Un proyecto personal desarrollado con Angular, Rxjs, Servicios y bootstrap',
      link: 'https://stately-longma-e941fb.netlify.app/countries/by-capital',
      logos: ['devicon-angularjs-plain colored', 'devicon-rxjs-plain colored', 'devicon-bootstrap-plain-wordmark colored']
    }
  ]);

  public tecno = signal<Tecnology[]>([
    {  
      id: 1,
      name: 'JavaScript',
      img: 'https://static.vecteezy.com/system/resources/previews/027/127/560/non_2x/javascript-logo-javascript-icon-transparent-free-png.png'
    },
    {  
      id: 2,
      name: 'Angular',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png'
    },
    {  
      id: 3,
      name: 'React',
      img: 'https://miro.medium.com/v2/resize:fit:1200/1*WA_9JsyqFkge2HwYKcdJQw.png'
    },
    {  
      id: 4,
      name: 'Node',
      img: 'https://miro.medium.com/v2/resize:fit:900/1*TY9uBBO9leUbRtlXmQBiug.png'
    },
    {  
      id: 5,
      name: 'Express',
      img: 'https://www.khanwaseem.com/_next/image?url=https%3A%2F%2Fblogwordpressmedia.s3.amazonaws.com%2Fuploads%2F2023%2F01%2F27083940%2Fexpress.png&w=3840&q=75'
    },
    {  
      id: 6,
      name: 'Apollo Server',
      img: 'https://static-00.iconduck.com/assets.00/apollo-icon-2048x2048-zl6zcxhq.png'
    },
    {  
      id: 7,
      name: 'GraphQl',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/1200px-GraphQL_Logo.svg.png'
    },
    {  
      id: 8,
      name: 'Java',
      img: 'https://logos-world.net/wp-content/uploads/2022/07/Java-Logo.png'
    },
    {  
      id: 9,
      name: 'Spring Boot',
      img: 'https://miro.medium.com/v2/resize:fit:1024/1*8QxPAk1bQFmTrkuLERm1wQ.png'
    },
    {  
      id: 10,
      name: 'MySQL',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Database-mysql.svg/1200px-Database-mysql.svg.png'
    },
    {  
      id: 11,
      name: 'MongoDb',
      img: 'https://coralogix.com/wp-content/uploads/2023/03/MongoDB-1000X1000.png'
    },
  ])

  scrollToSection(id: string) {
    const navbarHeight = document.querySelector('.shadow')?.clientHeight || 0;
    const additionalOffset = 300; 
  
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - navbarHeight - additionalOffset,
        behavior: 'smooth'
      });
    }
  }
  
}
