import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteRoutingModule } from './site-routing.module';
import { SiteComponent } from './site.component';
import {SharedModule} from '../../components/shared.module';
import {ProductListingComponent} from '../product-listing/product-listing.component';
import { HomeComponent } from '../home/home.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from "@angular/material/button";
import {CarouselModule} from "ngx-owl-carousel-o";
import {MatCheckboxModule} from '@angular/material/checkbox';
import { AddToBagComponent } from '../../components/add-to-bag/add-to-bag.component';
import { BannersComponent } from '../../components/banners/banners.component';
import {MatRippleModule} from "@angular/material/core";
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import {MatInputModule} from "@angular/material/input";
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';
import {MatStepperModule} from "@angular/material/stepper";
import {ReactiveFormsModule} from "@angular/forms";
import { CartProductListComponent } from '../../components/cart-product-list/cart-product-list.component';
import { RecentProductsComponent } from '../../components/recent-products/recent-products.component';

@NgModule({
  declarations: [SiteComponent, ProductListingComponent, HomeComponent, AddToBagComponent, BannersComponent,
    ProductDetailComponent, ShoppingCartComponent, CartProductListComponent,
    RecentProductsComponent
  ],
  imports: [
    CommonModule,
    SiteRoutingModule,
    SharedModule,
    MatCardModule,
    MatButtonModule,
    CarouselModule,
    MatCheckboxModule,
    MatRippleModule,
    MatInputModule,
    MatStepperModule,
    ReactiveFormsModule
  ]
})
export class SiteModule { }
