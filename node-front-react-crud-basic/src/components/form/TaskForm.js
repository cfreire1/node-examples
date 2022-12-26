import { useState } from 'react'

function TaskForm({ createTask }) {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    /**
     * Permite hacer submit y crear nuevo registrto del objeto
     * @param {*} e 
     */
    const handleSubmit = (e) => {
        e.preventDefault();
        if(title === "" && description === ""){
            alert("Ingrese datos");
        }else{
            createTask(title, description)
    
            //clean states
            setDescription('');
            setTitle('');
        }
    };

    const cleanInput = () => {
        //clean input
        document.getElementById('txttitle').value = "";
        document.getElementById('txtdescription').value = "";
        
        //clean states
        setDescription('');
        setTitle('');


    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input placeholder='Escribe tu tarea' id='txttitle'
                    onChange={(e) => setTitle(e.target.value)}
                    value={title} //Esta forma tamb me permite que se elimne el contenido cuando guarda.
                    autoFocus //me permite que el gane el foco en el input cuando ingrese a la pagina
                    ></input>
                <textarea placeholder='Descripcion' id='txtdescription'
                    onChange={(e) => setDescription(e.target.value)} 
                    value={description} //Esta forma tamb me permite que se elimine el contenido cuando guarda.
                    ></textarea>
                <button>Guardar</button>
            </form>
            <button onClick={cleanInput}>Limpiar</button>
        </div>
    )
}

export default TaskForm