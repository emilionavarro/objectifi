import { 
  Component, 
  OnInit, 
  Input, 
  Output, 
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'generic-number-input',
  templateUrl: './generic-number-input.component.html',
  styleUrls: ['./generic-number-input.component.css']
})
export class GenericNumberInputComponent implements OnInit {
  private _myNumber;
  private _label;
  private _required;
  private _readOnly;
  private _min;
  private _max;
  private _name;

  showValdiationMessage: boolean;
  valdiationMessage: string;

  @Input('input') 
  set myNumber(myNumber: Number) {
    this.onChanged(myNumber);
  }
  get myNumber(): Number { return this._myNumber; }

  @Input('label')
  set label (label: string) {
    this._label = (label && label.trim()) || '<Label not set>';
  }
  get label(): string { return this._label; }

  @Input()
  set required(required: boolean) {
    this._required = required || false;
  }
  get required(): boolean { return this._required; }

  @Input() 
  set readOnly(readOnly: boolean) {
    this._readOnly = readOnly || false;
  }
  get readOnly(): boolean { return this._readOnly; }

  @Input('min') 
  set min(min: number) {
    this._min = min || 0;
  }
  get min(): number { return this._min; }

  @Input('max') 
  set max(max: number) {
    this._max = max || 256;
  }
  get max(): number { return this._max; }

  @Input() 
  set name(name: string) {
    this._name = (name && name.trim()) || '';
  }
  get name(): string { return this._name; }

  @Output() changed = new EventEmitter<number>();

  constructor() { 
    this._label = '<Label not set>';
    this._readOnly = false;
    this._required = false;
    this._min = 0;
    this._max = 9999999999;
    this._myNumber = 0;
    this._name = "";
  }

  ngOnInit() {
    this.showValdiationMessage = false;
    this.valdiationMessage = '';
  }

  onChanged(newValue) {
    this._myNumber = Number(newValue);
    this.valdiationMessage = '';
    this.showValdiationMessage = false;
    
    if (this._required && newValue.length === 0) {
      this.showValdiationMessage = true;
      this.valdiationMessage = "Required";
      return;
    }

    if (this._min > Number(newValue) || 
        this._max < Number(newValue)) {
      this.showValdiationMessage = true;
      this.valdiationMessage = "Value must be between " + this._min.toString() + " and " + this._max.toString();
      return;
    }
    
    this.changed.emit(this._myNumber);
  }
}