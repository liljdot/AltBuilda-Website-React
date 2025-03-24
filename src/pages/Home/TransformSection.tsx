import OnlyFontLogo from "../../components/OnlyFontLogo";
import { ClipboardDoodle, HandshakeDoodle, ToolboxDoodle, ToolsDoodle } from "../../components/Doodles";
import ActionButton from "../../components/ActionButton";

const DoodleCard: React.FC<{ children: any }> = ({ children }) => {

    return (
        <>
            <div className="card rounded-sm w-73 bg-neutral shadow-md border border-base-100">
                <div className="card-body flex flex-col justify-between gap-5 items-center text-center text-secondary px-10 pt-15 pb-25">
                    {children}
                </div>
            </div>
        </>
    )
}

const TransformSection: React.FC = () => {

    return (
        <>
            <section className="bg-base-100 p-11 md:p-12 relative">
                <div className="md:mt-12 w-fit mx-auto relative pb-5">
                    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-center text-primary">
                        Transform your business
                        <br />
                        with
                    </h3>

                    <OnlyFontLogo className="absolute bottom-0 -right-10 lg:-right-5 w-34.5 sm:w-40 md:w-45 lg:w-61"/>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-10 place-items-center mt-19 sm:mt-35">
                    <DoodleCard>
                        <ClipboardDoodle />

                        <h6 className="text-xl font-bold">Seamless Business Registration</h6>

                        <p className="font-normal">Easily register businesses and verify CAC Documents</p>
                    </DoodleCard>

                    <DoodleCard>
                        <ToolsDoodle />

                        <h6 className="text-xl font-bold">Banking and Financial Tools</h6>

                        <p className="font-normal">Sync with AltPro for seamless payments.</p>
                    </DoodleCard>

                    <DoodleCard>
                        <ToolboxDoodle />

                        <h6 className="text-xl font-bold">Effortless Financial Management</h6>

                        <p className="font-normal">Invoicing, POS tracking, tax compliance & analytics</p>
                    </DoodleCard>

                    <DoodleCard>
                        <HandshakeDoodle />

                        <h6 className="text-xl font-bold">SME Community and Networking</h6>

                        <p className="font-normal">Market Hub for business collaborations & partnerships.</p>
                    </DoodleCard>
                </div>

                <div className="flex flex-row justify-center mt-12 lg:mt-17">
                    <ActionButton to="/services" filled>Discover More</ActionButton>
                </div>
            </section>
        </>
    )
}

export default TransformSection;