import { Component, OnInit } from '@angular/core';
import {RequestAPI} from '../../services/RequestAPI';

@Component({
  selector: 'app-menu-horizontal',
  templateUrl: './menu-horizontal.component.html',
  styleUrls: ['./menu-horizontal.component.scss']
})
export class MenuHorizontalComponent implements OnInit {
  public categories: any;

  constructor(
    private http: RequestAPI
  ) { }

  ngOnInit(): void {
    this.http.get('category/tree', '', false).subscribe( (response: any) => {
      this.categories = response;
    });
  }

}
