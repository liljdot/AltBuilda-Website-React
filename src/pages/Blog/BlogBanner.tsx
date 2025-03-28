const BlogBanner: React.FC = () => {

    return (
        <>
            <section className="w-full flex flex-col gap-10 items-center py-24">
                <div className="flex flex-col max-w-240 text-center">
                    <h6 className="text-primary font-semibold">Blog</h6>

                    <h1 className="text-5xl/15 text-secondary font-bold mt-3">Empowering Your SME Success: Latest Insights and Strategies.</h1>

                    <p className="text-xl text-secondary mt-3">
                        The latest industry news, interviews, and resources.
                    </p>
                </div>

                {/* search container  */}
                <div className="w-80">
                    <label className="input w-full bg-neutral">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></g></svg>
                        <input type="search" className="grow bg-ne" placeholder="Search" />
                    </label>
                </div>
            </section>
        </>
    )
}

export default BlogBanner