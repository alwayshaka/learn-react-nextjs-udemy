import { useLoaderData } from 'react-router';
import clasess from './PostList.module.css'
import Post from './Post'

function PostsList() {
    const posts = useLoaderData();


    return (
        <>
            {posts.length > 0 && (
                <ul className={clasess.posts}>
                    {posts.map(post => (
                        <Post key={post.id} id={post.id} author={post.author} body={post.body} />
                    ))}
                </ul>
            )}
            {posts.length === 0 && (
                <div style={{ textAlign: 'center' }}>No posts found.</div>
            )}
        </>
    )
}

export default PostsList