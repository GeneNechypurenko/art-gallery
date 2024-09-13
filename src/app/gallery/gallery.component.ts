import { Component, OnInit } from '@angular/core';
import { Art } from '../models/art';
import { ArtService } from '../services/art.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { LogService } from '../services/log.service';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, MatCardModule, FormsModule],
  providers: [ArtService, LogService],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  arts: Art[] = [];
  pageSize: number = 4;
  currentPage: number = 0;
  total: number = 0;
  selectedArt?: Art;

  constructor(private artService: ArtService, private logService: LogService) { }

  ngOnInit() {
    this.total = this.artService.getTotal();
    this.updateGallery();
  }

  updateGallery() {
    this.arts = this.artService.getArts(this.currentPage, this.pageSize);
    this.logService.log(`${this.updateGallery.name}: ${this.currentPage}`);
  }

  prev() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.updateGallery();
      this.logService.log(`${this.prev.name}: ${this.currentPage}`);
    }
  }

  next() {
    if (this.currentPage < Math.ceil(this.total / this.pageSize) - 1) {
      this.currentPage++;
      this.updateGallery();
      this.logService.log(`${this.next.name}: ${this.currentPage}`);
    }
  }

  onSelect(art: Art) {
    this.selectedArt = art;
    this.logService.log(`${this.onSelect.name}: ${art.id}) ${art.title}`);
  }

  closeDetails() {
    this.selectedArt = undefined;
  }
}
