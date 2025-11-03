import { Routes, RouterModule } from '@angular/router';
import { Landingpage } from './landingpage/landingpage';
import { Imprint } from './imprint/imprint';

export const routes: Routes = [
    { path: "", component: Landingpage },
    { path: "imprint", component: Imprint  }
];

export const routing = RouterModule.forRoot(routes, {
  scrollPositionRestoration: 'disabled',
  anchorScrolling: 'disabled'
});
