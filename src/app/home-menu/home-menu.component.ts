import { Component } from '@angular/core';
import { foods } from '../customcomponent/header/product';
import { Food } from '../customcomponent/header/product';

@Component({
  selector: 'app-home-menu',
  templateUrl: './home-menu.component.html',
  styleUrl: './home-menu.component.css',
})
export class HomeMenuComponent {
  selectedTab: string = 'tab1';
  initialFood: Food[] = foods;
  foods: Food[] = foods;

  // method to add class dynamically
  selectTab(tab: string): void {
    this.selectedTab = tab;
    const item = this.initialFood.filter((food) => food.tag === tab);
    if (tab === 'tab1') {
      this.foods = this.initialFood;
    } else {
      this.foods = item;
    }
  }
}
