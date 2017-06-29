/**
 * Created by Joshua Baert on 6/29/2017.
 */

import {Router, RouterModule} from '@angular/router';

// Import Components
import { HomeComponent } from './home/home.component';

export const routing = RouterModule.forRoot([
  {path: '', component: HomeComponent}
]);
