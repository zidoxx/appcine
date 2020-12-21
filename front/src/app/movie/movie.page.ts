import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api.service";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: "app-movie",
    templateUrl: "./movie.page.html",
    styleUrls: ["./movie.page.scss"],
})
export class MoviePage implements OnInit {
    movie: any;
    passedId = null;
    constructor(
        private activatedRoute: ActivatedRoute,
        private apiService: ApiService
    ) {}

    getOneMovie(id: Number) {
        this.apiService.getMovie(id).subscribe((data) => {
            this.movie = data;
        });
    }

    ngOnInit() {
        this.passedId = this.activatedRoute.snapshot.paramMap.get("id");
        this.getOneMovie(this.passedId);
    }
}
