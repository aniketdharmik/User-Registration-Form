import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

export interface ProfileData{
  name:string;
  email:string;
  bio:string;
  img:string;
}

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

//profileData: ProfileData[] = [];

profileData:any;

data!: any[];

  constructor(private http: HttpClient) {   }

  ngOnInit(): void {
    this.http.get('https://mocki.io/v1/611a3036-4420-48a5-b8da-9b461853cdd2').subscribe(Response => {
      if(Response){
       this.profileData = JSON.parse(JSON.stringify(Response));
       //this.data = this.profileData;
      }
      //console.log(this.data);
    });
  }
}
