import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-order-confirmed',
  templateUrl: './order-confirmed.component.html',
  styleUrls: ['./order-confirmed.component.css']
})
export class OrderConfirmedComponent implements OnInit {
  name: string = "";
  total: string = "";

  constructor(private activeRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.name = this.activeRoute.snapshot.queryParamMap.get('name') || "ERROR";
    this.total = this.activeRoute.snapshot.queryParamMap.get('total') || "ERROR";
  }

}
