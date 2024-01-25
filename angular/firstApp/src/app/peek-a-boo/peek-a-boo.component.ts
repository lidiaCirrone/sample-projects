import { Component, Input, OnInit } from '@angular/core';
import { PeekABooDirective } from '../peek-a-boo.directive';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'peek-a-boo',
  standalone: true,
  imports: [],
  templateUrl: './peek-a-boo.component.html',
  styleUrl: './peek-a-boo.component.sass'
})

// Don't HAVE to mention the Lifecycle Hook interfaces
// unless we want typing and tool support
export class PeekABooComponent extends PeekABooDirective implements OnInit {
   @Input() name = '';

   constructor(logger: LoggerService){
      super(logger);

      const is = this.name ? 'is' : 'is not';
      this.logIt(`name ${is} known at construction`);
   }
}
