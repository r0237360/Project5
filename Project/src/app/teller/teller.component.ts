import { Component, OnInit } from '@angular/core';
//import { setPriority } from 'os';

@Component({
  selector: 'app-teller',
  templateUrl: './teller.component.html',
  styleUrls: ['./teller.component.css']
})
export class TellerComponent implements OnInit {
 public name: string = 'teller application'
 public teller:number = 0;
 

  
constructor () {
}
  ngOnInit() {
  }

  /*
   Verhoog(){
    this.teller = this.teller + 1 ;
  }

   Verlaag(){
    this.teller = this.teller - 1; 
  }
*/

Verhoog(stap){
  var tel:number = Number(stap);
  this.teller = this.teller + tel ;
}

 Verlaag(stap){
  var tel:number = Number(stap);
  this.teller = this.teller - tel; 
  
}

  Reset() {
    this.teller = 0 ;
  }

}
