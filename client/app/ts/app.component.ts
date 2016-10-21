/// <reference path="../../../node_modules/@angular/common/index.d.ts" />
import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  templateUrl: './client/app/ts/app.component.html'
})
export class AppComponent { 

  public username:string;

  public submit(form_value:any):void{
    console.log(form_value);
  }
}