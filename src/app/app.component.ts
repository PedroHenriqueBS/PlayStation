import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { SonyComponent } from "./core/components/sony/sony.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgOptimizedImage, SonyComponent],
  template: `
  <app-sony />
  <router-outlet />
  `,
})
export class AppComponent {
  title = 'playstation';
}
