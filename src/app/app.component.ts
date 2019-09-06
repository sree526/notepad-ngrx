import { Component } from '@angular/core';
import {Store} from '@ngrx/store';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'notepad';
  nodevalue:String ="";
  nodes:any[]=[]
  notes:string;
  constructor(private store:Store<any>) {

  }
  ngOnInit(){
    this.store.select('nodes').subscribe(nodes=> {
      this.nodes = nodes;
    })
  }
  newNode(){
    console.log(this.nodes.length);
    this.store.dispatch({type:'CREATE_NODE',payload:
    {
      value:this.nodevalue,
      timestamp:this.formatAMPM(new Date()),
      id:this.nodes.length+1
    }
  });
}
deleteNode(node){
    this.store.dispatch({type:'DELETE_NODE',payload:node});
}
selectedNode(node){
   this.store.dispatch({type:'SELECTED_NODE',payload:node});
}
searchNotes(){
  this.store.dispatch({type:'SEARCH_NOTES',payload:this.notes});
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