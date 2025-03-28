import { useParams, Navigate } from "react-router-dom";
import templateBlogPosts from "../../data/templateBlogPosts";
import BlogPostBanner from "./BlogPostBanner";

const BlogPostPage: React.FC = () => {
    const { id } = useParams()
    const loading = false


    const post = templateBlogPosts.find(post => post.id == id)
    console.log(post)

    if (loading) {
        return <>Loading</>
    }

    if (!post) {
        return <Navigate to={"/not-found"} />
    }

    return (
        <>
            <main className="p-0 bg-neutral w-full">
                <div className="max-w-450 mx-auto md:px-20 pb-20">
                    <BlogPostBanner title={post.title} author={post.author} subject={post.subject} date={post.date}/>
                </div>
            </main>
        </>
    )
}

export default BlogPostPage;