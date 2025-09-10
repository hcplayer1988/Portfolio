import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-my-projects',
  imports: [CommonModule, TranslateModule],
  templateUrl: './my-projects.html',
  styleUrl: './my-projects.scss'
})
export class MyProjects {

  activeProject: 'elPollo' | 'join' = 'elPollo';

  projects = {
    elPollo: {
      technologies: [
        { name: 'HTML', icon: './imgs/icons/html.png' },
        { name: 'CSS', icon: './imgs/icons/css.png' },
        { name: 'JavaScript', icon: './imgs/icons/javaScript.png' }
      ],
      preview: './imgs/img/polllo_loco.png',
      liveLink: 'https://el-pollo-loco.falko-katzer.de/',
      githubLink: 'https://github.com/hcplayer1988/El-Pollo-Loco'
    },
    join: {
      technologies: [
        { name: 'HTML', icon: './imgs/icons/html.png' },
        { name: 'TypeScript', icon: './imgs/icons/typeScript.png' },
        { name: 'Angular', icon: './imgs/icons/angular.png' }
      ],
      preview: './imgs/img/join.png',
      liveLink: 'https://join-app.example.com',
      githubLink: 'https://github.com/yourname/join'
    }
  };

  switchProject(project: 'elPollo' | 'join'): void {
    this.activeProject = project;
  }


}
