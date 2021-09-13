import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
allowNewServer = false; 

serverCreationStatus ="No server was created";
serverName='test';
serverCreated = false;
constructor() {
    setTimeout(()=>{
      this.allowNewServer =true;
    },2000);
   }

   
  ngOnInit() {
  }

  onCreateServer()
   {
     this.serverCreated= true;
     this.serverCreationStatus='server was created Name IS ' + this.serverName;
   }
   onUpdateServerName( event:any ){
   this.serverName=event.target.value;
   }
}
