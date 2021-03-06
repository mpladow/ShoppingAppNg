import { RecipesComponent } from './recipes/recipes.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingListComponent } from './ShoppingList/shopping-list/shopping-list.component';

const routes: Routes = [
  { path: "", component: RecipesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
