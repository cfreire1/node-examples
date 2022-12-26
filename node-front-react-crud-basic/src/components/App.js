import './App.css';
import TaskList from './viewList/TaskList'
import TaskListStandard from './viewList/TaskListStandard'
import TaskListRest from './viewList/TaskListRest'
import TaskForm from './form/TaskForm'

import { tasks as data } from '../data/tasks'
import { useState, useEffect } from 'react'

/**
 * Componente principal
 * @returns vista 
 */
function App() {

  const [tasks, settasks] = useState([]); //guardar el estado tasks 

  /**
   * Cuando cargue el componente (TaskList), setee el estado de tasks
   * Actualizando el estado
   */
  useEffect(() => {
    settasks(data);
  }, []);

  /**
   * Me permite crear un nuevo valor [] en la variable 'tasks'
   *  
   * @param {*} title 
   * @param {*} description 
   */
  const createTask = (title, description) => {
    settasks([...tasks, addTask(title, description)])
  };

  /**
   * Me permite crear una nueva estructura de un ibjeto
   * @param {titulo} title 
   * @param {descriptiocn} description 
   * @returns 
   */
  const addTask = (title, description) => {
    return {
      id: tasks.length,
      title: title,
      descripcion: description
    };
  }

  /**
   * Me permite eliminar un registro selecionado del objeto 'tasks'
   * @param {*} e 
   */
  const taskDelete = (getid) => {
    console.log('Elminado: ' + getid);

    //Si el 'id obtenido' esta en el arreglo 'tasks' entonces 
    //quitelo del nuevo arreglo generado.
    settasks(tasks.filter(tsk => tsk.id !== getid))
  };

  return (
    <div >
      Editar objetos JS formulario crud
      <TaskForm createTask={createTask} />
      <TaskList arrTasks={tasks} taskDelete={taskDelete} />
      <hr />
      Obtener de archivo json en duro simple:
      <TaskListStandard />
      <hr />
      Obtener api rest externa:
      <TaskListRest />
    </div>
  );
}

export default App;
