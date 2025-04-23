import { Fragment } from "react/jsx-runtime"
import { BlogPost } from "../../types"
import { BodyType } from "../../types/entities"
import { Link } from "react-router-dom"

interface Props {
    post: BlogPost
}

interface ElementProps {
    content: BodyType
}

const Element: React.FC<ElementProps> = ({ content }) => {
    switch (content.type) {
        case "SUBTITLE":
            return <h4 className="text-xl md:text-3xl font-semibold">{content.content}</h4>

        case "PARAGRAPH":
            return <p className="md:text-lg">{content.content.split("\n").map(paragragh => <Fragment key={"paragraph-" + Math.random()}>{paragragh} <br /></Fragment>)}</p>

        case "HEADING":
            return <h5 className="text-lg md:text-2xl font-semibold">{content.content}</h5>

        case "ULIST":
            return (
                <ul className="md:text-lg list-disc list-inside">
                    {content.content.map((item) => <li key={"list-item-" + Math.random()}>{item}</li>)}
                </ul>
            )
            
        case "LINEBREAK":
            return <br />

        default: return <></>
    }
}

const ContentSection: React.FC<Props> = ({ post }) => {

    return (
        <>
            <section className="bg-neutral w-full flex flex-col gap-9 md:gap-8 text-secondary px-4 sm:px-18 lg:px-37 xl:px-90">
                <div className="w-full flex flex-col gap-3 md:gap-5">
                    {post.body.map((element, index) => <Element key={"element-" + index} content={element} />)}
                </div>

                {post.conclusion && <div className="flex flex-col gap-3 md:gap-5 bg-base-100 rounded-xl p-5 md:p-8 border border-info">
                    {post.conclusion?.map((element, index) => <Element key={"element-" + index} content={element} />)}
                </div>}

                {post.action &&
                    <Link to={post.action.link} className="btn bg-primary text-neutral rounded-full w-fit min-w-77 md:min-w-fit lg:min-w-132 text-sm md:text-xl font-medium py-6.5 px-2 md:px-12 shadow-none hover:scale-105 transition-all ease-in-out duration-500">
                        {post.action.text}
                    </Link>
                }
            </section>
        </>
    )
}

export default ContentSection