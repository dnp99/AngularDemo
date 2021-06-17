import { Component } from '@angular/core';
import {CoursesService} from './courses.service';
import { SummaryPipe } from './summary.pipe';
@Component({
    selector:'courses',
    template:`
    {{course.title | uppercase}}<br/>
    {{course.rating | number:'1.1-1' }}<br/>
    {{course.students | number}}<br/>
    {{course.price | currency:'CAD':true:'3.1-1' }}<br/>
    {{course.releaseDate | date:'longDate'}}<br/>
    Custom Pipe example..<br/> 
    {{text | summary:10}}
    `
    // template:`
    // <h2>{{'title123'}}</h2>
    // <ul>
    // <li *ngFor="let course of courses"> {{course}}</li>
    // </ul>
    // <button class="btn btn-primary"  (click)="onSave($event)" >Click</button>
    // <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />
    // `
    // <input #email (keyup.enter)="onKeyUp(email.value)" /> /** Template variable- to get the data enetered in inout box **/
})
export class CoursesComponenet{
  
   courses;
   text="The result of this pipe is not reevaluated when the input is mutated. To avoid the need to reformat the date on every change-detection cycle, treat the date as an immutable object and change the reference when the pipe needs to run again."; 
   email="me@example.com";
   course={
       title:"The title",
       rating:4.9795,
       students:10890,
       price:190.90,
       releaseDate:new Date(2020,3,1)
   }

   constructor(service:CoursesService){ 
    this.courses=service.getCourses();
   }

   onSave($event :any ){
       console.log("Button clicked", $event)
   }

   onKeyUp(){
       console.log("Entered value: "+this.email);
   }
}