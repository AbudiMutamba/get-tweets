// import React, {useState, useEffect} from 'react'
import * as React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
function Posts() { //Opening a component

    const [error, setError] = React.useState('')
    const [posts, setPosts] = React.useState([])

    React.useEffect(() => { //Is invoked at component rendering
        getPosts()
    }, [])

    const getPosts = async () => {
        const API_URL = "https://jsonplaceholder.typicode.com/posts"
        let response = ''

        try {
            response = await axios.get(API_URL)
            // console.log(response)
            let { data } = response
            setPosts(data)
            // console.log(data)
        } catch (error) {

            setError(<h1>Resource error</h1>)
            console.log(error)
            console.log(response)
        }
    }
    const handleClick = () => {
        setPosts([])
        setError('')
        setTimeout(getPosts, 5000)
    }

/*     const myOutPut = <div>
        <b>Some thing </b >
    </div>

    return (myOutPut) */

    return (
        <>
            <Link to="/todos">Todos</Link>
            <h1>Posts</h1>
            {error}
            <div>
                <button onClick={handleClick}>Get Posts</button>
            </div>

            {posts?.length <= 0 && <div>Loading...</div>}
            {posts?.length > 0 &&
                <ul>
                    {posts.map(post => <li key={post.id}>{post.title}</li>)}
                </ul>
            }
        </>
    )
}

export default Posts
