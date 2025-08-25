import { Routes } from '@angular/router';
import { Landingpage } from './landingpage/landingpage';
import { Imprint } from './imprint/imprint';

export const routes: Routes = [
    { path: "", component: Landingpage },
    { path: "imprint", component: Imprint  }
];
