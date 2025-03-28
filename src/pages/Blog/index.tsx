import BlogBanner from "./BlogBanner"
import BlogPostsSection from "./BlogPostsSection"
import templateBlogPosts from "../../data/templateBlogPosts"
import { useState } from "react"
import { BlogPost } from "../../types"
import usePaginate from "../../hooks/usePaginate"
import ReactPaginate from "react-paginate"
import { IoArrowBack, IoArrowForward } from "react-icons/io5"

const Blog: React.FC = () => {
    // get blogs here 
    const [blogPosts, setBlogPosts] = useState<BlogPost[]>([...templateBlogPosts, ...[...templateBlogPosts].reverse(), ...templateBlogPosts, ...templateBlogPosts])
    const pageCount = Math.ceil(blogPosts.length / 3)
    const [displayedBlogposts, setPageNumber] = usePaginate(blogPosts, 3)

    setBlogPosts// filter function for search. pass down to banner



    return (
        <>
            <main className="p-0 bg-base-100 w-full">
                <div className="max-w-450 mx-auto px-20 pb-20">
                    <BlogBanner />
                    <BlogPostsSection blogPosts={displayedBlogposts} />
                    {/* paginate container  */}
                    <div className="px-8 py-16 flex bg-neutral">
                        {/* hidden for mobile  */}
                        <div className="hidden sm:flex w-full">
                            <ReactPaginate

                                pageCount={pageCount}
                                onPageChange={({ selected }) => setPageNumber(selected + 1)}
                                breakLabel="..."
                                breakClassName="btn btn-ptimary"
                                className="relative w-full flex flex-row gap-2 justify-center"
                                pageLinkClassName="hidden sm:flex size-10 justify-center items-center rounded-full hover:cursor-pointer hover:bg-info hover:text-neutral"
                                activeLinkClassName="bg-info text-neutral"
                                previousLabel={(
                                    <>
                                        <IoArrowBack className="size-4 font-bold" />
                                        <p className="text-secondary font-semibold">Previous</p>
                                    </>
                                )}
                                previousLinkClassName="left-0 absolute flex flex-row gap-3 items-center h-full hover:cursor-pointer"
                                nextLabel={(
                                    <>
                                        <p className="text-secondary font-semibold">Next</p>
                                        <IoArrowForward className="size-4 font-bold" />
                                    </>
                                )}
                                nextLinkClassName="right-0 absolute flex flex-row gap-3 items-center h-full hover:cursor-pointer"
                            />
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Blog