import { Component, OnInit } from '@angular/core';
import { ToDo } from './../../models/Todo';
@Component({
  selector: 'app-to-dos',
  templateUrl: './to-dos.component.html',
  styleUrls: ['./to-dos.component.css']
})
export class ToDosComponent implements OnInit {

  todos:ToDo[];

  inputTodo:string = "";

  constructor() { }

  ngOnInit(): void {
    this.todos= [{
      content: "first todo",
      completed: false
    },
    {
      content: "second todo",
      completed: false
    }
  ]
  }

  toggleDone (id:number){
    this.todos.map((v,i)=>{
      if(i==id) v.completed = !v.completed;

      return v;
    })
  }

  deleteTodo (id:number){
    this.todos= this.todos.filter((v, i)=> i !== id);
  }

  addTodo (){
    this.todos.push({
      content: this.inputTodo,
      completed: false
    });

    this.inputTodo = "";
  }

}


