import { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'

function TaskCard({ tsk }) {

  const { taskDelete } = useContext(GlobalContext);


  return (
    <div>
      <li>{tsk.id}</li>
      <li>{tsk.title}</li>
      <li>{tsk.descripcion}</li>
      <li><button onClick={() => taskDelete(tsk.id)} >Eliminar</button></li>
    </div>
  )
}

export default TaskCard