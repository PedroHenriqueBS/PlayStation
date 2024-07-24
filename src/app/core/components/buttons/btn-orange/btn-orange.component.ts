import { Component, Input } from '@angular/core';

@Component({
  selector: 'btn-orange',
  standalone: true,
  imports: [],
  templateUrl: './btn-orange.component.html',
})
export class BtnOrangeComponent {
  @Input() public textButton = '';
}
