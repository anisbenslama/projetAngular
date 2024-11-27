import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

 
@Component({
  selector: 'app-face-snap-g1',
  templateUrl: './face-snap-g1.component.html',
  styleUrls: ['./face-snap-g1.component.scss']
})
export class FaceSnapG1Component {
  @Input() faceSnap!: FaceSnap;
  
  buttonText!: string;
  mySnap!: FaceSnap;


  ngOnInit(){
    this.buttonText ='oh Snap!';
    
  }

  onSnap() {
    //if (this.buttonText === 'Oh Snap!') {
      //this.snaps++;
      //this.buttonText = 'Oops, unSnap!';
    //} else {
      //this.snaps--;
      //this.buttonText = 'Oh Snap!';

      if (this.buttonText === 'Oh Snap!') {
        this.faceSnap.snaps++;
        this.buttonText = 'Oops, unSnap!';
      } else {
        this.faceSnap.snaps--;
        this.buttonText = 'Oh Snap!'
      }
    }
  }