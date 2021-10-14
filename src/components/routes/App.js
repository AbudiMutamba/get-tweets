//import React, { useState } from 'react'
import * as React from 'react'
import logo from '../imgs/Get-tweet-logo.png'

function App() {

    const [handle, setHandle] = React.useState('')
    const handleClick = () => {
        console.log(handle)
    }
        return (
            <>
                <img src={logo} alt="Get Tweets logo" width="150" height="30" />
                <div>
                    <input type="text" placeholder="@handle" onChange={(event) => setHandle(event.target.value)} />
                    <button onClick={handleClick}>Get</button>

                </div>
            </>
        )
    }


export default App
