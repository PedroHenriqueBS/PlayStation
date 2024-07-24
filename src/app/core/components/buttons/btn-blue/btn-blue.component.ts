import { Component, Input } from '@angular/core';

@Component({
  selector: 'btn-blue',
  standalone: true,
  imports: [],
  templateUrl: './btn-blue.component.html',
})
export class BtnBlueComponent {

  @Input() public textButton = '';
}
