import { Link } from "react-router-dom";
import { BlogPost } from "../../types";
import { MdArrowOutward } from "react-icons/md";

interface BlogPostsSectionProps {
    blogPosts: BlogPost[]
}

interface BlogPostCardProps {
    post: BlogPost
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({post}) => {
    const placeholderAuthorImage = "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" // insert placeholder avatar here

    return (
        <Link to={`/blog/${post.id}`} className="mx-auto card bg-neutral shrink-0  w-full sm:w-96 transition-all ease-in-out duration-300 hover:underline hover:scale-102">
            <figure className="rounded-lg  sm:h-68">
                <img
                    src={post.image}
                    alt={post.title}
                    className="size-full" />
            </figure>

            <div className="card-body flex flex-col gap-6 p-0 mt-5 md:mt-6">
                <div className="flex flex-col gap-2">
                    <h6 className="text-sm text-primary font-semibold">{post.subject}</h6>

                    <div className="flex flex-row justify-between items-start text-secondary">
                        <h2 className="card-title md:text-2xl font-semibold max-w-86">{post.title}</h2>

                        <MdArrowOutward className="size-6" />
                    </div>
                </div>

                <div className="flex flex-row gap-3">
                    <div className="avatar">
                        <div className="w-10 rounded-full">
                            <img src={post.author.image || placeholderAuthorImage} />
                        </div>
                    </div>

                    <div className="text-secondary text-sm">
                        <p className="font-semibold">{post.author.name}</p>

                        <p>{`${post.date.toLocaleDateString("en-UK", {day: "2-digit", month: "short", year: "numeric"})}`}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

const BlogPostsSection: React.FC<BlogPostsSectionProps> = ({ blogPosts }) => {

    return (
        <>
            <section className="bg-neutral pt-8 md:pt-14 px-11 md:px-8">
                {/* card container  */}
                <div className="w-full grid grid-cols-1 justify-center gap-y-12 xl:gap-y-0 xl:grid-cols-3">
                    {blogPosts.map(post => <BlogPostCard key={Math.floor(Math.random()*1000) + post.id} post={post}/>)}
                </div>
            </section>
        </>
    )
}

export default BlogPostsSection