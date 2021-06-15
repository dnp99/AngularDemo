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
    <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />
    `
    // <input #email (keyup.enter)="onKeyUp(email.value)" /> /** Template variable- to get the data enetered in inout box **/
})
export class CoursesComponenet{
   title='List of Titles1';
   courses; 
   email="me@example.com";

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