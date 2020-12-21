import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: "root",
})
export class ApiService {
    readonly urlApi = "http://localhost:3000/api/film";
    urlOneMovie: any;
    constructor(private http: HttpClient) {}

    getPelis() {
        return this.http.get(this.urlApi);
    }

    getMovie(id: Number) {
        this.urlOneMovie = `http://localhost:3000/api/film/${id}`;
        return this.http.get(this.urlOneMovie);
    }
}
