import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoggerService } from 'logger';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'logger-lib-app';

  constructor(private loggerSrv: LoggerService) {
    this.loggerSrv.log("Hello world");
  }
}
