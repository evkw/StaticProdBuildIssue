import { ControlValueAccessor, FormControl } from '@angular/forms';

export abstract class AbstractValueAccessor implements ControlValueAccessor {
    private _value: any = '';
    private _control: any;
    get value(): any { return this._value; };
    set value(v: any) {
        if (v !== this._value) {
            this._value = v;
            this.onChange(v);
        }
    }

    writeValue(value: any) {
        this._value = value;
        this.onChange(value);
    }

    onChange = (_) => { };
    onTouched = () => { };
    validateFn: any = () => { };
    registerOnChange(fn: (_: any) => void): void { this.onChange = fn; }
    registerOnTouched(fn: () => void): void { this.onTouched = fn; }

    validate(c: FormControl) {
        this._control = c;
        return this.validateFn(c);
    }

    isRequired(): boolean {
        return this._control.hasError('required');
    }
}
