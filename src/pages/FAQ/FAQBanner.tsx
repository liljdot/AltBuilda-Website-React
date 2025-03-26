const FAQBanner: React.FC = () => {

    return (
        <>
            <section className="w-full bg-base-100 flex flex-row justify-between px-20 py-24">
                <div className="flex flex-col gap-3 px-8">
                    <p className="text-primary font-semibold">FIND QUICK ANSWERS TO COMMON QUESTIONS</p>

                    <h3 className="text-5xl text-secondary font-bold">FAQ</h3>
                </div>

                <div className="flex flex-col justify-end px-8">
                    <p className="text-xl text-secondary">Have questions? We’re here to help.</p>
                </div>
            </section>
        </>
    )
}

export default FAQBanner;