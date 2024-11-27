import { Component , OnInit , Input } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  FaceSnaps!: FaceSnap[];
  mySnap! : FaceSnap ; 
  otherSnap!:FaceSnap;
  lastSnap!:FaceSnap;

ngOnInit () {
  this.FaceSnaps=[
    {
      title:'Archibald',
      description:'Mon Meilleur ami depuis tout petit',
      imageUrl:'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      createdDate: new Date(),
      snaps : 0 

    }, 
    {
      title:'three rock mountain',
      description:'endroit magnifique ',
      imageUrl:'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      createdDate: new Date(),
      snaps : 0 
    }, 
    {
      title:'un bon repas ',
      description:'yummm c bon !',
      imageUrl:'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
      createdDate: new Date(),
      snaps : 0 
    }
  ];
}
} 