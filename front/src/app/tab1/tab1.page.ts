import { Component } from "@angular/core";
import { ApiService } from "../api.service";

@Component({
    selector: "app-tab1",
    templateUrl: "tab1.page.html",
    styleUrls: ["tab1.page.scss"],
})
export class Tab1Page {
    clientes: any;

    constructor(private apiService: ApiService) {}

    ionViewDidEnter() {
        this.getClientes();
    }

    getClientes() {
        this.apiService.getPeliculas().subscribe((data) => {
            this.clientes = data;
            console.log(this.clientes);
        });
    }
}
