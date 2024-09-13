import { Injectable } from '@angular/core';
import { Art } from '../models/art';
import { LogService } from './log.service';

@Injectable()
export class ArtService {

  private arts: Art[] = [
    new Art(1, 'Joan of Arc', 1879, 'Jules Bastien-Lepage', 'Metropolitan Museum of Art', 'BastienLepage_Jules_Joan_Of_Arc.jpg'),
    new Art(2, 'Haymaking', 1877, 'Jules Bastien-Lepage', 'Musée dOrsay', 'Jules_Bastien-Lepage_-_Hay_making.jpg'),
    new Art(3, 'October', 1878, 'Jules Bastien-Lepage', 'National Gallery of Victoria', 'Jules_Bastien-Lepage_-_October.jpg'),
    new Art(4, 'Harvest Time', 1880, 'Jules Bastien-Lepage', 'National Gallery of Victoria',
        'Jules_Bastien-Lepage_At_Harvest_Time.jpg'),
    new Art(5, 'Young Girl', 1881, 'Jules Bastien-Lepage', 'Musée dOrsay', 'BastianLepage-YoungGirl.jpg'),
    new Art(6, 'Pauvre Fauvette', 1881, 'Jules Bastien-Lepage', 'Musée dOrsay',
        'Bastien-Lepage-Jules_-_Pauvre_Fauvette_1881.jpg'),
    new Art(7, 'Pas Mèche', 1882, 'Jules Bastien-Lepage', 'Scottish National Gallery', 'Jules_Bastien-Lepage_-_Pas_Meche.jpg'),
    new Art(8, 'Going to School', 1882, 'Jules Bastien-Lepage', 'Aberdeen Art Gallery',
        'Going_to_School_-_Jules_Bastien-Lepage.jpg')
  ];

  constructor(private logService: LogService) { }

  getArts(page: number, pageSize: number): Art[] {
    const startIndex = page * pageSize;
    const selectedArts = this.arts.slice(startIndex, startIndex + pageSize);
    
    this.logService.log(`${this.getArts.name}: page: ${page}, page-size: ${pageSize}`);
    
    return selectedArts;
  }

  getTotal(): number {
    this.logService.log(`${this.getTotal.name}: ${this.arts.length}`);
    return this.arts.length;
  }
}
