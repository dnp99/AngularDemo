import { Component } from '@angular/core';
import { favouriteChangedEventArgs } from './favourite/favourite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'hello-world Angular';
  post = {
    title: 'Title',
    isFavourite: true,
  };

  tweet = {
    like: 12,
    likedByUser: true,
  };

  onFavouriteChange1(eventArgs: favouriteChangedEventArgs) {
    console.log(eventArgs);
  }
}
