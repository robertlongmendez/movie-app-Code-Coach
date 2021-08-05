import { Injectable } from "@angular/core";
import { ActivatedRoute, Resolve, RouterStateSnapshot } from "@angular/router";
import { DataStorageService } from "../shared/data-storage.service";

import { Movie } from "./movie.model";

@Injectable({providedIn: 'root'})
export class MoviesResolverService implements Resolve<Movie[]> {
  constructor(private dataStorageService: DataStorageService) {}

  resolve(route: ActivatedRoute, state: RouterStateSnapshot) {

  }
}
