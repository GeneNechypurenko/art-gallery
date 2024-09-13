import { Injectable } from '@angular/core';
import { Art } from '../models/art';
import { LogService } from './log.service';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable()
export class ArtService {

  private arts = 'arts.json';

  constructor(private http: HttpClient, private logService: LogService) { }

  getArts(page: number, pageSize: number): Observable<Art[]> {
    const startIndex = page * pageSize;
    this.logService.log(`${this.getArts.name}: page: ${page}, page-size: ${pageSize}`);

    return this.http.get<any[]>(this.arts).pipe(
      map(arts =>
        arts.map(art => new Art(
          art.id,
          art.title,
          art.year,
          art.artist,
          art.museum,
          art.image))
          .slice(startIndex, startIndex + pageSize)
      )
    );
  }

  getTotal(): Observable<number> {
    this.logService.log(`${this.getTotal.name}: ${this.arts.length}`);
    return this.http.get<Art[]>(this.arts).pipe(map(arts => arts.length))
  }
}
