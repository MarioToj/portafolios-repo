import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
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
    { name: 'Contact', id: 'contact'},
  ]

  public footerItems = [
    { id: 1, name: 'Gmail',
      link: '/cvProgra.pdf',
      download: 'download',
      img: 'https://cdn0.iconfinder.com/data/icons/job-resume-1/665/7-_Download_Resume-512.png'},
    { id: 1, name: 'LinkedIn',
      download: '',
      link: 'https://www.linkedin.com/in/mario-toj-alvarez/',
      img: 'https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png'},
    { id: 1, name: 'GitHub',
      download: '',
      link: 'https://github.com/MarioToj',
      img: 'https://cdn-icons-png.flaticon.com/512/25/25231.png'},
    { id: 1, name: 'Gmail',
      link: '',
      download: '',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/1200px-Gmail_icon_%282020%29.svg.png'},
  ]

  public projects = signal<Project[]>([
    {  
      id: 1,
      name: 'Rocksauce',
      img: 'https://yt3.googleusercontent.com/ytc/AIdro_k-yWTreNkQauy990r2GYZQGWktJDKUKYPZM_UmcktFmlI=s900-c-k-c0x00ffffff-no-rj',
      desc: 'Es un proyecto freelance desarrollado con Wordpress y Divi Builder, siguiendo diseños hechos en figma.',
      logos: ['devicon-wordpress-plain', 'devicon-php-plain colored', 'devicon-css3-plain colored', 'devicon-javascript-plain colored']
    },
    {  
      id: 2,
      name: 'NTRINSEC',
      img: 'https://yt3.googleusercontent.com/ieSVb6XQYR32aFdltcodR7o0g1RCGjdm4L8ste2QbWwLqlWWIfqoS_NS6_5L7BdTzQGUvvUwzw=s900-c-k-c0x00ffffff-no-rj',
      desc: 'Es un proyecto freelance desarrollado con Wordpress y elementor, siguiendo diseños hechos en figma.',
      logos: ['devicon-wordpress-plain', 'devicon-php-plain colored', 'devicon-css3-plain colored', 'devicon-javascript-plain colored']
    },
    {  
      id: 3,
      name: 'Maps App',
      img: 'https://www.mappng.com/png-world-maps/2021-07-03216high-detail-color-world-map.png',
      desc: 'Un proyecto personal desarrollado principalmente con Angular, consume una Api, donde podemos buscar paises, regiones y continentes.',
      link: 'https://stately-longma-e941fb.netlify.app/countries/by-capital',
      logos: ['devicon-angularjs-plain colored', 'devicon-rxjs-plain colored', 'devicon-bootstrap-plain-wordmark colored']
    },
    {  
      id: 4,
      name: 'Dashboard de usuarios',
      img: 'https://www.itsolutionstuff.com/upload/laravel-8-inertia-js-crud-index.png',
      desc: 'Un proyecto de la universidad hecho con PHP, MySQL y Boostrap, arquitectura MVC, en esta aplicacion podemos gestionar a nuestros usuarios, sus roles y ver sus detalles.',
      link: 'https://php-users-production.up.railway.app',
      logos: ['devicon-php-plain colored', 'devicon-css3-plain colored', 'devicon-javascript-plain colored', 'devicon-bootstrap-plain-wordmark colored']
    },
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
    const element = document.getElementById(id);


    if (element?.id == "about") {
      window.scrollTo({
        top: element.offsetTop - 364,
        behavior: 'smooth'
      });
    } else if(element?.id == "habilties") {
      window.scrollTo({
        top: element.offsetTop - 94,
        behavior: 'smooth'
      });
    } else if(element?.id == "contact") {
      window.scrollTo({
        top: element.offsetTop - 94,
        behavior: 'smooth'
      });
    } else {
      window.scrollTo({
        top: element!.offsetTop - 272,
        behavior: 'smooth'
      });
    }
  }

  downloadCV() {
    const link = document.createElement('a');
    link.href = 'assets/cvProgra.pdf';  
    link.download = 'cvProgra.pdf';  
    link.click();
  }
  
  
}
