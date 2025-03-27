import image404 from "../../assets/404-image.png"
import image404Dark from "../../assets/404-image-dark.png"
import useThemeContext from "../../hooks/useThemeContext"

const NotFound: React.FC = () => {
    const {theme} = useThemeContext()

    return (
        <>
            <main className="p-0 bg-neutral w-full">
                <div className="max-w-450 mx-auto">
                    <section className="w-full bg-base-100 flex flex-row px-20 py-40">
                        <div className="flex flex-col w-[50%] justify-center px-8">
                            <h6 className="text-primary text-left font-medium">404 error</h6>

                            <h1 className="text-secondary text-6xl/20 font-bold">Oops! We Couldn't Find That Page.</h1>

                            <p className="text-secondary text-xl/10">
                                It seems like the page you were looking for is missing or may
                                have been moved. But don't worry, we're here to help!
                            </p>
                        </div>

                        <figure className="flex flex-col w-[50%] justify-center px-8">
                            <img src={theme == "dark" ? image404Dark : image404} alt="404" />
                        </figure>
                    </section>
                </div>
            </main>
        </>
    )
}
export default NotFound;