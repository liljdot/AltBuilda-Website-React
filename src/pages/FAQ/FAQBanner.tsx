const FAQBanner: React.FC = () => {

    return (
        <>
            <section className="w-full bg-base-100 flex flex-col lg:flex-row gap-4 md:gap-0 md:justify-between px-4 lg:px-20 py-16 lg:py-24">
                <div className="flex flex-col gap-3  sm:px-8">
                    <p className="text-primary text-sm sm:text-[1rem] font-semibold">FIND QUICK ANSWERS TO COMMON QUESTIONS</p>

                    <h3 className="text-3xl md:text-5xl text-secondary font-medium md:font-bold">FAQ</h3>
                </div>

                <div className="flex flex-col md:justify-end sm:px-8">
                    <p className="md:text-xl text-secondary">Have questions? We’re here to help.</p>
                </div>
            </section>
        </>
    )
}

export default FAQBanner;