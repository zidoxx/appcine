import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: "root",
})
export class ApiService {
    readonly urlApi = "http://localhost:3000/api/film";
    constructor(private http: HttpClient) {}

    getFilms() {
        return this.http.get(this.urlApi);
    }
}
