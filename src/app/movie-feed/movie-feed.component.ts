import { Component, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Post } from "../shared/poster.model";

@Component({
  selector: 'app-movie-feed',
  templateUrl: './movie-feed.component.html',
  styleUrls: ['./movie-feed.component.css']
})

export class MovieFeedComponent implements OnInit {
  posts: Post[] = [];
  private feedSelected = 'now_playing';
  nextPage = 1;
  yesFeedSelected = false;
  yesPreviousPage = false;

  constructor(private http: HttpClient) {}


   ngOnInit() {
    this.http
      .get<Post[]>('https://api.themoviedb.org/3/movie/'+ this.feedSelected +'?api_key=97b2f2c2656e5a8bc166291808c8c4b2&language=en-US&page=1')
      .subscribe(fetchedPosts => (this.posts = fetchedPosts['results']));

  }

  onSelectNowPlaying() {
   this.feedSelected = 'now_playing';
    this.http
      .get<Post[]>('https://api.themoviedb.org/3/movie/'+ this.feedSelected +'?api_key=97b2f2c2656e5a8bc166291808c8c4b2&language=en-US&page=1')
      .subscribe(fetchedPosts => (this.posts = fetchedPosts['results']));
      this.yesFeedSelected = true;
    // return this.feedSelected;
  }

  onSelectPopular() {
    this.feedSelected = 'popular';
    this.http
      .get<Post[]>('https://api.themoviedb.org/3/movie/'+ this.feedSelected +'?api_key=97b2f2c2656e5a8bc166291808c8c4b2&language=en-US&page=5')
      .subscribe(fetchedPosts => (this.posts = fetchedPosts['results']));
      this.yesFeedSelected = true;
      return this.feedSelected;

  }

  onSelectUpcoming() {
    this.feedSelected = 'upcoming';
    this.http
    .get<Post[]>('https://api.themoviedb.org/3/movie/'+ this.feedSelected +'?api_key=97b2f2c2656e5a8bc166291808c8c4b2&language=en-US&page=1')
    .subscribe(fetchedPosts => (this.posts = fetchedPosts['results']));
    this.yesFeedSelected = true;
    return this.feedSelected;

  }

  // onNextPage() {
  //    +this.nextPage;
  //   this.nextPage = this.nextPage + 1;
  //   this.http
  //   .get<Post[]>('https://api.themoviedb.org/3/movie/'+ this.feedSelected +'?api_key=97b2f2c2656e5a8bc166291808c8c4b2&language=en-US&page='+ this.nextPage)
  //   .subscribe(fetchedPosts => (this.posts = fetchedPosts['results']));
  //   return this.nextPage;
  // }

  onNextPage() {
   for (let i = 1; i < this.nextPage; i++);
   this.nextPage = this.nextPage + 1;
  //  parseInt(this.nextPage.toString());
  //  this.nextPage.toString()
   this.http
   .get<Post[]>('https://api.themoviedb.org/3/movie/'+ this.feedSelected +'?api_key=97b2f2c2656e5a8bc166291808c8c4b2&language=en-US&page='+ this.nextPage)
   .subscribe(fetchedPosts => (this.posts = fetchedPosts['results']));
   this.yesPreviousPage = true;
   return this.nextPage;
 }

 onPreviousPage() {
  for (let i = 1; i < this.nextPage; i++);
  this.nextPage = this.nextPage - 1;
  this.http
  .get<Post[]>('https://api.themoviedb.org/3/movie/'+ this.feedSelected +'?api_key=97b2f2c2656e5a8bc166291808c8c4b2&language=en-US&page='+ this.nextPage)
  .subscribe(fetchedPosts => (this.posts = fetchedPosts['results']));
  return this.nextPage;
 }
}




