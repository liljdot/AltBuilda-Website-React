import BlogBanner from "./BlogBanner"
import BlogPostsSection from "./BlogPostsSection"
import templateBlogPosts from "../../data/templateBlogPosts"
import { useState } from "react"
import { BlogPost } from "../../types"

const Blog: React.FC = () => {
    // get blogs here 
    const [blogPosts, setBlogPosts] = useState<BlogPost[]>([...templateBlogPosts])

    // filter function for search. pass down to banner

    return (
        <>
            <main className="p-0 bg-base-100 w-full">
                <div className="max-w-450 mx-auto px-20">
                    <BlogBanner />
                    <BlogPostsSection blogPosts={blogPosts}/>
                </div>
            </main>
        </>
    )
}

export default Blog