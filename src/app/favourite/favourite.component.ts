import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})

export class FavouriteComponent  {
  currentFavouriteClass=''; //initialize with empty;

  constructor() { 
    this.currentFavouriteClass="bi-star";
  }

  onFavouriteClick(event:any){

    console.log(event.target.className);
    let className= event.target.className?event.target.className:'';
    if(className.includes('fill')){
      this.currentFavouriteClass="bi-star"
    }else
    this.currentFavouriteClass="bi-star-fill";
  }
 

}
