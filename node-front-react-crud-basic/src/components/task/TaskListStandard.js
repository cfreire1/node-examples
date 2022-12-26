import { tasks as data } from '../../data/tasks'
import { useState, useEffect } from 'react'

/**
 * Interfaz que retorna una lista de elementos
 * @returns Lista de elementos
 */
function TaskListStandard() {

  const [tasks, settasks] = useState([]); //guardar el estado tasks 

  /**
   * Cuando cargue el componente (TaskListStandard), setee el estado de tasks
   */
  useEffect(() => {
    settasks(data);
  }, []);


  /**
   * Lista html
   */
  return (
    <div>
      {tasks.map((tsk) => (
        <div key={tsk.id}>
          <ol>
            <li>{tsk.id}</li>
            <li>{tsk.title}</li>
            <li>{tsk.descripcion}</li>
          </ol>
        </div>
      ))}
    </div>
  )
}

export default TaskListStandard