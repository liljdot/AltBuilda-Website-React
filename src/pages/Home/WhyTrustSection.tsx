const Achievment: React.FC<{ value: string, achievment: string }> = ({value, achievment}) => {

    return (
        <div className="card bg-transparent">
            <div className="card-body text-center flex flex-col items-center gap-3 md:gap-5">
                <h2 className="text-4xl md:text-7xl font-bold">{value}+</h2>
                <p className="md:text-lg">{achievment}</p>
            </div>
        </div>
    )
}

const WhyTrustSection: React.FC = () => {

    return (
        <>
            <section className="w-full flex flex-col justify-center relative bg-accent py-22.5 sm:py-25 z-0 before:absolute before:h-[20%] sm:before:h-[66%] before:bg-neutral before:w-[140%] before:-translate-y-[270%] sm:before:-translate-y-[110%] before:rounded-b-[50%] before:self-center before:z-1 after:absolute after:h-[20%] sm:after:h-[66%] after:bg-neutral after:w-[140%] after:translate-y-[270%] sm:after:translate-y-[110%] after:rounded-t-[50%] after:self-center after:z-1">
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl text-center font-bold px-6 lg:px-50 xl:px-75">Why Small Medium Enterprises Trust Altbuilda.</h3>

                <div className="grid grid-cols-2 lg:grid-cols-3 px-5.5 lg:px-37.5 mt-12 lg:mt-23 gap-y-15 lg:gap-y-39">
                    <Achievment value="10,000" achievment="Businesses Served"/>
                    <Achievment value="50" achievment="SME Industries Supported"/>
                    <Achievment value="$100,000" achievment="In Total Transactions Processed"/>
                    <Achievment value="20,000" achievment="Total Registered Users"/>
                    <Achievment value="5,000" achievment="Invoices Generated"/>
                    <Achievment value="$10,000" achievment="Total Credit Processed"/>
                </div>
            </section>
        </>
    )
}

export default WhyTrustSection