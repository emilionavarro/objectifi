import { 
  Component, 
  OnInit, 
  Input, 
  Output, 
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'generic-date-input',
  templateUrl: './generic-date-input.component.html',
  styleUrls: ['./generic-date-input.component.css']
})
export class GenericDateInputComponent implements OnInit {
  private _myDate;
  private _label;
  private _required;
  private _readOnly;
  private _min;
  private _max;
  private _name;

  showValdiationMessage: boolean;
  valdiationMessage: string;

  @Input('input') 
  set myDate(myDate: Date) {
    this.onChanged(myDate);
  }
  get myString(): Date { return this._myDate; }

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
  set min(min: Date) {
    // this._min = min || new Date(0);
  }
  get minLength(): Date { return this._min; }

  @Input('max') 
  set max(max: Date) {
    // this._max = max || (new Date()).setFullYear(9999);
  }
  get maxLength(): Date { return this._max; }

  @Input() 
  set name(name: string) {
    this._name = (name && name.trim()) || '';
  }
  get name(): string { return this._name; }

  @Output() changed = new EventEmitter<String>();

  constructor() { 
    this._label = '<Label not set>';
    this._readOnly = false;
    this._required = false;
    this._min = new Date();
    this._max = new Date();
    this._myDate = new Date();
    this._name = "";
  }

  ngOnInit() {
    this.showValdiationMessage = false;
    this.valdiationMessage = '';
  }

  onChanged(newValue) {
    this._myDate = newValue;
    this.valdiationMessage = '';
    this.showValdiationMessage = false;
    
    if (this._required && newValue.length === 0) {
      this.showValdiationMessage = true;
      this.valdiationMessage = "Required";
      return;
    }

    if (this._min.getTime() > (new Date(newValue)).getTime() || 
        this._max.getTime() < (new Date(newValue)).getTime()) {
      this.showValdiationMessage = true;
      this.valdiationMessage = "Date must be between " + this._min.toDateString() + " and " + this._max.toDateString();
      return;
    }

    this.changed.emit(this._myDate);
  }
}