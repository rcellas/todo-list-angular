import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  // con el @Input lo que estamos haciendo es decirle a Angular que la variable task va ha recibir datos externos
  // es decir, que no vienen propiamente de este componenten sino de otro

  // en caso de que estemos preparando la información para el componente lo que podemos hacer es
  // ponerlo de la siguiente forma
  //@Input() task!: Task;
  // de esta forma le decimos a Ts que no se preocupe que nosotros nos encargamos de pasarle en algun momento esa información
  // permitiendo de esa forma que podamos trabajar en otros componentes.
  @Input() task!: Task;

  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleTask: EventEmitter<Task> = new EventEmitter();

  onDelete(task:Task):void{
    this.onDeleteTask.emit(task)
  }

  onToggle(task:Task):void{
    this.onToggleTask.emit(task)
  }

}
