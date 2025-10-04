interface Props {
    document: {
        "title": string
        "introduction": string
        "sections": {
            "id": string
            "title": string
            "content": string
            "order": number
        }[]
    }
}

// interface SubsectionProps {
//     children?: React.ReactNode
//     subtitle?: string
// }

interface HTMLSubsectionProps {
    content?: string
    subtitle?: string
}


// const BulletListItem: React.FC<{ children: ReactNode }> = ({ children }) => {

//     return (
//         <li className="list-inside marker:text-2xl md:marker:text-3xl marker:content-['●']">
//             {children}
//         </li>
//     )
// }

// const Subsection: React.FC<SubsectionProps> = ({ children, subtitle }) => {

//     return (
//         <div className="w-full flex flex-col gap-3 md:gap-5">
//             {subtitle && <h4 className="text-xl md:text-3xl font-semibold">{subtitle}</h4>}
//             <p className="md:text-lg">
//                 {children}
//             </p>
//         </div>
//     )
// }

const HTMLSubsection: React.FC<HTMLSubsectionProps> = ({ content, subtitle }) => {
    return (
        <div className="w-full flex flex-col gap-3 md:gap-5">
            {subtitle && <h4 className="text-xl md:text-3xl font-semibold">{subtitle}</h4>}
            <div
                {...(!content ? {} : { dangerouslySetInnerHTML: { __html: content } })}
            />
        </div>
    )
}

