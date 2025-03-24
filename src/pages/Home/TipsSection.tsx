import ActionButton from "../../components/ActionButton";
import templateBlogPosts from "../../data/templateBlogPosts";
import BlogPosts from "./BlogPosts";

const TipsSection: React.FC = () => {
    const blogPosts = templateBlogPosts

    return (
        <>
            <section className="bg-neutral relative py-16 md:py-20 xl:px-13 flex flex-col items-center gap-5.5 md:gap-18">
                <div className="text-secondary text-center">
                    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold">Access Expert Business Tips</h3>
                </div>

                <div className="w-full">
                    <BlogPosts posts={blogPosts} />
                </div>

                <div className="flex flex-row justify-around mt-5">
                    <ActionButton to="/blog" filled>
                        View all Insights
                    </ActionButton>
                </div>
            </section>
        </>
    )
}

export default TipsSection;