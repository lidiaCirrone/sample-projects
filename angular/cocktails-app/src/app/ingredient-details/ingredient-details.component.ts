import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ingredient } from '../ingredient.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ingredient-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ingredient-details.component.html',
  styleUrl: './ingredient-details.component.scss',
})
export class IngredientDetailsComponent implements OnInit {
  ingredient: any;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ ingredient }) => {
      this.ingredient = ingredient;
    });
  }
}
