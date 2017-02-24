import { NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';

export function makeValueProvider(type: any) {
    const ValueProvider = [
        { provide: NG_VALUE_ACCESSOR, useExisting: type, multi: true },
        {
            provide: NG_VALIDATORS,
            useExisting: type,
            useValue: (formControl) => { },
            multi: true
        }
    ];
    return ValueProvider;
}
