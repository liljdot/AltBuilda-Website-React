interface Props {
    page: string
    title: string
}

const Banner: React.FC<Props> = ({page, title}) => {

    return (
        <>
            <section className="w-full bg-base-100 p-9 md:p-20">
                <div className="md:px-8 flex flex-col gap-3 md:w-192">
                    <h6 className="text-primary">{page}</h6>

                    <h3 className="text-secondary text-2xl/11 md:text-3xl/11 lg:text-5xl font-bold">{title}</h3>
                </div>
            </section>
        </>
    )
}

export default Banner