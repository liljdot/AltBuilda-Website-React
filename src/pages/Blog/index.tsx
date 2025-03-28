import BlogBanner from "./BlogBanner"
import BlogPostsSection from "./BlogPostsSection"
import templateBlogPosts from "../../data/templateBlogPosts"
import { useState } from "react"
import { BlogPost } from "../../types"
import usePaginate from "../../hooks/usePaginate"
import ReactPaginate from "react-paginate"
import { IoArrowBack, IoArrowForward } from "react-icons/io5"
import NewsletterForm from "./NewsletterForm"

const Blog: React.FC = () => {
    // get blogs here 
    const [blogPosts, setBlogPosts] = useState<BlogPost[]>([...templateBlogPosts, ...[...templateBlogPosts].reverse(), ...templateBlogPosts, ...templateBlogPosts])
    const pageCount = Math.ceil(blogPosts.length / 3)
    const [displayedBlogposts, setPageNumber] = usePaginate(blogPosts, 3)

    setBlogPosts// filter function for search. pass down to banner



    return (
        <>
            <main className="p-0 bg-neutral w-full">
                <div className="max-w-450 mx-auto md:px-20 pb-20">
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

                        {/* for mobile only  */}
                        <div className="sm:hidden w-full">
                            <ReactPaginate
                                pageCount={pageCount}
                                pageRangeDisplayed={0}
                                marginPagesDisplayed={0}
                                pageLabelBuilder={page => `Page ${page} of ${pageCount}`}
                                onPageChange={({ selected }) => setPageNumber(selected + 1)}
                                breakLabel="..."
                                breakClassName="btn btn-ptimary"
                                className="relative w-full flex flex-row justify-center"
                                pageLinkClassName="flex size-10 justify-center items-center"
                                activeLinkClassName="text-secondary w-fit text-sm font-medium"
                                previousLabel={(
                                    <div className="p-2 border border-info rounded-lg">
                                        <IoArrowBack className="size-4 font-bold" />
                                    </ div>
                                )}
                                previousLinkClassName="left-0 absolute flex flex-row gap-3 items-center h-full hover:cursor-pointer"
                                nextLabel={(
                                    <div className="p-2 border border-info rounded-lg">
                                        <IoArrowForward className="size-4 font-bold" />
                                    </ div>
                                )}
                                nextLinkClassName="right-0 absolute flex flex-row gap-3 items-center h-full hover:cursor-pointer"
                            />
                        </div>
                    </div>
                    <div className="bg-neutral  px-2 md:px-0">
                        <NewsletterForm />
                    </div>
                </div>
            </main>
        </>
    )
}

export default Blog