import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Icon } from '@microfrontends/mfs-ui';

@Component({
  imports: [RouterModule, Icon],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'shell';
}
