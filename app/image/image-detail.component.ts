import { Component, OnInit } from '@angular/core';
import { ImageService } from './shared/image.service';
import {ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent implements OnInit {
  //create service to be injecter at constructor below..

 image:any
  constructor(private imageService: ImageService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.image = this.imageService.getImage(
      +this.route.snapshot.params['id']
    )
  }

}

