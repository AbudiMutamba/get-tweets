//import React, { useState } from 'react'
import * as React from 'react'
import axios from 'axios'
import logo from '../imgs/Get-tweet-logo.png'

function App() {

   // const students = [ 12, 15, 16,]
    //const [a,b] = students
    
    const [handle, setHandle] = React.useState('')
    const [tweets, setTweets] = React.useState('')
    const handleClick =  async() => {
        console.log(handle)

         const response = await axios.get("/end-point", {})


        //Steps
        /* 
        [] 1. Send to api
            []Setting up Axios or fetch API -
        [] 2. If valid response setTweets
        */
    }
        return (
            <>
                <img src={logo} alt="Get Tweets logo" width="150" height="150" />
                <div>
                    <input type="text" placeholder="@handle" onChange={(event) => setHandle(event.target.value)} />
                    <button onClick={handleClick}>Get</button>

                </div>
                <div>
                    {tweets}
                </div>
            </>
        )
    }


export default App
