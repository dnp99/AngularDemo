import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css'],
})
export class FavouriteComponent implements OnInit {
  @Input('isFavorite') isFavourite: boolean;
  @Output('change') change1 = new EventEmitter();

  constructor() {
    this.isFavourite = false;
  }

  onFavouriteClick(event: any) {
    // let className= event.target.className?event.target.className:'';
    // if(className.includes('fill')){
    //   this.currentFavouriteClass="bi-star"
    // }else
    // this.currentFavouriteClass="bi-star-fill";
    this.isFavourite = !this.isFavourite;
    this.change1.emit({ newValue: this.isFavourite }); //notify about change
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
}

export interface favouriteChangedEventArgs {
  newValue: boolean;
}
