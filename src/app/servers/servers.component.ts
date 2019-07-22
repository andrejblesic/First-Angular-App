import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-servers",
  templateUrl: `./servers.component.html`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = true;
  serverCreationStatus = "No server was created";
  serverName = "test Server";
  servers = ["testserver", "testserver 2"];

  ngOnInit() {

  }

  onCreateServer() {
    this.serverCreationStatus = "Server was created, name is " + this.serverName;
    this.servers.push(this.serverName);
    console.log(this.serverName);
  }

  bool=true;

  toggleBool() {
    this.bool = !this.bool;
  }

  onUpdateServerName(event: any) {
    this.serverName = event.target.value;
  }

}
