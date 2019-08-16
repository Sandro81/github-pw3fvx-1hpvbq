import {
  Component,
  OnInit,
  SimpleChanges,
  OnChanges
} from '@angular/core';

@Component({
  selector: 'app-l77-lifecycle',
  templateUrl: './l77-lifecycle.component.html',
  styleUrls: ['./l77-lifecycle.component.css']
})
export class L77LifecycleComponent implements OnInit, OnChanges {

  varConstructor: string = '';
  varNgOnInit: string = '';
  varNgOnChanges: string = '';

  constructor() {
    this.varConstructor = Date.now() + ' -> constructor was called!';
  }

  ngOnInit() {
    this.varNgOnInit = Date.now() + ' -> ngOnInit was called!';
  }

  ngOnChanges(changes: SimpleChanges) {
    this.varNgOnChanges = Date.now() + ' -> ngOnChanges was called!';
  }

}