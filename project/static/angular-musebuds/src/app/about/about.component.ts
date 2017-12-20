import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent{

sheet = "assets/images/sheet.png";
notes = "assets/images/notes2.png";
combined = "assets/images/combined.png";
guitar = "assets/images/guitar.png";
mic = "assets/images/mic.png";
dancer = "assets/images/dancer.png";
camera = "assets/images/camera.png";

showcase(){
  let combine = document.getElementById("combined");
  let note = document.getElementById("notes");
  let show = document.getElementById("show");
  let collaborate = document.getElementById("collab");
  let intro = document.getElementById("summary");
  

//This deals with all the things in the showcase section.
//Maybe there's a way to thin this messy code, but i'm not too sure how to do
//animations too well yet.
//Basically, I'm toggling the "fade" animation to make the collab portion
//Fade in when it's needed and fade out when it's exiting.
//The two if conditions are counting the 2 situations: 
// 1. If showcase is clicked first.
// 2. If showcase is clicked after collab was clicked.

  if(intro.classList.contains("fadeOut") == false){
    intro.className += "fadeOut";
    intro.style.display = "none";
    show.style.display = "block";
    note.style.display = "block";
    show.classList.toggle("fadeIn");
    note.classList.toggle("fadeIn");
  }

  else if(collaborate.classList.contains("fadeIn")){
      combine.classList.toggle("fadeIn");
      combine.classList.toggle("fadeOut");
      collaborate.classList.toggle("fadeIn");
      collaborate.classList.toggle("fadeOut");
      collaborate.style.display = "none";
      combine.style.display = "none";
      note.style.display = "block";
      show.style.display = "block";
      note.classList.toggle("fadeIn");
      show.classList.toggle("fadeIn");
  }
}


//This deals with all the things in the collab section.
//Maybe there's a way to thin this messy code, but i'm not too sure how to do
//animations too well yet.
//Basically, I'm toggling the "fade" animation to make the collab portion
//Fade in when it's needed and fade out when it's exiting.
//The two if conditions are counting the 2 situations: 
// 1. If collab is clicked first.
// 2. If collab is clicked after showcase was clicked.
collab(){
  let combine  = document.getElementById("combined");
  let note = document.getElementById("notes");
  let show = document.getElementById("show");
  let collaborate = document.getElementById("collab");
  let intro = document.getElementById("summary");
  if(intro.classList.contains("fadeOut") == false){
      intro.className += "fadeOut";
      intro.style.display = "none";
      combine.style.display = "block";
      collaborate.style.display = "block";
      combine.classList.toggle("fadeIn");
      collaborate.classList.toggle("fadeIn");
  }
  
  else if(show.classList.contains("fadeIn")){
      note.classList.toggle("fadeIn");
      note.classList.toggle("fadeOut");
      note.style.display = "none";
      show.classList.toggle("fadeIn");
      show.classList.toggle("fadeOut");
      show.style.display = "none";
      combine.style.display = "block";
      collaborate.style.display = "block";
      combine.classList.toggle("fadeIn");
      collaborate.classList.toggle("fadeIn");
  }
}

//This gets the pic url that you want. You give it a string to let the function know
//which one to return.

getPic(pic){
  if(pic === "n")
    return this.notes;
  else if(pic === "c")
    return this.combined;
  else if(pic === "s")
    return this.sheet;
  else if(pic === "ca")
    return this.camera;
  else if(pic === "m")
    return this.mic;
  else if(pic === "d")
    return this.dancer;
  else if(pic === "g")
    return this.guitar;

}

getURL() {
    return "url('assets/images/bg2.png')"; 
  }
}
