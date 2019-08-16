import {
  Component,
  Input,
  OnInit,
  SimpleChanges,
  OnChanges,
} from '@angular/core';

@Component({
  selector: 'app-l77-lifecycle',
  templateUrl: './l77-lifecycle.component.html',
  styleUrls: ['./l77-lifecycle.component.css']
})
export class L77LifecycleComponent implements OnInit, OnChanges {

  varConstructor: string = '';
  varNgOnInit: string = '';

  // ngOnChanges Variables
  varNgOnChanges: string = '';
  varNgOnChangesObjectFirstChange: string = '';
  varNgOnChangesObjectPreviousValue: string = '';
  varNgOnChangesObjectCurrentValue: string = '';

  @Input() varTestChanges: number = 0;

  constructor() {
    this.varConstructor = Date.now() + ' -> constructor was called!';
  }

  ngOnInit() {
    this.varNgOnInit = Date.now() + ' -> ngOnInit was called!';
  }

  ngOnChanges(changes: SimpleChanges) {
    this.varNgOnChanges = Date.now() + ' -> ngOnChanges was called!';
    this.varNgOnChangesObject = 'changes.varTestChanges.firstChange -> ' + changes.varTestChanges.firstChange + '<br>changes.varTestChanges.previousValue -> ' + changes.varTestChanges.previousValue+'<br>changes.varTestChanges.currentValue -> ' + changes.varTestChanges.currentValue;
    console.log(changes);
  }





}