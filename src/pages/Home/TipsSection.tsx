import ActionButton from "../../components/ActionButton";
import templateBlogPosts from "../../data/templateBlogPosts";
import BlogPosts from "./BlogPosts";

const TipsSection: React.FC = () => {
    const blogPosts = templateBlogPosts

    return (
        <>
            <section className="bg-neutral relative py-20 px-13 flex flex-col items-center gap-18">
                <div className="text-secondary text-center">
                    <h2 className="text-5xl font-bold">Access Expert Business Tips</h2>
                </div>

                <div className="">
                    <BlogPosts posts={blogPosts} />
                </div>

                <div className="flex flex-row justify-around">
                    <ActionButton to="/blog" filled>
                        View all Insights
                    </ActionButton>
                </div>
            </section>
        </>
    )
}

export default TipsSection;