import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, OnChanges, SimpleChanges } from '@angular/core';
import { Product } from '../../../interfaces/products.interface';
import { RouterModule } from '@angular/router';
import { Project } from '../../../interfaces/project.interface';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [
    CommonModule, RouterModule
  ],
  templateUrl: './carousel.component.html',
  styles: `
    img {
      width: 200px; 
      height: 200px;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselComponent implements OnChanges {
  
  public products = input<Product[]>();
  public projects = input<Project[]>();

  ngOnChanges(changes: SimpleChanges) {
    if (changes['products']) {
      this.resetCarousel();
    } else if (changes['projects']) {
      this.resetCarousel();
    } 
  }

  currentIndex = 0;
  get totalSlides(): number {
    return this.products()!.length!
  }

  get totalSlidesProjects(): number {
    return this.projects()!.length!
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex === 0) ? this.totalSlides - 1 : this.currentIndex - 1;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex === this.totalSlides - 1) ? 0 : this.currentIndex + 1;
  }

  prevSlideProject() {
    this.currentIndex = (this.currentIndex === 0) ? this.totalSlidesProjects - 1 : this.currentIndex - 1;
  }

  nextSlideProject() {
    this.currentIndex = (this.currentIndex === this.totalSlidesProjects - 1) ? 0 : this.currentIndex + 1;
  }

  resetCarousel() {
    this.currentIndex = 0;
  }
}
