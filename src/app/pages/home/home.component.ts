import {Component, OnInit, ViewChild} from '@angular/core';
import {RequestAPI} from "../../services/RequestAPI";
import {OwlOptions} from "ngx-owl-carousel-o";
import {AddToBagComponent} from "../../components/add-to-bag/add-to-bag.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  constructor(
    private http: RequestAPI
  ) { }

  ngOnInit(): void {

  }


}
