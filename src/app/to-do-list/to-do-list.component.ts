import { CalculService } from './../services/calcul.service';
import { todo } from './../core/Todo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  todolist:todo[]=[]
  constructor(private _calcul :CalculService) { }

  ngOnInit(): void {
    this.todolist=[
      {"userId": 1, "id": 1, "title": "delectus aut autem",
      "completed": false},
      {"userId": 1, "id": 2, "title": "quis ut nam facilis et officia qui", "completed": false},
      {"userId": 1, "id": 3, "title": "fugiat veniam minus", "completed": false},
      {"userId": 1, "id": 4, "title": "quo adipisci enim quam utab", "completed": true}];
  }
  getbilan(){
    this._calcul.getNumberOf(this.todolist,"completed",true)
  }

}
