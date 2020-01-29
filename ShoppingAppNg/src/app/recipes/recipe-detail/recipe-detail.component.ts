import { Component, OnInit } from "@angular/core";
import { Recipe } from "src/app/models/recipe.module";

@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.component.html",
  styleUrls: ["./recipe-detail.component.scss"]
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  constructor() {}

  ngOnInit() {
    let model = new Recipe();
    model.Name = `Hamburger One`;
    model.Category = "Lunch";
    model.Image =
      "https://assets.epicurious.com/photos/57c5c6d9cf9e9ad43de2d96e/6:4/w_620%2Ch_413/the-ultimate-hamburger.jpg";
    this.recipe = model;
  }
}
