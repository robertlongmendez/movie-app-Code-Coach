import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators'

import { MovieService } from '../movies/movie.service';
import { Movie } from '../movies/movie.model';

@Injectable({providedIn: 'root'})
export class DataStorageService {
  constructor(private http: HttpClient, private movieService: MovieService) {}

    storeMovies() {
      const movies = this.movieService.getMovies();
      return this.http.put('https://movie-database-tool-default-rtdb.firebaseio.com/movies.json',
      movies)
      .subscribe(response =>
      {
        console.log(response);
      });
    }

    fetchMovies() {
      return this.http.get<Movie[]>('https://movie-database-tool-default-rtdb.firebaseio.com/movies.json')
//       .pipe(
//         map(movies => {
//           return movies.map(movie =>  {
//             return {...movie}
//           });
//         }),tap(movies => {}
// )
//       );
      .subscribe(movies => {
        this.movieService.setMovies(movies)
        console.log(movies);
      });
    }

}
   // .pipe(
      //   map(responseData => {
      //   const moviesArray: Movie[] = [];
      //   for (const key in responseData) {
      //     if (responseData.hasOwnProperty(key)) {
      //       moviesArray.push({ ...responseData[key], id: key })
      //     }
      //   }
      //   return moviesArray;
      // })
      // )
