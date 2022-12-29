import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Game } from "../../models/game";

const BASE_URL = 'http://localhost:3000';

@Injectable({
  providedIn: "root"
})
export class GamesService {
    model = 'games'

    constructor(private http: HttpClient){}

    all():Observable<Game[]> {
      return this.http.get<Game[]>(this.getUrl())
    }

    find(id){
      return this.http.get(this.getUrlId(id))
    }

    create(game) {
      return this.http.post(this.getUrl(), game )
    }

    update(game) {
      return this.http.put(this.getUrlId(game.id), game)
    }

    delete(id){
      return this.http.delete(this.getUrlId(id))
    }

    private getUrl() {
      return `${BASE_URL}/${this.model}`
    }

    private getUrlId(id) {
      return `${this.getUrl()}/${id}`
    }
}
