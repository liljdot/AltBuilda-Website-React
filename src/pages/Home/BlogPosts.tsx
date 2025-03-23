import { Link } from "react-router-dom"
import { BlogPost } from "../../types"

interface Props {
    posts: BlogPost[]
}

interface SinglePostProps {
    post: BlogPost
}

const SinglePost: React.FC<SinglePostProps> = ({post}) => {

    return (
        <>
            <Link to={""} className="card bg-neutral w-102.5 transition-all ease-in-out duration-300 hover:underline hover:scale-102">
                <figure className="rounded-lg">
                    <img
                        src={post.image}
                        alt={post.subject} />
                </figure>

                <div className="card-body p-0 mt-5 max-w-86">
                    <h2 className="card-title text-2xl">{post.title}</h2>
                </div>
            </Link>
        </>
    )
}

const BlogPosts: React.FC<Props> = ({posts}) => {

    return (
        <>
            <div className="grid grid-cols-3 gap-7.5">
                {posts[0] && <SinglePost post={posts[0]} />}
                {posts[1] && <SinglePost post={posts[1]} />}
                {posts[2] && <SinglePost post={posts[2]}/>}
            </div>
        </>
    )
}

export default BlogPosts;