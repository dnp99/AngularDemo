import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css'],
})
export class LikeComponent {
  @Input('totalLikes') totalLikes: number;
  @Input('likedByCurrentUser') likedByCurrentUser: boolean;

  constructor() {
    this.likedByCurrentUser = false;
    this.totalLikes = 0;
  }

  onLikeClick($event: any) {
    this.likedByCurrentUser = !this.likedByCurrentUser;
    console.log('liked by user ? : ' + this.likedByCurrentUser);
    if (this.likedByCurrentUser) {
      this.totalLikes += 1;
    } else {
      this.totalLikes -= 1;
    }
  }
}
