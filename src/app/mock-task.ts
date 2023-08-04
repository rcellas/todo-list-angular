import { Task } from "./Task"


// Esto es una forma de hacer, pero no esta tipado (que es como se hace en ts)
// Cuando ponemos el const TASKS:Task[] hacemos referencia a como deberán de ser la información que estamos tipando
export const TASKS:Task[] =[
  {
    id:1,
    title:"Learn Angular",
    description:"Complete the formation of angular",
    complete:true
  },
  {
    id:2,
    title:"Learn Scrum",
    description:"Complete the formation of Scrum",
    complete:true
  },
  {
    id:3,
    title:"Certification SM and PO",
    description:"Make a exam about SM and PO",
    complete:false
  }
]
