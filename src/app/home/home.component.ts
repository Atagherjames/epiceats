import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  foodDescription: string[] = ['healthy', 'quality', 'tasty'];
  description: string = '';

  ngOnInit(): void {
    this.deleter();
  }

  deleter() {
    let currentFoodIndex = 0;
    let i = this.foodDescription[currentFoodIndex].length;

    setInterval(() => {
      if (
        !this.foodDescription ||
        currentFoodIndex >= this.foodDescription.length
      ) {
        // Reset to the first item if the array is not defined or reached the end
        currentFoodIndex = 0;
        i = this.foodDescription[currentFoodIndex].length;
      }

      if (this.foodDescription[currentFoodIndex]) {
        this.description = this.foodDescription[currentFoodIndex].slice(0, i);
        i--;

        if (i < 0) {
          currentFoodIndex++;
          i = this.foodDescription[currentFoodIndex]?.length;
        }
      }
    }, 500);
  }
}
