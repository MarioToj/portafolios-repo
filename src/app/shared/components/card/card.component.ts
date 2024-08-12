import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/products.service';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    CommonModule, 
  ],
  templateUrl: './card.component.html',
  styles: `
  
    img {
      width: 200px;
      height: 200px;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  
  private productService = inject( ProductsService );
  private route = inject( ActivatedRoute );
  
  public product = toSignal(
    this.route.params.pipe(
      switchMap(({ id }) => this.productService.getProdsById( id )),
    ),
  );

}
