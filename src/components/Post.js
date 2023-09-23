import { Link } from "react-router-dom";


const Post = ({post}) => {
    
    const id = post.id

    const div = {
        textAlign: 'center',
        backgroundColor: 'whitesmoke',
        fontFamily: 'Times New Roman',
    }

    return <div style={div}>
        <Link style={{color: 'orange', textDecoration: 'None'}} to={`/post/${id}`}>
            <h1>{post.name}</h1>
        </Link>
        
    </div>
}

export default Post;