import { Component, OnInit } from '@angular/core';
import {RequestAPI} from "../../services/RequestAPI";
import {ActivatedRoute} from "@angular/router";
import {OwlOptions} from "ngx-owl-carousel-o";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  public produto: any;
  public detalheProduto = [];
  public imagens = [];
  public cors = [];
  public imagen: string;
  public size = [];
  public sizeSelect: string;
  public corSelect: string
  public quantityAvailable: number;

  customOptions: OwlOptions = {
    loop: false,
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
        items: 4
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
    private http: RequestAPI,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.quantityAvailable = 0;
    this.produto = [];
    this.searchProductAPI(this.route.snapshot.params.url);
  }

  private searchProductAPI(urlProduto: string) {
    this.http.get('detail/product/' + urlProduto, '', false).subscribe( (response: any) => {
      this.produto = response;
      this.size = response.cor[0].tamanho;
      this.cors = response.cor;

      this.imagen = response.cor[0].imagens[0];
      this.imagens = response.cor[0].imagens;
      this.selectCor(this.cors[0].nome);

    });
  }

  changeIamgen(imagen): void {
    this.imagen = imagen;
  }

  selectSize(size: string) {
    this.sizeSelect = size;
    for (const item of this.size) {
      if (item.nome == size) {
        this.quantityAvailable = item.quantidade;
      }
    }
  }
  selectCor(cor: string) {
    this.corSelect = cor;
    for (const item of this.produto.cor) {
      if (item.nome == cor) {
        this.size = item.tamanho;
        this.imagen = item.imagens[0];
        this.imagens = item.imagens;
        this.selectSize(item.tamanho[0].nome);
      }
    }
  }
}
