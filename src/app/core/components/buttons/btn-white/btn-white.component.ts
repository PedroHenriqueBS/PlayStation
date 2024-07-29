import { Component, Input } from '@angular/core';

@Component({
  selector: 'btn-white',
  standalone: true,
  imports: [],
  templateUrl: './btn-white.component.html',
})
export class BtnWhiteComponent {
  @Input() public textButton = '';
}
