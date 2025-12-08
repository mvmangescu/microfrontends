import { Component } from '@angular/core';
import { Layout } from './layout/layout';

@Component({
  imports: [Layout],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'shell';
}
