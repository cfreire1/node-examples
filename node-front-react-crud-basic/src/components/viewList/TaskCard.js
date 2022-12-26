function TaskCard({tsk,taskDelete}) {
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