import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../cocktail.model';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cocktail-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cocktail-details.component.html',
  styleUrl: './cocktail-details.component.scss',
})
export class CocktailDetailsComponent implements OnInit {
  cocktail!: Cocktail;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ cocktail }) => {
      this.cocktail = cocktail;
    });
  }
}
