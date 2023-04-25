import { Component } from '@angular/core';

export interface PeriodicElement {
  id: number;
  title: string;
  body: string;
  image: string;
  published_at: Date;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    id: 1,
    title: 'My Best Blog',
    body: 'qwerqwet',
    image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    published_at: new Date(),
  },
  {
    id: 2,
    title: 'My Best Blog',
    body: 'qwerqwerqwe',
    image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    published_at: new Date(),
  },
  {
    id: 3,
    title: 'My Best Blog',
    body: 'qwerwqerqwer',
    image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    published_at: new Date(),
  },
  {
    id: 4,
    title: 'My Best Blog',
    body: 'qwerwqr',
    image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    published_at: new Date(),
  },
  {
    id: 5,
    title: 'My Best Blog',
    body: 'qwerwqerqw',
    image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    published_at: new Date(),
  },
];

@Component({
  selector: 'app-adminblog',
  templateUrl: './adminblog.component.html',
  styleUrls: ['./adminblog.component.css']
})

export class AdminblogComponent {
  dataSource = ELEMENT_DATA;
  displayedColumns: string[] = ['id', 'title', 'image', 'published_at', 'actions'];
}

