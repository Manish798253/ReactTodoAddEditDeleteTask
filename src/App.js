import React,{useState} from "react";
import { nanoid } from "nanoid"; 
import Todo from "./components/Todo";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
function App(props) {
  console.log("in app component:"+{props});
  const [tasks,setTasks]=useState(props.tasks);
  const taskList=tasks?.map((task) => <Todo name={task.name} completed={task.completed}
  id={task.id} key={task.id} toggleTaskCompleted={toggleTaskCompleted} deleteTask={deleteTask}
  editTask={editTask}/>);
  function addTask(name)
  {
    const newTask={ id: `todo-${nanoid()}`, name, completed: false };
     setTasks([...tasks,newTask]);
  }
  function deleteTask(id)
  {
    const remainingTasks=tasks.filter((task)=>id!==task.id)
    setTasks(remainingTasks);
  }
  function toggleTaskCompleted(id)
  {
      console.log(id);
      const updatedTasks=tasks.map((task)=>{
         if(id===task.id)
         {
          return {...task,completed: !(task.completed)};
         }
            return task;
      })
      setTasks(updatedTasks);
      console.log(updatedTasks);
  }
  
  function editTask(id,name)
  {
      const modifiedTasks=tasks.map((task)=>{
       if(task.id==id)
       {
        return {...task,name:name};
       }
         return task;
      });
      setTasks(modifiedTasks);
  }

  const tasksNoun = taskList.length !== 1 ? 'tasks' : 'task';
const headingText = `${taskList.length} ${tasksNoun} remaining`;
  return(
  <div className="todoapp stack-large">
  <h1>TodoMatic</h1>
  <Form addTask={addTask}/>
  <div className="filters btn-group stack-exception">
    <FilterButton/>
    <FilterButton/>
    <FilterButton/>
  </div>
  <h2 id="list-heading">
  {headingText}
  </h2>
  <ul
    role="list"
    className="todo-list stack-large stack-exception"
    aria-labelledby="list-heading"
  >
     {/* <Todo name="EAT" completed={true} id="todo-0"/>
    <Todo name="SLEEP" completed={false}  id="todo-1"/>
    <Todo name="REPEAT" completed={false} id="todo-2"/>  */}
   {taskList}
    
  </ul>
</div>
);
}

export default App;
