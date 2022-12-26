import { useState, useEffect } from 'react'

function TaskListRest() {

    const [apifirst, setapifirst] = useState([]);
    const URL_FAKE_API = 'https://jsonplaceholder.typicode.com/posts';

    useEffect(() => {
        fetch(URL_FAKE_API)
            .then(response => response.json())//conviertelo en json
            .then(json =>
                setapifirst(json)
            )
            .catch(error => console.log(error));
    }, [])

    return (
        <div>
            {apifirst.map((value) => (
                <div key={value.id}>
                    <ol>
                        <li>{value.id}</li>
                        <li>{value.title}</li>
                        <li>{value.title}</li>
                    </ol>
                </div>
            ))}
        </div>
    )
}

export default TaskListRest