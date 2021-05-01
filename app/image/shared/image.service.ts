import {Injectable } from '@angular/core';

@Injectable()

export class ImageService{

    visibleImages = [];

    getImages(){
        return this.visibleImages = IMAGES.slice(0);
    };

    
    getImage(id: number){
    return IMAGES.slice(0).find(image => image.id ==id)

    }

}


const IMAGES = [

    {"id": 1, "category": "Sass", "Caption": "Artist Portfolio Gallery", "url2":  "assets/images/DanielaValentino-300ThumbNail.jpg","url": "assets/images/DanielaValentino-fullsize.JPG"},
    {"id": 2, "category": "BootStrap", "Caption": "Sport Blog", "url2":  "assets/images/ConejoSports-300ThumbNail.jpg","url":"assets/images/ConejoSportsFullsize.jpg" },
    {"id": 3, "category": "JQuery", "Caption": "Sugar Table Index", "url2":  "assets/images/SugarElutionApp-300ThumbNail.jpg", "url":"assets/images/SugarElutionApp-fullsize.jpg"},
    {"id": 4, "category": "JQuery", "Caption": "Memmory Game", "url2":  "assets/images/memoryGame-300ThumbNail.jpeg", "url":"assets/images/memoryGameFullsize.JPG"},
    {"id": 5, "category": "WordPress", "Caption": "Freelance Website, Elmentor", "url2":  "assets/images/audasites-300-ThumbNail.jpg", "url":"assets/images/audasites-fullsize.jpg"},
    {"id": 6, "category": "WordPress", "Caption": "E-Commerce Website", "url2":  "assets/images/NirvanaBioresources-300ThumbNail.jpg", "url":"assets/images/NirvanaBioresourcesFullSize.jpg"}
    

];