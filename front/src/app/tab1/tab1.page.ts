import { Component } from "@angular/core";
import { ApiService } from "../api.service";

@Component({
    selector: "app-tab1",
    templateUrl: "tab1.page.html",
    styleUrls: ["tab1.page.scss"],
})
export class Tab1Page {
    films: any;

    constructor(private apiService: ApiService) {}

    ionViewDidEnter() {
        this.getFilms();
    }

    getFilms() {
        this.apiService.getFilms().subscribe((data) => {
            this.films = data;
            console.log(this.films);
        });
    }
}
