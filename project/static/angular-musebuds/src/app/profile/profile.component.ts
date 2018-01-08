import { ProfileService } from './../services/profile.service';
import { Component, OnInit } from '@angular/core';

interface ProfileData {
  name: string;
  gender: string;
  description: string;
  profilePic: string;
  focus: Array<{ sk: string, sk2: string, sk3: string }>;
}

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  // Variables
  profile = {};
  user: ProfileData;
  results: Array<ProfileData>;
  data: any = null;
  url: string = 'http://localhost:8000/accounts/';
  name: string; 
  gender: string;
  picture: string;
  focus: Array<any>;
  description: string[];

  constructor(private profileService: ProfileService) { }
  ngOnInit() {
    this.profileService.getProfiles().subscribe(data => {
      this.data = data;
      this.results = data.results;
      this.user = this.results[0];
      this.name = this.user.name;
      this.gender = this.user.gender;
      this.picture = this.user.profilePic;
      this.focus = this.user.focus;
      this.description = this.user.description.split('\n');
      console.log('Name: ' + this.user.name);
      console.log('Gender :' + this.user.gender);
      console.log('Picture :' + this.user.profilePic);
      console.log(this.user.focus);
      console.log('Description : ' + this.user.description);
    });
  }

  // Functions 
   getInfo(choice: string) {
      if (choice === "name") {
        return this.name;
      }
      else if(choice === "gender") {
        return this.gender;
      }
      else if(choice === "picture") {
        return this.picture;
      }
      else if(choice === "focus") {
        return this.focus;
      }
      else if(choice === "desc") {
        return this.description;
      }
   }
}
