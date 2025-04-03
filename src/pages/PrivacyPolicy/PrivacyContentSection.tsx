interface SubsectionProps {
    content: {
        subtitle: string
        text: string
    }
}


//replace each subsection component call with the jsx in here when actual data is given
const Subsection: React.FC<SubsectionProps> = ({ content }) => {

    return (
        <div className="w-full flex flex-col gap-3 md:gap-5">
            <h4 className="text-xl md:text-3xl font-semibold">{content.subtitle}</h4>
            <p className="md:text-lg">{content.text}</p>
        </div>
    )
}

const PrivacyContentSection: React.FC = () => {

    return (
        <>
            <section className="bg-neutral w-full flex flex-col gap-9 md:gap-8 text-secondary px-4 sm:px-18 lg:px-37 xl:px-90 pt-15 md:pt-23 pb-20 md:pb-30">
                <Subsection
                    content={{
                        subtitle: "What information do we collect?",
                        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum deserunt obcaecati ut possimus officiis, consequuntur molestias placeat perspiciatis vero laborum esse. Quidem rerum quia in, ut odit modi tempore ipsum ipsam corrupti iure alias, dignissimos saepe suscipit officia consequuntur amet ipsa eaque maxime! Commodi accusamus, consequatur voluptatum explicabo repellat eos ipsum, corrupti non voluptates saepe, tempore hic. Ratione accusantium quos tempora voluptatum cupiditate molestias numquam ex dolor unde sapiente sunt labore, qui facilis culpa dolore provident pariatur autem, minima debitis velit obcaecati aliquid? Non, perspiciatis officiis ipsa optio nostrum quia ipsum commodi distinctio corporis id aliquid similique fuga cupiditate quaerat consectetur dolorum doloribus recusandae! Enim laborum ea dolorem sunt placeat earum quaerat delectus, temporibus vel facere quam harum adipisci similique quae ipsum sit nam explicabo sequi? Obcaecati exercitationem dolor id minus tempora magnam placeat, assumenda aut iure consectetur esse atque vitae incidunt molestiae, voluptatibus quaerat? Dolorum veritatis quidem culpa consequuntur? Excepturi illo modi veniam unde, ex repudiandae sint exercitationem. Ipsam quam aperiam aut minima fugiat, dolorem ex ab molestiae sed sapiente? Consequatur tempore consectetur ut perferendis possimus nesciunt alias, maxime odio quas quod ducimus laboriosam blanditiis quasi fuga ratione doloremque atque asperiores optio accusamus animi doloribus magnam, natus rerum. Blanditiis provident libero voluptate veritatis odit laboriosam! Unde nostrum, eius odit quis aspernatur blanditiis vitae mollitia similique quo cum tempora commodi! Ipsa veniam quasi soluta, ab laboriosam suscipit earum laborum numquam nobis delectus iste corrupti facere culpa. Enim eos impedit sequi ad, neque doloribus placeat soluta inventore, iure corporis eveniet mollitia at delectus rerum velit vel sit distinctio id dolores possimus tenetur omnis! Harum voluptates alias quis similique earum optio magnam atque, odio dolore obcaecati quisquam nulla exercitationem voluptas doloribus ab sed aliquam dolorum dolores asperiores iste in recusandae nemo! Incidunt sequi mollitia rerum, praesentium rem earum iusto eos quo ipsam."
                    }} />

                <Subsection
                    content={{
                        subtitle: "How do we use your information?",
                        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis totam nisi, quaerat amet, corporis sapiente suscipit laudantium dolorum consequatur recusandae enim reprehenderit voluptates unde asperiores, esse exercitationem assumenda. Veniam incidunt ex deserunt illo maxime qui sit voluptatum cum cupiditate repellat voluptates perspiciatis ipsam tempora repellendus pariatur quisquam ut fugiat culpa, maiores dolorum ipsa architecto praesentium fuga! Numquam, suscipit perspiciatis cupiditate beatae consequuntur inventore quae quam nam expedita nisi consectetur hic illo placeat saepe. Ea voluptates sed quis est, pariatur exercitationem officia, asperiores officiis, sunt suscipit nemo. Possimus ducimus voluptatum perspiciatis. Consequatur saepe nobis, illum ea autem quod, optio labore ad aliquam voluptas reprehenderit? Repudiandae sint hic ut quae repellendus sed, veniam deserunt vel nobis eveniet similique facere fuga placeat iure, ullam aspernatur dolore autem. Deleniti reiciendis facere asperiores quibusdam libero, obcaecati, maiores qui reprehenderit fugiat culpa molestiae, consectetur fugit? Et quo inventore laudantium rerum perspiciatis tenetur ducimus! Expedita, deserunt assumenda."
                    }} />

                <Subsection
                    content={{
                        subtitle: "Do we use cookies and other tracking technologies?",
                        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, quidem? Minima excepturi dolore nulla repudiandae, officia nesciunt debitis quaerat iure est enim itaque distinctio soluta tenetur mollitia laboriosam eum commodi aut facilis rerum ipsum magnam odio tempore! Beatae, mollitia. Necessitatibus, quam? Molestias ad voluptas labore, mollitia repellat magnam quas harum."
                    }} />

                <Subsection
                    content={{
                        subtitle: "How long do we keep your information?",
                        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, quidem? Minima excepturi dolore nulla repudiandae, officia nesciunt debitis quaerat iure est enim itaque distinctio soluta tenetur mollitia laboriosam eum commodi aut facilis rerum ipsum magnam odio tempore! Beatae, mollitia. Necessitatibus, quam? Molestias ad voluptas labore, mollitia repellat magnam quas harum."
                    }} />

                <Subsection
                    content={{
                        subtitle: "How do we keep your information safe?",
                        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, quidem? Minima excepturi dolore nulla repudiandae, officia nesciunt debitis quaerat iure est enim itaque distinctio soluta tenetur mollitia laboriosam eum commodi aut facilis rerum ipsum magnam odio tempore! Beatae, mollitia. Necessitatibus, quam? Molestias ad voluptas labore, mollitia repellat magnam quas harum."
                    }} />

                <Subsection
                    content={{
                        subtitle: "What are your privacy rights?",
                        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, quidem? Minima excepturi dolore nulla repudiandae, officia nesciunt debitis quaerat iure est enim itaque distinctio soluta tenetur mollitia laboriosam eum commodi aut facilis rerum ipsum magnam odio tempore! Beatae, mollitia. Necessitatibus, quam? Molestias ad voluptas labore, mollitia repellat magnam quas harum."
                    }} />

                <Subsection
                    content={{
                        subtitle: "How can you contact us about this policy?",
                        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis totam nisi, quaerat amet, corporis sapiente suscipit laudantium dolorum consequatur recusandae enim reprehenderit voluptates unde asperiores, esse exercitationem assumenda. Veniam incidunt ex deserunt illo maxime qui sit voluptatum cum cupiditate repellat voluptates perspiciatis ipsam tempora repellendus pariatur quisquam ut fugiat culpa, maiores dolorum ipsa architecto praesentium fuga! Numquam, suscipit perspiciatis cupiditate beatae consequuntur inventore quae quam nam expedita nisi consectetur hic illo placeat saepe. Ea voluptates sed quis est, pariatur exercitationem officia, asperiores officiis, sunt suscipit nemo. Possimus ducimus voluptatum perspiciatis. Consequatur saepe nobis, illum ea autem quod, optio labore ad aliquam voluptas reprehenderit? Repudiandae sint hic ut quae repellendus sed, veniam deserunt vel nobis eveniet similique facere fuga placeat iure, ullam aspernatur dolore autem. Deleniti reiciendis facere asperiores quibusdam libero, obcaecati, maiores qui reprehenderit fugiat culpa molestiae, consectetur fugit? Et quo inventore laudantium rerum perspiciatis tenetur ducimus! Expedita, deserunt assumenda."
                    }} />
            </section>
        </>
    )
}

export default PrivacyContentSection;