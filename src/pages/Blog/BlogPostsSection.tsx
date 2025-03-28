import { Link } from "react-router-dom";
import { BlogPost } from "../../types";
import lowCostBlogImage from "../../assets/low-cost-blog-img.png"
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
        <Link to={`/blog/${post.id}`} className="card bg-neutral shrink-0 w-72 sm:w-96 transition-all ease-in-out duration-300 hover:underline hover:scale-102">
            <figure className="rounded-lg h-68">
                <img
                    src={post.image}
                    alt={post.title}
                    className="size-full" />
            </figure>

            <div className="card-body flex flex-col gap-6 p-0 mt-6">
                <div className="flex flex-col gap-2">
                    <h6 className="text-sm text-primary font-semibold">{post.subject}</h6>

                    <div className="flex flex-row justify-between items-start text-secondary">
                        <h2 className="card-title sm:text-2xl font-semibold max-w-86">{post.title}</h2>

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
            <section className="bg-neutral pt-14 px-8 pb-100">
                {/* card container  */}
                <div className="w-full grid grid-cols-3">
                    {/* <Link to={""} className="card bg-neutral shrink-0 w-72 sm:w-96 transition-all ease-in-out duration-300 hover:underline hover:scale-102">
                        <figure className="rounded-lg">
                            <img
                                src={lowCostBlogImage}
                                alt={"Subject"} />
                        </figure>

                        <div className="card-body flex flex-col gap-6 p-0 mt-6 border">
                            <div className="flex flex-col gap-2">
                                <h6 className="text-sm text-primary font-semibold">Networking</h6>

                                <div className="flex flex-row justify-between items-start text-secondary">
                                    <h2 className="card-title sm:text-2xl font-semibold max-w-86">{"3 Low-Cost Campaigns You Must Run to Win BFCM"}</h2>

                                    <MdArrowOutward className="size-6" />
                                </div>
                            </div>

                            <div className="flex flex-row gap-3">
                                <div className="avatar">
                                    <div className="w-10 rounded-full">
                                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                    </div>
                                </div>

                                <div className="text-secondary text-sm">
                                    <p className="font-semibold">Olivia Rhye</p>

                                    <p>20 Jan 2024</p>
                                </div>
                            </div>
                        </div>
                    </Link> */}
                    <BlogPostCard post={blogPosts[0]}/>
                    <BlogPostCard post={blogPosts[1]}/>
                    <BlogPostCard post={blogPosts[2]}/>
                </div>
            </section>
        </>
    )
}

export default BlogPostsSection