import { Component, OnInit, Input } from '@angular/core';
import { IItem } from '../shared/index';

@Component({
  selector: 'app-consumer',
  templateUrl: './consumer.component.html',
  styleUrls: ['./consumer.component.css']
})
export class ConsumerComponent implements OnInit {
  @Input() item: IItem;

  constructor() {
  }

  ngOnInit() {
  }
}
