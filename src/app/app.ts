import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Selector } from './forms/selector/selector';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Selector],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
