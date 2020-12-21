import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api.service";
import { ActivatedRoute } from "@angular/router";
import { AlertController } from "@ionic/angular";

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
        private apiService: ApiService,
        public alertController: AlertController
    ) {}

    getOneMovie(id: Number) {
        this.apiService.getMovie(id).subscribe((data) => {
            this.movie = data;
        });
    }

    async presentAlertConfirm(nomPeli: String, codPeli: Number) {
        const alert = await this.alertController.create({
            cssClass: "my-custom-class",
            header: "Favoritos",
            message:
                "Deseas agregar <strong>" + nomPeli + "</strong> a favoritos?",
            buttons: [
                {
                    text: "Cancel",
                    role: "cancel",
                    cssClass: "secondary",
                    handler: (blah) => {
                        console.log("Cancelado");
                    },
                },
                {
                    text: "Agregar",
                    handler: () => {
                        console.log("Agregado");
                    },
                },
            ],
        });

        await alert.present();
    }

    ngOnInit() {
        this.passedId = this.activatedRoute.snapshot.paramMap.get("id");
        this.getOneMovie(this.passedId);
    }
}
