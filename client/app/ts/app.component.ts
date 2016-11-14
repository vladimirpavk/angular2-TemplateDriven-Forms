/// <reference path="../../../node_modules/@angular/common/index.d.ts" />
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'my-app',
  templateUrl: './client/app/ts/app.component.html'
})
export class AppComponent implements OnInit{ 

  public powers: Array<string>;
  public model: Hero;
  public submitted: boolean;

  public onSubmit(): void
  { 
     this.submitted = true; 
  }
  
  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  public clickSubmit(event):void{
    console.log(event);
  }

  ngOnInit(){
    this.powers= ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
    this.model= new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
    this.submitted=false;
  }

}