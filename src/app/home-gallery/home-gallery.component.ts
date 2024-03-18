import { Component } from '@angular/core';
import { gallery } from './gallery';
import { Gallery } from './gallery';

@Component({
  selector: 'app-home-gallery',
  templateUrl: './home-gallery.component.html',
  styleUrl: './home-gallery.component.css',
})
export class HomeGalleryComponent {
  selectedTab: string = 'tab1';
  initialGallery: Gallery[] = gallery;
  galleries: Gallery[] = gallery;

  // method to add class dynamically
  selectTab(tab: string): void {
    this.selectedTab = tab;
    const image = this.initialGallery.filter((gallery) => gallery.tag === tab);

    if (tab === 'tab1') {
      this.galleries = this.initialGallery;
    } else {
      this.galleries = image;
    }
  }
}
