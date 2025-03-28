interface Props {
    imageString: string
    title: string
}

const ImageSection: React.FC<Props> = ({imageString, title}) => {

    return (
        <section className="w-full bg-neutral px-4 sm:px-18 lg:px-37 xl:px-75.5">
            <img src={imageString} alt={title} className="w-full"/>
        </section>
    )
} 

export default ImageSection