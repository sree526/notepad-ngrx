import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
@Component({
  selector: 'app-nodedetail',
  templateUrl: './nodedetail.component.html',
  styleUrls: ['./nodedetail.component.css']
})
export class NodedetailComponent implements OnInit {

  constructor(private store:Store<any>) { }
  node:Node;
  notes:string;
  notesTitle:string;
  notesarray:any[] =[]
  ngOnInit() {
    this.store.select('selectedNode').subscribe(node=> {
   if(node){
     console.log(node);
 this.node = node;
   }
  
    });
     this.store.select('nodes').subscribe(nodes=> {
      this.notesarray = nodes;
    })
  }
  updateValue(){
    this.store.dispatch({type:"UPDATE_NODE",payload:this.node})
  }
   newNode(){
    console.log(this.notesarray.length);
    this.store.dispatch({type:'CREATE_NODE',payload:
    {
      notesTitle:this.notesTitle,
      timestamp:this.formatAMPM(new Date()),
      notes:this.notes,
      id:this.notesarray.length+1
    }
  });
}
formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; 
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}

}