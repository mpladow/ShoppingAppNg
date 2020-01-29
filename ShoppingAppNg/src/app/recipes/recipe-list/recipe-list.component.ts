import { Component, OnInit } from "@angular/core";
import { Recipe } from "src/app/models/recipe.module";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.scss"]
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  constructor() {}

  ngOnInit() {
    for (let i = 0; i < 5; i++) {
      let model = new Recipe();
      model.RecipeId = i;
      model.Name = `Test Recipe ${i}`;
      model.Category = "Lunch";
      model.Image =
        "https://assets.epicurious.com/photos/57c5c6d9cf9e9ad43de2d96e/6:4/w_620%2Ch_413/the-ultimate-hamburger.jpg";
      this.recipes.push(model);
    }
  }
  edit(){

  }

  delete(){

  }
  addToShoppingList(){

  }
}
