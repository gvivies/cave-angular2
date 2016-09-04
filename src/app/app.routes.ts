import { Routes, RouterModule }   from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HeaderComponent } from './header';
import { WelcomeComponent } from './welcome/welcome.component';
import { BottlesComponent } from './bottles/bottles.component';

const appRoutes: Routes = [
  { path: 'bottles', component: BottlesComponent },
  { path: '', component: WelcomeComponent }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
