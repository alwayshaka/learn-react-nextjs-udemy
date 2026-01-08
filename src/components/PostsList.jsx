import { useState, useEffect } from 'react'

import clasess from './PostList.module.css'
import Post from './Post'
import NewPost from './NewPost'
import Modal from './Modal'

function PostsList({ isPosting, onStopPosting }) {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function fetchPosts() {
            setIsLoading(true)
            const response = await fetch("http://localhost:8080/posts")
            const data = await response.json()
            setPosts(data.posts)
            setIsLoading(false)
        }
        fetchPosts()
    }, []);

    function addPostHandler(postData) {
        fetch("http://localhost:8080/posts", {
            method: "POST",
            body: JSON.stringify(postData),
            headers: {
                "Content-Type": "application/json"
            },
        })
        setPosts((existingPosting) => [postData, ...existingPosting]);
    }

    return (
        <>
            {isPosting && (
                <Modal onClose={onStopPosting}>
                    <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
                </Modal>
            )}
            {!isLoading && posts.length > 0 && (
                <ul className={clasess.posts}>
                    {posts.map(post => (
                        <Post key={post.body} author={post.author} body={post.body} />
                    ))}
                </ul>
            )}
            {!isLoading && posts.length === 0 && (
                <div style={{ textAlign: 'center' }}>No posts found.</div>
            )}
            {isLoading && <div style={{ textAlign: 'center' }}>Loading...</div>}
        </>
    )
}

export default PostsList