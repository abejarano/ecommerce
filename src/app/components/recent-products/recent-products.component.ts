import {Component, OnInit, ViewChild} from '@angular/core';
import {AddToBagComponent} from "../add-to-bag/add-to-bag.component";
import {OwlOptions} from "ngx-owl-carousel-o";
import {RequestAPI} from "../../services/RequestAPI";

@Component({
  selector: 'app-recent-products',
  templateUrl: './recent-products.component.html',
  styleUrls: ['./recent-products.component.scss']
})
export class RecentProductsComponent implements OnInit {
  @ViewChild(AddToBagComponent) addToBagComponent: AddToBagComponent;

  public products: any;
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  };
  constructor(
    private http: RequestAPI
  ) { }

  ngOnInit(): void {
    this.http.get('products/recent', '', false).subscribe( (response: any) => {
      this.products = response;
    });
  }

  addItems(publicacaoId: number) {
    this.addToBagComponent.setAddItemToBag(publicacaoId);
  }

}
