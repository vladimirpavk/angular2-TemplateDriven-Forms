/// <reference path="../../../node_modules/@angular/common/index.d.ts" />
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'my-app',
  templateUrl: './client/app/ts/app.component2.html'
})
export class AppComponent2 implements OnInit{ 

    public clickSubmit(forma: FormGroup){
        console.log(forma);        
    }

    ngOnInit(){   
    }

}