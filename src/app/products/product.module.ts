import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list.component';
import { ProductGuardService } from './product-guard.service';
import { ProductDetailComponent } from './product-detail.component';
import { SharedModule } from '../shared/shared.module';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { ProductService } from './product.service';


@NgModule({
  imports: [
    RouterModule.forChild([
        { path: 'products', component: ProductListComponent },
        { path: 'products/:id',
          canActivate: [ ProductGuardService ],
          component: ProductDetailComponent }
    ]),
    SharedModule
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe
  ],
  providers: [
    ProductService,
    ProductGuardService
  ]
})
export class ProductModule { }