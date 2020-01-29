import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ShoppingAppNg';
  pictures: string[] = [];


  ngOnInit() {
    for (let i = 0; i < 10; i++) {
    this.pictures.push(`Test image ${i}`);
    }
  }

}

