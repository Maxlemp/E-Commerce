import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {
 @Input() data:any
 @Input() title:any
 @Input() all:boolean=true;
 @Input() select='';
 @Output() selectedValue = new EventEmitter()


filtrationFunction(event:any){
  this.selectedValue.emit(event)
}
}
