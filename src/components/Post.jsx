import clasess from './Post.module.css'
import { Link } from 'react-router'

function Post({ id, author, body }) {

    return (
        <div className={clasess.post}>
            <Link to={id}>
                <p className={clasess.author}>{author}</p>
                <p className={clasess.text}>{body}</p>
            </Link>
        </div>
    )
}

export default Post