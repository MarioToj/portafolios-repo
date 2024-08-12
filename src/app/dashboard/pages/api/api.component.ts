import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ProductsService } from '../../../services/products.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { CardComponent } from '../../../shared/components/card/card.component';
import { CarouselComponent } from '../../../shared/components/carousel/carousel.component';

@Component({
  selector: 'app-api',
  standalone: true,
  imports: [
    CommonModule, CardComponent, CarouselComponent
  ],
  templateUrl: './api.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ApiComponent {
  
  public productService = inject( ProductsService );
  
  public productsSignal = toSignal(
    this.productService.getProds()
  )

}