const TermsContentSection: React.FC<Props> = ({ document }) => {

    return (
        <>
            <section className="bg-neutral w-full flex flex-col gap-9 md:gap-8 text-secondary px-4 sm:px-18 lg:px-37 xl:px-90 pt-15 md:pt-23 pb-20 md:pb-30">
                <HTMLSubsection
                    content={document.introduction}
                />
                {
                    document.sections.map(section => (
                        <HTMLSubsection
                            subtitle={section.title}
                            content={section.content}
                        />
                    ))
                }
                {/* <Subsection>
                    These Terms and Conditions (“Agreement”) govern your access and use of the Altbuilda platform (“Platform” or “Website”), a product of Alternative Bank Limited (“Altbuilda”, “we”, “us”, or “our”). Additional product-specific terms may apply depending on your subscription type. By accessing or using the Platform, you confirm your agreement to be bound by these Terms. If you do not accept the Terms, please do not use the Platform.
                </Subsection>

                <Subsection subtitle="Registration">
                    You can browse general content without registering. However, to access full Altbuilda services, including invoicing, tax tools, and business networking, you must complete a registration process and create an account.
                </Subsection>

                <Subsection subtitle="Access to the Platform">
                    While we aim to provide continuous and secure access to Altbuilda, we endeavor to make the Website available uninterrupted and fault free. However, we do not guarantee that the Website will always be available or work perfectly at all times; downtimes may arise in cases of maintenance, fraud or a fault in our systems, for an unascertainable period, usually beyond our control.
                    <br />
                    In the event of a service disruption, users will be notified promptly through appropriate communication channels, and we will work diligently to restore access as quickly as possible.
                </Subsection>

                <Subsection subtitle="Nature Of Information On our website">
                    <BulletListItem>
                        All information on our website is only intended to provide you with general information about us, our products, services and objectives. Nothing on the website should be treated as an offer but merely as an invitation to do business with us.
                    </BulletListItem>
                    <br />
                    <BulletListItem>
                        All information is provided “as is” and should not be treated as professional or investment advice of any kind. You should consult your own professional advisors before relying on any information on this site.
                    </BulletListItem>
                </Subsection>

                <Subsection subtitle="Nature of the information on the platform?">
                    All content on Altbuilda is intended for general informational purposes and does not constitute legal, tax, or professional advice. You are encouraged to consult appropriate advisors before making decisions based on information from this platform.
                </Subsection>

                <Subsection subtitle="Subscription Plans and Services">
                    Altbuilda offers subscription-based services designed to support SMEs. Subscription fees are billed annually and are non-refundable, except where required by applicable law. We reserve the right to revise pricing, with notice provided before any changes take effect.
                </Subsection>

                <Subsection subtitle="Permitted Use and Access">
                    You are granted a personal, non-transferable license to use Altbuilda in accordance with these Terms. You may not:
                    <br />
                    <br />
                    <BulletListItem>
                        Share, sublicense, or resell platform access.
                    </BulletListItem>
                    <br />
                    <BulletListItem>
                        Copy, modify, or reverse-engineer the platform.
                    </BulletListItem>
                    <br />
                    <BulletListItem>
                        Use Altbuilda for unlawful or fraudulent activity.
                    </BulletListItem>
                    <br />
                    <BulletListItem>
                        Upload or disseminate harmful code or content.
                    </BulletListItem>
                    <br />
                    <BulletListItem>
                        Engage in any of the following prohibited activities or business types:
                        <ul className="list-inside pl-8">
                            <br />
                            <li className="marker:text-lg md:marker:text-xl list-inside marker:content-['⮚']">
                                Gambling or betting businesses
                            </li>
                            <br />
                            <li className="marker:text-lg md:marker:text-xl list-inside marker:content-['⮚']">
                                Adult entertainment, pornography, or sexually explicit content
                            </li>
                            <br />
                            <li className="marker:text-lg md:marker:text-xl list-inside marker:content-['⮚']">
                                Interest-based (riba) financial services
                            </li>
                            <br />
                            <li className="marker:text-lg md:marker:text-xl list-inside marker:content-['⮚']">
                                Sale or production of alcoholic beverages
                            </li>
                            <br />
                            <li className="marker:text-lg md:marker:text-xl list-inside marker:content-['⮚']">
                                Tobacco or narcotic substance trade
                            </li>
                            <br />
                            <li className="marker:text-lg md:marker:text-xl list-inside marker:content-['⮚']">
                                Sale or processing of pork and pork products
                            </li>
                        </ul>
                    </BulletListItem>
                    <br />
                    Violations may result in suspension or termination of access with notice stating the reason for access termination before suspending or terminating access, except in cases involving severe misconduct such as fraud.
                </Subsection>

                <Subsection subtitle="Account Security">
                    You are responsible for safeguarding your login credentials. We are not liable for any loss or damage arising from unauthorized account use. Please notify us immediately if you suspect a security breach.
                </Subsection>

                <Subsection subtitle="Limitations To Use">
                    You agree to use the Website only for lawful purposes. You are prohibited from any use of the Platform that would constitute a violation of any applicable law, regulation, rules or regulation. Any unauthorized use of the Platform, including but not limited to misuse of passwords, or misuse of any information posted on the Platform is strictly prohibited.
                </Subsection>

                <Subsection subtitle="Disclaimers and Limitations of Liability">
                    <BulletListItem>
                        <strong>We accept no liability</strong>, no matter how that may be caused, and whether directly or indirectly, for any loss or damage caused to you or another (including but not limited to loss of income, business, profits, opportunity, contracts, actual or anticipated savings, data, reputation or goodwill) arising from your use of the Website.
                    </BulletListItem>
                    <br />
                    <BulletListItem>
                        We have no liability for changes made to the Website or its content by unauthorized third parties.
                    </BulletListItem>
                    <br />
                    <BulletListItem>
                        We hereby exclude any express or implied warranties that any material used or downloaded from the Website will not cause loss or damage to any data or property, such as software or hardware, including but not limited to loss or damage caused by malicious script, viruses, spyware, Trojan Horses or worms. We accept no liability for any such loss or damage suffered by you or another as a result of your use of the Website.
                    </BulletListItem>
                    <br />
                    <BulletListItem>
                        You assume all responsibility and risk with respect to your use of the Website. The services are provided and available “as is,” and “as available”. You understand and agree that, to the fullest extent permitted by law, we disclaim all warranties, representations and endorsements, express or implied, with regard to the Platform, including, without limitation, implied warranties of title, merchantability, non-infringement and fitness for a particular purpose.
                    </BulletListItem>
                    <br />
                    <BulletListItem>
                        We do not warrant use of the Platform will be uninterrupted or error-free or that errors will be detected or corrected. We do not assume any liability or responsibility for any computer viruses, bugs, malicious code or other harmful components, delays, inaccuracies, errors or omissions, or the accuracy, completeness, reliability or usefulness of the information disclosed or accessed through the services.
                    </BulletListItem>
                    <br />
                    <BulletListItem>
                        You acknowledge that third party services are available on the Platform. We may have formed partnerships or alliances with some of these third parties from time to time in order to facilitate the provision of certain services to you. However, you acknowledge and agree that at no time are we making any representation or warranty regarding any third party’s services, nor will we be liable to you or any third party for any consequences or claims arising from or in connection with such third party including, and not limited to, any liability or responsibility for, death, injury or impairment experienced by you or any third party. You hereby disclaim and waive any rights and claims you may have against us with respect to a third party’s services.
                    </BulletListItem>
                    <br />
                    <BulletListItem>
                        We do not, in any way, endorse any information or service offered or described on the Platform. In no event shall we be liable to you or any third party for any decision made, or action taken in reliance on such information.
                    </BulletListItem>
                    <br />
                    <BulletListItem>
                        In no event, under no legal or equitable theory (whether tort, contract, strict liability or otherwise), shall we or any of our respective employees, directors, officers, agents or affiliates, be liable hereunder or otherwise for any loss or damage of any kind, direct or indirect, in connection with or arising from the use of the Platform / services or our agreement with you concerning the services, including, but not limited to, (i) the use of or inability to use the Platform, the service, or the content, (ii) any claim attributable to errors, omissions, or other inaccuracies in the Platform, the service and/or the content (iii) unauthorized access to or alteration of your transmissions or data, or (iv) any other matter relating to the Platform, the service, or the content, and any compensatory, direct, consequential, incidental, indirect, special or punitive damages, lost anticipated profits, loss of goodwill, loss of data, business interruption, accuracy of results, or computer failure or malfunction, even if we have been advised of or should have known of the possibility of such damages.
                    </BulletListItem>
                </Subsection>

                <Subsection subtitle="Privacy and Data Usage">
                    By using Altbuilda, you consent to the collection and use of your data for platform functionality, marketing personalization, and service improvement. Data may be shared with verified third parties to fulfill services. For more details, please refer to our [Privacy Policy]
                </Subsection>

                <Subsection subtitle="Intellectual Property">
                    All content, software, and branding on Altbuilda are the intellectual property of Alternative Bank or its licensors. You may not reproduce, redistribute, or commercially exploit any material without prior written consent.
                </Subsection>

                <Subsection subtitle="Modifications to these Terms">
                    <BulletListItem>
                        We may change these terms from time to time. This is solely at our discretion and changes will be effective when posted on the Platform with no other notice provided. Please check the Terms regularly for updates as changes shall be effective immediately, and we may indicate the date of such revision.
                    </BulletListItem>
                    <br />
                    <BulletListItem>
                        In addition, we may change, suspend or discontinue any aspect of the Services at any time, including the availability of any feature, or content. We may also impose limits on certain features and service or restrict your access to parts or all of the Website or the Services provided thereon without notice or liability.
                    </BulletListItem>
                    <br />
                    <BulletListItem>
                        You are free to decide whether or not to accept a revised version of these Terms, but accepting these Terms, as revised, is required for you to continue accessing or using the Platform and Services. If you do not agree to these Terms or any revised version of these Terms, your sole recourse is to terminate your access or use of the Services. Except as otherwise expressly stated by us, your access and use of the Services are subject to, and constitute your acceptance of, the version of these Terms in effect at the time of your access or use.
                    </BulletListItem>
                </Subsection>

                <Subsection subtitle="Third Party Links and Services">
                    Altbuilda may include links to third-party services such as payment processors or CAC registration. These services are governed by their respective terms. We are not responsible for the availability or content of these external sites.
                    <br />
                    <br />
                    <BulletListItem>
                        The Website is designed to be accessed via its main home pages and such other pages as we may determine. If you access other pages on the Website directly, for example via search engines or via links provided by third parties, you may not see important information relevant to the page in question, or other announcements or information which may be important to you.
                    </BulletListItem>
                    <br />
                    <BulletListItem>
                        The Website contains links which will direct you to other websites or domains owned and operated by us or our group, for example to websites which offer you services. When you use these links and access our other websites or domains you will become subject to the terms, conditions and policies which apply to those websites or domains. Those terms, conditions and policies will be available for you to view on those websites or domains, and it is your responsibility to make sure that you are familiar with and willing to accept them. We accept no liability, no matter how that may be caused, for any failure on your part to view or comply with those terms, conditions and policies.
                    </BulletListItem>
                </Subsection>

                <Subsection subtitle="Platform Limitations">
                    We do not guarantee that services will meet all user expectations or remain uninterrupted. You accept that occasional downtime or updates may affect access or usability.
                </Subsection>

                <Subsection subtitle="Indemnity">
                    You agree to defend, indemnify, and hold The Alternative Bank where Altbuida is under,  its employees, officers, directors, agents, its affiliates and third-party service providers harmless from and against any and all claims, suits, liabilities, damages (actual and consequential), losses, fines, penalties, costs, and expenses (including reasonable attorneys’ fees) arising from or in any way related to any claims relating to your use of the Website, violation of these Terms, applicable law or any third-party rights or claims, or your fraud or wilful misconduct. Such indemnified parties reserve the right to assume the exclusive defence and control of any matter subject to indemnification by you, in which event you will cooperate in asserting any available defences.
                </Subsection>

                <Subsection subtitle="Force Majeure">
                    To the fullest extent permitted under applicable law, we will be excused from performance under these Terms for any period that we are prevented from or delayed in performing any obligations pursuant to this Terms, in whole or in part, as a result of a Force Majeure Event. For purposes of this section, “Force Majeure Event” means an event or series of events caused by or resulting from any of the following: (a) weather conditions or other elements of nature or acts of God; (b) acts of war, acts of terrorism, insurrection, riots, civil disorders or rebellion; (c) quarantines or embargoes, (d) labor strikes; (e) unauthorized access to our  information technology systems by third parties; or (f) other causes beyond our reasonable control and contemplation.
                </Subsection>

                <Subsection subtitle="Severability">
                    If any of these Terms is judicially determined to be illegal, unenforceable, or invalid in whole or in part for any reason, such illegal, unenforceable, or invalid provisions or part(s) of the same shall be stricken from this terms, and such provision shall not affect the legality, enforceability, or validity of the remainder of these Terms. The stricken provision maybe replaced, to the extent possible, with a legal, enforceable, and valid provision that is as similar in term to the stricken provision as is legally possible.
                </Subsection>

                <Subsection subtitle="Dispute Resolution">
                    We will use our best efforts to resolve any issue that may arise from the use of the Platform. However, we realize that there may be rare cases where we may not be able to resolve an issue to your satisfaction. In the event we cannot resolve a dispute between us, you agree that all matters related to any use or access to the Platform, or the services shall be referred to Mediation.
                </Subsection>

                <Subsection subtitle="Your Privacy">
                    We take the privacy of our Users very seriously. You understand that by using the Services, you consent to the collection, use, storage, and disclosure of your information.
                </Subsection>

                <Subsection subtitle="Governing Law">
                    These Terms and your use of the Platform shall be governed by the laws of the Federal Republic of Nigeria Islamic law of commercial jurisprudence as interpreted by the CBN Financial Regulatory Advisory Council of Experts. Where there is a conflict between the provisions of Islamic Commercial Law and any written laws of the Federal Republic of Nigeria, the Islamic Commercial Law shall prevail, being the applicable law governing such transactions., without giving effect to the principles of conflict of laws.
                </Subsection>

                <Subsection subtitle="Capacity To Enter into These Terms">
                    You hereby warrant to us that you have the required legal capacity to enter into and be bound by contractual terms. Minors must be assisted by their legal guardians when reading these conditions. If you are unsure whether you have the legal capacity to enter into agreements, contact someone able to provide you with this information before you continue using this site.
                </Subsection>

                <Subsection subtitle="Contact Us">
                    If you have any inquiries regarding our services, these Terms, or the Website, you may reach us by sending a mail to help@altbank.ng and include the following information: your name, telephone number and a description of your concern or calling us on 01-7000555. We’re here to support your business growth. For inquiries or feedback, don’t hesitate to reach out.
                </Subsection> */}
            </section>
        </>
    )
}

export default TermsContentSection;