import clasess from './Post.module.css'

function Post({ author, body }) {

    return (
        <div className={clasess.post}>
            <p className={clasess.author}>{author}</p>
            <p className={clasess.text}>{body}</p>
        </div>
    )
}

export default Post