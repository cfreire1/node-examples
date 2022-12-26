import TaskCard from './TaskCard'
import { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'

/**
 * Interfaz que retorna una lista de elementos
 * @returns Lista de elementos
 */
function TaskList() {
  const { tasks, taskDelete } = useContext(GlobalContext);


  /**
   * Lista html
   */
  return (
    <div>
      {tasks.map((tsk) => (
        <div key={tsk.id}>
          <ol>
            <TaskCard tsk={tsk} taskDelete={taskDelete} />
          </ol>
        </div>
      ))}
    </div>
  )
}

export default TaskList