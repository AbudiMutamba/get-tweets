// import React, {useState, useEffect} from 'react'
import * as React from 'react'
// import axios from 'axios'
import '../style/posts.css'
import {Link} from 'react-router-dom'
import getData from '../helpers/fetchData'

function Posts() { //Opening a component

    const [error, setError] = React.useState('')
    const [posts, setPosts] = React.useState([])

    // React.useEffect(() => { //Is invoked at component rendering
    //     getPosts()
    // }, [])

    React.useEffect(() => { //Is invoked at component rendering
        handlePosts()
    }, [])

    const handlePosts = async () => {
        setPosts([])
        setError('')

        const posts = await getData('posts')

        if (posts?.error !== undefined) return setError(posts.error)

        setPosts(posts)
    }

  
    const handleClick = () => {
        handlePosts()
       
    }

/*     const myOutPut = <div>
        <b>Some thing </b >
    </div>

    return (myOutPut) */

  

    return (
        <>
        

         <div className="container mx-auto">
            <Link to="/todos">Todos</Link>
            <Link to="/">Home</Link>

            <h1>Posts</h1>
            {error}
            <div>
                <button onClick={handleClick} >Get Posts</button>
            </div>

            {posts?.length <= 0 && <div>Loading...</div>}
            {posts?.length > 0 &&
                // <ul>
                //     {posts.map(post => <li key={post.id}><h1>{post.title}</h1> <p>{post.body}</p></li>)}
                // </ul>
                <ul>
                     {posts.map(post =>

                     <li key={post.id}>
                         
                        <Link key= {post.id} to={`posts/${post.id}`}>
                            <h1>{post.title}</h1>
                             <p>{post.body}</p>
                        </Link>

                        </li>
                        )}
                </ul>
            }
          </div>
        </>
    )
}

export default Posts
