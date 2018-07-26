import { 
  Component, 
  OnInit, 
  Input, 
  Output, 
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'generic-string-input',
  templateUrl: './generic-string-input.component.html',
  styleUrls: ['./generic-string-input.component.css']
})
export class GenericStringInputComponent implements OnInit {
  private _myString;
  private _label;
  private _required;
  private _readOnly;
  private _minLength;
  private _maxLength;
  private _placeHolder;
  private _name;

  showValdiationMessage: boolean;
  valdiationMessage: string;

  @Input('input') 
  set myString(myString: string) {
    this.onChanged(myString);
  }
  get myString(): string { return this._myString; }

  @Input('label')
  set label (label: string) {
    this._label = (label && label.trim()) || '<Label not set>';
  }
  get label(): string { return this._label; }

  @Input()
  set placeHolder(placeHolder: string) {
    this._placeHolder = (placeHolder && placeHolder.trim()) || '';
  }
  get placeHolder(): string { return this._placeHolder; }

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
  set minLength(minLength: number) {
    this._minLength = minLength || 0;
  }
  get minLength(): number { return this._minLength; }

  @Input('max') 
  set maxLength(maxLength: number) {
    this._maxLength = maxLength || 256;
  }
  get maxLength(): number { return this._maxLength; }

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
    this._minLength = 0;
    this._maxLength = 256;
    this._myString = "";
    this._placeHolder = "";
    this._name = "";
  }

  ngOnInit() {
    this.showValdiationMessage = false;
    this.valdiationMessage = '';
  }

  onChanged(newValue) {
    this._myString = newValue;
    this.valdiationMessage = '';
    this.showValdiationMessage = false;
    
    if (this._required && newValue.length === 0) {
      this.showValdiationMessage = true;
      this.valdiationMessage = "Required";
      return;
    }

    if (this._minLength > newValue.length || 
        this._maxLength < newValue.length) {
      this.showValdiationMessage = true;
      this.valdiationMessage = "Value must be " + this._minLength.toString() + " and " + this._maxLength.toString() + " long";
      return;
    }

    this.changed.emit(this._myString);
  }
}