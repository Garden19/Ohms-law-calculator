import { Component } from '@angular/core';
import { Calculator } from '../../calculator/calculator';


@Component({
  selector: 'app-home',
  imports: [Calculator],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
