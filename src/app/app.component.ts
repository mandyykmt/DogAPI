import { Component } from '@angular/core';
import { DogService } from './dog.service';
import { Observable } from 'rxjs';
import { Dog } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  observable$!: Observable<Dog>
  promise$!: Promise<Dog>
  
  constructor(
    private dogSvc : DogService
  ) {}

  getAsObservable() {
    this.observable$ = this.dogSvc.getDogAsObservable()
  }

  getAsPromise() {
    this.promise$ = this.dogSvc.getDogAsPromise()
  }
}
