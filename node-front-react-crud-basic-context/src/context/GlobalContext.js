import { createContext, useState, useEffect } from 'react'
import { tasks as data } from '../data/tasks'

/**
 * Este es el nombre del contexto
 * - Me devuelve un objeto
 * - Tambien almacena los datos
 */
export const GlobalContext = createContext();

/**
 * Este es el componente que engloba al resto de componentes
 * @returns 
 */
export function GlobalContextProvider(props) {

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

        //creacion de componente que engloba a los demas
        <GlobalContext.Provider value={{
            tasks,
            taskDelete,
            createTask
        }}>
            {props.children}
        </GlobalContext.Provider>
    )
}
