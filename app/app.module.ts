import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ImageService } from './image/shared/image.service';

import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageDetailComponent } from './image/image-detail.component';
import { AboutComponent } from './about/about.component';
// import { appRoutes } from '../routes';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectsComponent,
    FooterComponent,
    ContactComponent,
    NavbarComponent,
    GalleryComponent,
    ImageDetailComponent,
    AboutComponent
   
    
  ],
  imports: [
    BrowserModule,
    
    RouterModule.forRoot([

      {path: '', component: HomeComponent },
      {path: 'projects', component: ProjectsComponent },
      {path: 'about', component: AboutComponent },
      {path: 'contact', component: ContactComponent },

    { path: "gallery", component: GalleryComponent},
    { path: "image/:id", component: ImageDetailComponent},
    { path: "", redirectTo: "/gallery", pathMatch: 'full'},
   

    ])
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
