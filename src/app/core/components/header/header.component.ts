import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { BtnBlueComponent } from '../buttons/btn-blue/btn-blue.component';
import { BtnOrangeComponent } from '../buttons/btn-orange/btn-orange.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}

