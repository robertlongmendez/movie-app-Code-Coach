import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


import { Movie } from 'src/app/movies/movie.model';
import { MovieService } from 'src/app/movies/movie.service';

@Component({
  selector: 'app-movie-feed-item',
  templateUrl: './movie-feed-item.component.html',
  styleUrls: ['./movie-feed-item.component.css']
})
export class MovieFeedItemComponent {
  @Input() title: string;
  @Input() content: string;
  @Input() poster: string;
  @Input() date: string;
  feedImage = '';


constructor(private movieService: MovieService, private modalService: NgbModal) {}



onAddMovieToList() {
    this.feedImage = 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/'+ this.poster;

  const newMovie = new Movie(
    this.title,
    this.content,
    this.feedImage,
    this.date
  )
  this.movieService.addMovie(newMovie);

}

// openWindowCustomClass(content) {
//   this.modalService.open(content, { windowClass: 'dark-modal' });
// }
}
