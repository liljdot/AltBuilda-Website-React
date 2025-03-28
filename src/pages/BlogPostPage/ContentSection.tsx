import { BlogPost } from "../../types"

interface Props {
    post: BlogPost
}

interface SubsectionProps {
    content: {
        subtitle: string
        text: string
    }
}

const Subsection: React.FC<SubsectionProps> = ({ content }) => {

    return (
        <div className="w-full flex flex-col gap-5">
            <h4 className="text-3xl font-semibold">{content.subtitle}</h4>
            <p className="text-lg">{content.text}</p>
        </div>
    )
}

const ContentSection: React.FC<Props> = ({ post }) => {

    return (
        <>
            <section className="bg-neutral w-full flex flex-col gap-8 text-secondary px-90">
                {post.body.map((subsection, index) => <Subsection key={"subsection" + index} content={subsection} />)}

                <div className="flex flex-col gap-5 bg-base-100 rounded-xl p-8 border border-info">
                    <h4 className="text-3xl font-semibold">Conclusion</h4>
                    <p className="text-lg">{post.conclusion}</p>
                </div>
            </section>
        </>
    )
}

export default ContentSection