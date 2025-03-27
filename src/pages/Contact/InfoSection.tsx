import infoSectionBG from "../../assets/info-section-bg.png"
import useThemeContext from "../../hooks/useThemeContext";

interface SupportInfoTileProps {
    title: string
    contact: string
    hours: string
}

const SupportInfoTile: React.FC<SupportInfoTileProps> = ({title, contact, hours}) => {

    return (
        <div className="w-77.5 flex flex-col gap-6 p-8">
            <p className="text-xl font-bold">
                {title}
                <br />
                __
            </p>

            <p className="text-xl font-semibold">
                {contact}
            </p>

            <p className="text-xl">
                Assistance hours:
                <br />
                {hours}
            </p>
        </div>
    )
}

const InfoSection: React.FC = () => {
    const { theme } = useThemeContext()

    return (
        <>
            <section className="w-full bg-cover bg-no-repeat flex flex-row justify-between pt-20 px-14 pb-27" style={{ background: `linear-gradient(rgba(0,0,0,${theme == "dark" ? ".7" : "0"}), rgba(0,0,0,${theme == "dark" ? ".7" : "0"})), url(${infoSectionBG})` }}>
                <div className="flex flex-col gap-6 max-w-144">
                    <p className="text-primary text-2xl">Support</p>

                    <h1 className="text-6xl/15 text-secondary font-bold">We’re Here to Help you</h1>
                </div>

                <div className="flex flex-row gap-25 text-secondary">
                    <SupportInfoTile title="Email Support" contact="help@info.com" hours="Instant support for queries"/>

                    <SupportInfoTile title="Phone Support" contact="(808) 998-34256" hours="Monday - Friday 9 am to 6 pm" />
                </div>
            </section>
        </>
    )
}

export default InfoSection;