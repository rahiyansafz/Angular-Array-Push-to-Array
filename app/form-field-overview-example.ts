import {Component} from '@angular/core';

/** @title Simple form field */
@Component({
  selector: 'form-field-overview-example',
  templateUrl: 'form-field-overview-example.html',
  styleUrls: ['form-field-overview-example.css'],
})
export class FormFieldOverviewExample {

  imagesArray = [123,2323];
  result = [12355,5454];
 
  getRecord()
  {
      for(var i =0; i <= this.result.length -1 ; i++){
      this.imagesArray.push(this.result[i]);
      console.log(this.imagesArray)
    }

    for(var i = 0; i < this.result.length; i++){
      this.imagesArray.push(this.result[i]);
      console.log(this.imagesArray)
    }
 } 
}


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */