import {
  Component,
  Input,
  OnInit,
  SimpleChanges,
  OnChanges,
  DoCheck,
  AfterContentInit,
} from '@angular/core';

@Component({
  selector: 'app-l77-lifecycle',
  templateUrl: './l77-lifecycle.component.html',
  styleUrls: ['./l77-lifecycle.component.css']
})
export class L77LifecycleComponent implements OnInit, OnChanges, DoCheck, AfterContentInit {

  varConstructor: string = '';
  varNgOnInit: string = '';
  varNgDocheck: string = '';
  varNgAfterContentInit: string = '';

  // ngOnChanges Variables
  varNgOnChanges: string = '';
  varNgOnChangesObjectFirstChange: string = '';
  varNgOnChangesObjectPreviousValue: string = '';
  varNgOnChangesObjectCurrentValue: string = '';
  @Input() varTestChanges: number = 0;
  // ------
  constructor() {
    this.varConstructor = Date.now() + ' -> constructor was called!';
  }

  ngOnInit() {
    this.varNgOnInit = Date.now() + ' -> ngOnInit was called!';
  }

  ngOnChanges(changes: SimpleChanges) {
    this.varNgOnChanges = Date.now() + ' -> ngOnChanges was called!';
    this.varNgOnChangesObjectFirstChange = 'changes.varTestChanges.firstChange -> ' + changes.varTestChanges.firstChange;
    this.varNgOnChangesObjectPreviousValue = 'changes.varTestChanges.previousValue -> ' + changes.varTestChanges.previousValue;
    this.varNgOnChangesObjectCurrentValue = 'changes.varTestChanges.currentValue -> ' + changes.varTestChanges.currentValue;
    console.log(changes);
  }

  ngDoCheck() {
    this.varNgDocheck = Date.now() + ' -> ngDocheck was called!';
  }

  ngAfterContentInit() {
    this.varNgAfterContentInit = Date.now() + ' -> ngAfterContentInit was called!';
  }


}