import { Component, OnInit } from '@angular/core';
import {RequestAPI} from "../../services/RequestAPI";
import {OwlOptions} from "ngx-owl-carousel-o";

@Component({
  selector: 'app-banners',
  templateUrl: './banners.component.html',
  styleUrls: ['./banners.component.scss']
})
export class BannersComponent implements OnInit {
  public banners: any;
  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    center: true,
    dots: false,
    autoHeight: true,
    autoWidth: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      }
    }
  };

  constructor(
    private http: RequestAPI
  ) { }

  ngOnInit(): void {
    this.http.get('settings/banners', '', false).subscribe( (response: any) => {
      this.banners = response;
    });
  }

}
