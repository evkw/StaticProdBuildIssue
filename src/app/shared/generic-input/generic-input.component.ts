import { Component, Input } from '@angular/core';
import { AbstractValueAccessor } from '../abstract-value-accessor';
import { makeValueProvider } from '../make-value-provider';

@Component({
  selector: 'app-input',
  templateUrl: 'generic-input.component.html',
  providers: [makeValueProvider(GenericInputComponent)],
})
export class GenericInputComponent extends AbstractValueAccessor {
  @Input('label') label: string;
}
