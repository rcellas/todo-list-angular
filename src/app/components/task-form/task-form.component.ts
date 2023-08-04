import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {

  title!:string;
  description!:string;

  // el output nos sirve para emitir un evento y avisar a otro componente que va hacer algo
  // entonces el otro componente lo que hará es obtener la información
  // output es evento afuera
  // lo que hace esta linea de codigo es emitir el evento y hacia donde tiene que transmitir esta información
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter()

  onSubmit(){
    console.log(this.title)
    // validación
    if(this.title === ''){
      alert('Hey, pon texto')
      return
    }
    // crear tarea
    const newTask: Task={
      title:this.title,
      description: this.description,
      complete:false
    }
    //emitir evento
    this.onAddTask.emit(newTask)

    //clean form
    this.title = ''
    this.description= ''
  }
}
