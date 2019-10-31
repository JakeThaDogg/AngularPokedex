import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {throwError as observableThrowError,  Observable } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getPokemons(): Observable<any> {
    // Setted the limit to 807 to get all the pokemon in one api call
    return this.http.get<any>('https://pokeapi.co/api/v2/pokemon-species?offset=0&limit=807')
    .pipe(
        tap(data => {
          console.log(data);
        }),
        catchError(this.handleError('getPokemons', []))
      );
  }

  getPokemonByUrl(url: string): Observable<any> {
    return this.http.get<any>(url);
  }

  getPokemonById(id): Observable<any> {
    return this.http.get<any>(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return (error);
    };
  }
}
