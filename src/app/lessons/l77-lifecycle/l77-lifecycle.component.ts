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
  varNgOnChanges: string = '';
  varNgOnChangesObject: string = '';

  @Input() varTestChanges: number = 0;

  constructor() {
    this.varConstructor = Date.now() + ' -> constructor was called!';
  }

  ngOnInit() {
    this.varNgOnInit = Date.now() + ' -> ngOnInit was called!';
  }

  ngOnChanges(changes: SimpleChanges) {
    this.varNgOnChanges = Date.now() + ' -> ngOnChanges was called!';
    this.varNgOnChangesObject = changes + '';
    console.log(changes);
  }





}