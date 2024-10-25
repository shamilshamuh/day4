import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { AboutComponent } from './page/about/about.component';
import { ErorrComponent } from './UI/erorr/erorr.component';
import { registerAppScopedDispatcher } from '@angular/core/primitives/event-dispatch';
import { RecipesComponent } from './page/recipes/recipes.component';
import { IngredientsComponent } from './page/ingredients/ingredients.component';

export const routes: Routes = [
  {
    path:'', component: HomeComponent
  },
  {
    path:'recipes', component: RecipesComponent
  },
  {
    path:'ingredients',component: IngredientsComponent
  },
  {
    path:'about us',component: AboutComponent
  },
  {
    path:'**',component: ErorrComponent
  },
];
