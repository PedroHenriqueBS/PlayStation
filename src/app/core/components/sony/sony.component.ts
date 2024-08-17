import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sony',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './sony.component.html',
  styleUrl: './sony.component.scss'
})
export class SonyComponent {
  public logoSony: string = 'assets/logos/logoSony.webp';
  public logoAltSony: string = 'Logo da marca sony';
}
