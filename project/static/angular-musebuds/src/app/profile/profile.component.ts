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

  constructor(private profileService: ProfileService) { }
  ngOnInit() {}

  // Variables
  profile = {};
  user: ProfileData;
  results: Array<ProfileData>;
  data: any = null;
  url: string = 'http://localhost:8000/accounts/'

  // Functions 
  loadUser() {
    this.profileService.getProfiles().subscribe(data => {
      this.data = data;
      this.results = data.results;
      this.user = this.results[0];
      console.log('Name: ' + this.user.name);
      console.log('Gender :' + this.user.gender);
      console.log('Picture :' + this.user.profilePic);
      console.log(this.user.focus);
      console.log('Description : ' + this.user.description);
    });
  }

}
