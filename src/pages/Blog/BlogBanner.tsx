import { useEffect, useRef } from "react"
import { BlogPost } from "../../types"

interface Props {
    posts: BlogPost[]
    setPosts: React.Dispatch<React.SetStateAction<BlogPost[]>>
}

const BlogBanner: React.FC<Props> = ({ posts, setPosts }) => {
    const postsRef = useRef<BlogPost[]>(posts)
    useEffect(() => {
        postsRef.current = posts
    }, [posts])

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = e => {
        setPosts(postsRef.current.filter(post => post.title.toLowerCase().includes(e.target.value.toLowerCase()) || post.category.toLowerCase().includes(e.target.value.toLowerCase())))
    }

    return (
        <>
            <section className="w-full bg-base-100 flex flex-col gap-10 items-center px-7 md:px-0 pt-10 md:pt-24 pb-4 md:pb-24">
                <div className="flex flex-col max-w-240 text-center">
                    <h6 className="text-primary font-semibold">Blog</h6>

                    <h1 className="text-xl/10 md:text-2xl/10 lg:text-3xl/10 xl:text-5xl/15 text-secondary font-bold mt-3">Empowering Your SME Success: Latest Insights and Strategies.</h1>

                    <p className="md:text-xl text-secondary mt-6 md:mt-3">
                        The latest industry news, interviews, and resources.
                    </p>
                </div>

                {/* search container  */}
                <div className="w-full sm:w-80">
                    <label className="input w-full bg-neutral">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></g></svg>
                        <input type="search" className="grow bg-ne" placeholder="Search" onChange={handleChange} />
                    </label>
                </div>
            </section>
        </>
    )
}

export default BlogBanner