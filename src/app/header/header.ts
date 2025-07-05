import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  @Input() title: string = "Simple accounts";
  @Input() subtitle: string = "Create an account or log in with your existing one";
}
