import { Component, OnInit, OnChanges } from '@angular/core';
import { ImageService } from '../image/shared/image.service';

//NOTE 48.24 minn
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']

})
export class GalleryComponent implements OnInit {
  title=" my projects"

  visibleImages: any[]= [];

  constructor(private imageService: ImageService) { 

    this.visibleImages = this.imageService.getImages();
  }

  ngOnInit() {
  }

}
