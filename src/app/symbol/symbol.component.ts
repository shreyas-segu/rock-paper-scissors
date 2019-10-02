import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-symbol',
  templateUrl: './symbol.component.html',
  styleUrls: ['./symbol.component.css'],
})
export class SymbolComponent implements OnInit {
  @Input() symbol: string;
  constructor() {}
  ngOnInit() {}
}
