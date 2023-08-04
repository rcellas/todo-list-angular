import { Component } from '@angular/core';
import { Task } from 'src/app/Task';
import { TaskService } from 'src/app/services/task.service';
// Al crear el servicio esto cambia donde se genera el servicio
// import {HttpClient} from '@angular/common/http'
// al tener nuestra base de datos en json-server lo que conseguimos es eliminar nuestro mock
// import { TASKS } from 'src/app/mock-task';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})

// aquí, en este caso, le pasamos la información del padre al hijo
export class TaskComponent {
  // lo primero que hacemos es definir el tipo y luego le ponemos que es igual al contenido que hemos importado
  // tasks: Task[] = TASKS;
  tasks: Task[]=[]

  // esto es en caso de que tengamos creado un servicio creado
  constructor(private taskService:TaskService){}

  ngOnInit(){
    this.taskService.getAll().subscribe(
      (res)=> this.tasks = res
    )
  }

  createTask(task: Task):void{
    this.taskService.save(task).subscribe(
      (task)=>this.tasks.push(task)
    )
  }

  deleteTask(task:Task):void{
    this.taskService.delete(task).subscribe(
      () => this.tasks = this.tasks.filter(t => t.id !== task.id)
    )
  }

  toggleTask(task: Task): void{
    task.complete = !task.complete;
    this.taskService.update(task).subscribe()
  }
  


  // esto aquí y de esta forma no es correcta por lo tanto lo que haremos es activar el comando
  // ng g s task
  // en este caso la s significa de servicio
  // lo que hacemos una vez ya tenemos nuestra base de datos es inyectar la dependencia
  // al ponerla en privada solo la puede usar este componente
  // constructor(private http:HttpClient){}

  // // la función ngOnInit lo que hace es ejecutarse de forma automatica al inicializar el componente
  // // y solo lo hace una única vez
  // // sería el useEffect en react
  // ngOnInit(){
  //   // el subscribe nos sirve para crear una asincronia
  //   // es decir, es por si tenemos una url y la petición de esta tarda más de la cuenta
  //   // lo que hace esta linea de codigo es que cuando tenga una respuesta active la logica que hay dentro de subscribe
  //   this.http.get<Task[]>('http://localhost:3000/tasks').subscribe(
  //     // aqui le estamos diciendo que si hay respuesta la guarde en la variable
  //     (res)=> this.tasks =res
  //   )
  // }
}
