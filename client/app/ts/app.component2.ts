/// <reference path="../../../node_modules/@angular/common/index.d.ts" />
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';


@Component({
  selector: 'my-app',
  templateUrl: './client/app/ts/app.component2.html'
})
export class AppComponent2 implements OnInit{ 

    public clickSubmit(forma:any){
        console.log(forma.value);
    }

    ngOnInit(){   
    }

}