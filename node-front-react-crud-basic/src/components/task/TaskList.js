import TaskCard from './TaskCard'

/**
 * Interfaz que retorna una lista de elementos
 * @returns Lista de elementos
 */
function TaskList({arrTasks,taskDelete}) {



  /**
   * Lista html
   */
  return (
    <div>
      {arrTasks.map((tsk) => (
        <div key={tsk.id}>
          <ol>
            <TaskCard tsk={tsk} taskDelete={taskDelete}/>
          </ol>
        </div>
      ))}
    </div>
  )
}

export default TaskList