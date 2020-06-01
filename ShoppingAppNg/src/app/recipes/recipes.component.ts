import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/recipe.module';

@Component({
  selector: "app-recipes",
  templateUrl: "./recipes.component.html",
  styleUrls: ["./recipes.component.scss"]
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;
  constructor() {}

  ngOnInit() {}
}
