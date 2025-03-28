import { useParams, Navigate, Link } from "react-router-dom";
import templateBlogPosts from "../../data/templateBlogPosts";
import BlogPostBanner from "./BlogPostBanner";
import ImageSection from "./ImageSection";
import ContentSection from "./ContentSection";
import { LuCopy } from "react-icons/lu";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const BlogPostPage: React.FC = () => {
    const { id } = useParams()
    const loading = false
    const post = templateBlogPosts.find(post => post.id == id)

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
                    <BlogPostBanner title={post.title} author={post.author} subject={post.subject} date={post.date} />
                    <div className="w-full mt-9 md:mt-8">
                        <ImageSection title={post.title} imageString={post.image} />
                    </div>
                    <div className="w-full mt-15 md:mt-23">
                        <ContentSection post={post} />
                    </div>

                    <div className="w-full flex gap-3 h-10 flex-row px-90 mt-18 mb-23">
                        <button onClick={() => navigator.clipboard.writeText(window.location.href)} className="btn bg-base-100 rounded-lg h-full flex flex-row items-center text-sm font-semibold p-2.5">
                            <LuCopy className="h-full" />
                            Copy link
                        </button>

                        <Link to={""} className="btn bg-base-100 rounded-lg h-full flex items-center justify-center p-2.5">
                            <FaTwitter className="size-full" />
                        </Link>

                        <Link to={""} className="btn bg-base-100 rounded-lg h-full flex items-center justify-center p-2.5">
                            <FaLinkedin className="size-full" />
                        </Link>

                        <Link to={""} className="btn bg-base-100 rounded-lg h-full flex items-center justify-center p-2.5">
                            <FaFacebook className="size-full" />
                        </Link>
                    </div>
                </div>
            </main>
        </>
    )
}

export default BlogPostPage;