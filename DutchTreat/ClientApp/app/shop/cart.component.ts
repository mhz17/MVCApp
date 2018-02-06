﻿import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { DataService } from "../shared/dataService";

@Component({
    selector: "the-cart",
    templateUrl: "cart.component.html",
    styleUrls: []
})
export class Cart {

    constructor(private data: DataService, private router: Router) { }

    onCheckout() {
        if (this.data.LoginRequired) {
            // Force Login
            this.router.navigate(['login']);
        } else {
            // got to checkout
            this.router.navigate(['checkout']);
        }
    }
}