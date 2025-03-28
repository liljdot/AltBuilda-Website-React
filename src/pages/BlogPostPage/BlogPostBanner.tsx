interface Props {
    subject: string
    title: string
    author: {
        name: string
        image?: string
    }
    date: Date
}

const BlogPostBanner: React.FC<Props> = ({ subject, title, author, date }) => {
    const placeholderAuthorImage = "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" // insert placeholder avatar here

    return (
        <>
            <section className="w-full bg-base-100 flex flex-col gap-10 items-center px-7 md:px-0 pt-10 md:pt-24 pb-4 md:pb-24">
                <div className="flex flex-col gap-3 max-w-240 text-center items-center">
                    <h6 className="text-primary font-semibold">{subject}</h6>

                    <h1 className="text-xl md:text-2xl/10 lg:text-3xl/10 xl:text-5xl/15 text-secondary font-bold">{title}</h1>

                    <div className="flex flex-row gap-3">
                        <div className="avatar">
                            <div className="w-10 rounded-full">
                                <img src={author.image || placeholderAuthorImage} />
                            </div>
                        </div>

                        <div className="text-secondary text-sm">
                            <p className="font-semibold">{author.name}</p>

                            <p>{`${date.toLocaleDateString("en-UK", { day: "2-digit", month: "short", year: "numeric" })}`}</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BlogPostBanner;