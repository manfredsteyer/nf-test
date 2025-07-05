import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { loadRemoteModule } from '@softarc/native-federation-runtime';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'angularMaterialApp',
    loadComponent: () => loadRemoteModule('angularMaterialApp', './Component')
  }
];
