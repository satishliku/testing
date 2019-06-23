import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

todos=[
  {id:1,"description":"Java"},
  {id:2,"description":"SQl"},
  {id:3,"description":".NET"}
]

  // todo={
  //   id:1,description:'java'
  // }
  constructor() { }

  ngOnInit() {
  }

}
