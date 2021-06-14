import { Component } from '@angular/core';
import {CoursesService} from './courses.service';
@Component({
    selector:'courses',
    template:`
    <h2>{{title}}</h2>
    <ul>
    <li *ngFor="let course of courses"> {{course}}</li>
    </ul>
    <button class="btn btn-primary"  (click)="onSave($event)" >Click</button>
    <input (keyup.enter)="onKeyUp()" />
    `
})
export class CoursesComponenet{
   title='List of Titles1';
   courses; 

   constructor(service:CoursesService){ 
    this.courses=service.getCourses();
   }

   onSave($event :any ){
       console.log("Button clicked", $event)
   }

   onKeyUp(){
       console.log("Enter was pressed");
   }
}