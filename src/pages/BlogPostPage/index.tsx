import { useParams, Navigate } from "react-router-dom";
import copy from "copy-to-clipboard";
// import templateBlogPosts from "../../data/templateBlogPosts";
import BlogPostBanner from "./BlogPostBanner";
import ImageSection from "./ImageSection";
import ContentSection from "./ContentSection";
import { LuCopy } from "react-icons/lu";
// import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import toast from "react-hot-toast";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import { useQuery } from "@tanstack/react-query";
import { getSingleBlogPost, GetSingleBlogPostResponse } from "../../api/fns";

const BlogPostPage: React.FC = () => {
    useDocumentTitle("Blog | Bold by ALT")
    const { id } = useParams()
    const { data, isLoading } = useQuery<GetSingleBlogPostResponse>({
        queryFn: () => getSingleBlogPost(id!),
        queryKey: [`blogPost-${id}`]
    })
    const post = data?.result



    return (
        <>
            <main className="p-0 bg-neutral w-full">
                <div className="max-w-450 mx-auto md:px-20 pb-20">
                    {
                        isLoading
                            ? (
                                <div className="flex justify-center items-center py-20">
                                    <span className="loading loading-spinner loading-xl text-primary"></span>
                                </div>
                            )
                            : !post
                                ? <Navigate to={"/not-found"} />
                                : (
                                    <>
                                        <BlogPostBanner
                                            title={post.title}
                                            author={{ name: post.author, image: post.authorImageUrl }}
                                            subject={post.category}
                                            date={new Date(post.publishedAt)} />

                                        <div className="w-full mt-9 md:mt-8">
                                            <ImageSection title={post.title} imageString={post.coverImageUrl} />
                                        </div>

                                        <div className="w-full mt-15 md:mt-23">
                                            <ContentSection post={post} />
                                        </div>

                                        <div className="w-full flex gap-3 h-10 flex-row px-4 sm:px-18 lg:px-37 xl:px-90 mt-18 mb-23">
                                            <button onClick={() => { copy(window.location.href); toast.success("copied") }} className="btn bg-base-100 rounded-lg h-full flex flex-row items-center text-sm font-semibold p-2.5">
                                                <LuCopy className="h-full" />
                                                Copy link
                                            </button>

                                            {/* <Link to={post.author.links.twitter!} className="btn bg-base-100 rounded-lg h-full flex items-center justify-center p-2.5">
                                                <FaTwitter className="size-full" />
                                            </Link>

                                            <Link to={post.author.links.linkedin!} className="btn bg-base-100 rounded-lg h-full flex items-center justify-center p-2.5">
                                                <FaLinkedin className="size-full" />
                                            </Link>

                                            <Link to={post.author.links.facebook!} className="btn bg-base-100 rounded-lg h-full flex items-center justify-center p-2.5">
                                                <FaFacebook className="size-full" />
                                            </Link> */}
                                        </div>
                                    </>
                                )
                    }
                </div>
            </main>
        </>
    )
}

export default BlogPostPage;