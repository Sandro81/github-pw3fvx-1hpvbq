import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-l77-lifecycle',
  templateUrl: './l77-lifecycle.component.html',
  styleUrls: ['./l77-lifecycle.component.css']
})
export class L77LifecycleComponent implements OnInit {

  varConstructor: string = '';
  varNgOnInit: string = '';




  constructor() { 
    this.varConstructor = 'constructor was called!' + Date.now();
  }

  ngOnInit() {
     this.varNgOnInit = 'constructor was called!' + Date.now();
  }

}