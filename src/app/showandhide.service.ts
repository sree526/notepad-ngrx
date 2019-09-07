import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShowandhideService {
   showandhide: boolean = false;
  constructor() { }
  showandhidesidenav(){
    this.showandhide = !this.showandhide;
  }
}
