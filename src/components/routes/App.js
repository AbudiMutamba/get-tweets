//import React, { useState } from 'react'
import * as React from 'react'
import axios from 'axios'


function App() {

    const [error, setError] = React.useState('')
    const [todos, setTodos] = React.useState('')

    React.useEffect(() => {
        getTodos()
    }, [])

    const getTodos = async () => {
        const API_URI = "https://jsonplaceholder.typicode.com/todos";
        let response = ''

        try {
            reponse = await axios.get(API_URI);
            //console.log(response)
            let {data} = response
            setTodos(data)
            //console.log(data)

        } catch (error) {

            setError (<h1>Resource error</h1>)
            console.log(error)
            console.log(response)
            
        }
    }

    const handleClick = () => {
        setTodos([])
        setError('')
        setTimeout(getTodos,30000)
    }

    return (
        <>
            <h1>Todos</h1>
            {error}
            <div>
                <button onClick={handleClick}>Get Todos</button>
            </div>

            {todo?.length <= 0 && <div>Loading...</div>}
            { todos?.length > 0 &&
                    <ul>
                          {todo.map (todo => <li key = {todo.id} > {todo.title}</li>)}
                    </ul>
            }
        </>
    )

}
export default App
