import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  userList:any[] = [];
  constructor() { }

  ngOnInit() {
    this.setUserList();
  }

  setUserList(){
    this.userList= [{
      username:'geetesh',
      email:'dgeetesh@gmail.com',
      phNumber:'9039208484'
    },{
      username:'Prafful',
      email:'prafful@gmail.com',
      phNumber:'9039203553'
    }]
  }

}
