import { Component } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { map }  from  'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  coches: any;

  head: string = "Coches";
  buscar: string = '';
  
  constructor(private httpClient: HttpClient) {
    this.coches = this.httpClient.get('https://api.myjson.com/bins/14gh4c').pipe(map(res => res['results']));
  }
}