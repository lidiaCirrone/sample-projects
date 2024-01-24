import { Component, Input } from '@angular/core';

@Component({
  selector: 'peek-a-boo',
  standalone: true,
  imports: [],
  templateUrl: './peek-a-boo.component.html',
  styleUrl: './peek-a-boo.component.sass'
})
export class PeekABooComponent {
   @Input() name = '';
}
