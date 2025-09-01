import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-my-skills',
  imports: [CommonModule],
  templateUrl: './my-skills.html',
  styleUrl: './my-skills.scss'
})
export class MySkills {

  skillList: {
    img: string;
    name: string;
  }[] = [
    {
      img: "./imgs/icons/html.png",
      name: "HTML"
    },
   {
      img: "./imgs/icons/css.png",
      name: "CSS"
    },
    {
      img: "./imgs/icons/javaScript.png",
      name: "JavaScript"
    },
    {
      img: "./imgs/icons/angular.png",
      name: "Angular"
    },
    {
      img: "./imgs/icons/typeScript.png",
      name: "TypeScript"
    },
  ]
}
