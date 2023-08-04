// Definir que datos va a tener una tarea dentro de nuestra app, es como si fuera una plantilla
// representa la estructura
export interface Task{
  // cuando ponemos la ? significa que ese campo es opcional (ts)
  id?: number,
  title: string,
  description: string,
  complete:boolean
}
