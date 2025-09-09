import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-references',
  imports: [CommonModule],
  templateUrl: './references.html',
  styleUrl: './references.scss'
})
export class References {
  references = [
    {
      name: 'Sahra Müller',
      project: 'Join',
      text: `Falko is a reliable and friendly person. Works in a structured way and writes clear code. I recommend her as a colleague.`,
      link: ''
    },
    {
      name: 'Jonas Becker',
      project: 'TeamFlow',
      text: `Falko brings great energy to the team and always delivers on time. Her code is clean and well-documented.`,
      link: ''
    },
    {
      name: 'Lea Schmidt',
      project: 'DevConnect',
      text: `Working with Falko was a pleasure. She’s focused, detail-oriented, and a great communicator.`,
      link: ''
    },
    {
      name: 'Tom Richter',
      project: 'CodeCraft',
      text: `Falko is a true team player. She’s proactive and always ready to help others improve.`,
      link: ''
    },
    {
      name: 'Anna Weber',
      project: 'PixelForge',
      text: `Her frontend skills are top-notch. Falko has a great eye for design and usability.`,
      link: '#'
    }
  ];
}


