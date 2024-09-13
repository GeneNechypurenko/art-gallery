import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { GalleryComponent } from './app/gallery/gallery.component';

bootstrapApplication(GalleryComponent, appConfig).catch((err) => console.error(err));
