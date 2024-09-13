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
      'Going_to_School_-_Jules_Bastien-Lepage.jpg'),
    new Art(9, 'Maternal Admiration', 1869, 'William-Adolphe Bouguereau', 'Memphis Brooks Museum of Art',
      'William-Adolphe_Bouguereau_-_Maternal_Admiration.jpg'),
    new Art(10, 'Pleasant Burden', 1895, 'William-Adolphe Bouguereau', 'Memphis Brooks Museum of Art',
      'William-Adolphe_Bouguereau_-_Not_Too_Much_To_Carry.jpg'),
    new Art(11, 'The Haymaker', 1869, 'William-Adolphe Bouguereau', 'Memphis Brooks Museum of Art',
      'William-Adolphe_Bouguereau_-_The_Haymaker.jpg'),
    new Art(12, 'Brother and Sister', 1871, 'William-Adolphe Bouguereau', 'Memphis Brooks Museum of Art',
      'Breton_Brother_and_Sister.jpg'),
    new Art(13, 'Italian Girl', 1871, 'William-Adolphe Bouguereau', 'Memphis Brooks Museum of Art',
      'William-Adolphe_Bouguereau_-_Italian_Girl_Drawing_Water.jpg'),
    new Art(14, 'Charity', 1878, 'William-Adolphe Bouguereau', 'Memphis Brooks Museum of Art',
      'William-Adolphe_Bouguereau_-_Charity.jpg'),
    new Art(15, 'Against Eros', 1880, 'William-Adolphe Bouguereau', 'Memphis Brooks Museum of Art',
      'William-Adolphe_Bouguereau_-_A_Young_Girl_Defending_Herself_Against_Eros.jpg'),
    new Art(16, 'Flagellation', 1880, 'William-Adolphe Bouguereau', 'Memphis Brooks Museum of Art',
      'William-Adolphe_Bouguereau_-_The_Flagellation_of_Our_Lord_Jesus_Christ.jpg'),
    new Art(17, 'The Shepherdess', 1889, 'William-Adolphe Bouguereau', 'Memphis Brooks Museum of Art',
      'William-Adolphe_Bouguereau_-_The_Shepherdess.jpg'),
    new Art(18, 'La Vierge au lys', 1899, 'William-Adolphe Bouguereau', 'Memphis Brooks Museum of Art', 'La_Vierge_au_lys.jpg'),
    new Art(19, 'The Bohemian', 1890, 'William-Adolphe Bouguereau', 'Memphis Brooks Museum of Art',
      'William-Adolphe_Bouguereau_-_The_Bohemian.jpg'),
    new Art(20, 'Bacchante', 1894, 'William-Adolphe Bouguereau', 'Memphis Brooks Museum of Art',
      'William-Adolphe_Bouguereau_-_Bacchante.jpg')
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
