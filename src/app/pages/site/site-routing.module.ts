import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SiteComponent } from './site.component';
import {ProductListingComponent} from '../product-listing/product-listing.component';
import {HomeComponent} from '../home/home.component';
import {ProductDetailComponent} from '../product-detail/product-detail.component';
import {ShoppingCartComponent} from "../shopping-cart/shopping-cart.component";

const routes: Routes = [{
  path: '',
  component: SiteComponent,
  children: [
    {path: '', component: HomeComponent},
    {path: 'search', component: ProductListingComponent},
    {path: 'search/:category', component: ProductListingComponent},
    {path: 'product/:url', component: ProductDetailComponent},
    {path: 'shopping-cart', component: ShoppingCartComponent}
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteRoutingModule { }
