import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot} from "@angular/router";
import {RequestAPI} from "../../services/RequestAPI";
import {AddToBagComponent} from "../../components/add-to-bag/add-to-bag.component";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss']
})
export class ProductListingComponent implements OnInit {
  @ViewChild(AddToBagComponent) addToBagComponent: AddToBagComponent;

  public word = '';
  public paramMarca = '';
  public sizes: any;
  public cors: any;
  public products: any;
  private paramsCategory: string;
  private paramsWord: string;

  constructor(
    private route: ActivatedRoute,
    private http: RequestAPI,
  ) { }


  ngOnInit(): void {
    this.products = [];
    const params: Observable<string> = this.route.params.pipe(map(p => p.category));
    params.subscribe( category => {
      this.paramsCategory = category;
      this.word = category;
      this.makeRequestAPI();
    });


    this.route.queryParams.subscribe((queryParams: any) => {
      if (queryParams.search !== undefined) {
        this.word = queryParams.search;
        this.paramsWord = this.word;
        this.makeRequestAPI();
      }

    });
  }

  makeRequestAPI(): void {
    this.searchAPISizes();
    this.searAPICors();
    this.searAPIProducts();
  }

  private setSearchWord(word: any): void {
    this.word = word;
  }

  private searchAPISizes(): void {
    const jsonRequest = {
      categoria: this.paramsCategory,
      search: this.paramsWord
    };
    this.http.get('settings/sizes', jsonRequest, false).subscribe( (response: any) => {
      this.sizes = response;
    });
  }

  private searAPICors(): void {
    const jsonRequest = {
      categoria: this.paramsCategory
    };
    this.http.get('settings/cors', jsonRequest, false).subscribe( (response: any) => {
      this.cors = response;
    });
  }

  private searAPIProducts(): void {
    const jsonRequest = {
      categoria: this.paramsCategory,
      search: this.paramsWord
    };
    this.http.get('products', jsonRequest, false).subscribe( (response: any) => {
      console.log(response);
      this.products = response.results;
    });
  }

  addItems(publicacaoId: number) {
    this.addToBagComponent.setAddItemToBag(publicacaoId);
  }

}
