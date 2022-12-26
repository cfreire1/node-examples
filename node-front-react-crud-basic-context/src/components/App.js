import './App.css';
import TaskList from './task/TaskList'
import TaskListStandard from './task/TaskListStandard'
import ApiListRest from './apiRest/ApiListRest'
import TaskForm from './task/TaskForm'

/**
 * Componente principal
 * @returns vista 
 */
function App() {
  return (
    <div >
      Editar objetos JS formulario crud
      <TaskForm />
      <TaskList />
      <hr />
      Obtener de archivo json en duro simple:
      <TaskListStandard />
      <hr />
      Obtener api rest externa:
      <ApiListRest />
    </div>
  );
}

export default App;
