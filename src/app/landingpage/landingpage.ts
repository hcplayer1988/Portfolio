import { Component } from '@angular/core';
import { Hero } from '../components/hero/hero';
import { MyProjects } from '../components/my-projects/my-projects';
import { MySkills } from '../components/my-skills/my-skills';
import { References } from '../components/references/references';
import { WhyMe } from '../components/why-me/why-me';
import { Contact } from "../components/contact/contact";


@Component({
  selector: 'app-landingpage',
  imports: [Hero, WhyMe, MyProjects, MySkills, References, Contact],
  templateUrl: './landingpage.html',
  styleUrl: './landingpage.scss'
})
export class Landingpage {

}
