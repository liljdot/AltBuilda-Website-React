import image404 from "../../assets/404-image.png"
import image404Dark from "../../assets/404-image-dark.png"
import useThemeContext from "../../hooks/useThemeContext"
import useDocumentTitle from "../../hooks/useDocumentTitle"

const NotFound: React.FC = () => {
    useDocumentTitle("404 | Bold by ALT")
    const { theme } = useThemeContext()

    return (
        <>
            <main className="p-0 bg-neutral w-full">
                <div className="max-w-450 mx-auto">
                    <section className="w-full bg-base-100 flex flex-col-reverse gap-8 lg:gap-0 lg:flex-row px-4 sm:px-8 lg:px-20 py-16 sm:py-24 lg:py-40">
                        <div className="flex flex-col gap-3 lg:gap-0 lg:w-[50%] justify-center md:px-8">
                            <h6 className="text-primary xl:text-xl font-semibold md:font-medium">404 error</h6>

                            <h1 className="text-secondary text-4xl xl:text-6xl/20 font-medium md:font-bold">Oops! We Couldn't Find That Page.</h1>

                            <p className="text-secondary text-lg xl:text-xl/10">
                                It seems like the page you were looking for is missing or may
                                have been moved. But don't worry, we're here to help!
                            </p>
                        </div>

                        <figure className="flex flex-col lg:w-[50%] justify-center md:px-8">
                            <img src={theme == "dark" ? image404Dark : image404} alt="404" className="w-[80%] lg:w-full"/>
                        </figure>
                    </section>
                </div>
            </main>
        </>
    )
}
export default NotFound;