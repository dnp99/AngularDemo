import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CoursesComponenet } from './courses.component';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';
import { AuthorComponent } from './author/author.component';
import { SummaryPipe } from './summary.pipe';
import { FavouriteComponent } from './favourite/favourite.component';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponenet,
    CourseComponent,
    AuthorComponent,
    SummaryPipe,
    FavouriteComponent,
    PanelComponent,
    LikeComponent
  ],
  imports: [
BrowserModule,
FormsModule
  ],
  providers: [
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
