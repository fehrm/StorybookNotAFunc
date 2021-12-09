import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CatFact } from '../models/cat-fact.model';

const baseUrl = "https://cat-fact.herokuapp.com/facts";

@Injectable({
  providedIn: 'root'
})
export class CatService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<CatFact[]> {
    return this.http.get<CatFact[]>(baseUrl);
  }

  get(nrOfItems: number): Observable<CatFact[]> {
    return this.http.get<CatFact[]>(`${baseUrl}/random?amount=${nrOfItems}`);
  }

}
