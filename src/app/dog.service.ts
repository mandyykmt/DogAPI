import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Dog } from "./models";
import { Observable, firstValueFrom, map } from "rxjs";

@Injectable()
export class DogService {

    private url : string = 'https://dog.ceo/api/breeds/image/random'

    constructor(
        private http: HttpClient
    ) {}
    
    getDogAsObservable(): Observable<Dog> {
        return this.http.get<Dog>(this.url)
    }

    getDogAsObservableImage(): Observable<string> {
        return this.http.get<Dog>(this.url)
                .pipe(
                    map(resp => resp.message)
                )
    }

    getDogAsPromise(): Promise<Dog> {
        return firstValueFrom(this.http.get<Dog>(this.url))
    }
   
    getDogAsPromiseImage(): Promise<string> {
        return firstValueFrom(this.http.get<Dog>(this.url))
                                .then(resp => resp.message)
    }
}