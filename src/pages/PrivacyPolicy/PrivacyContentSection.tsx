import { ReactNode } from "react"

interface SubsectionProps {
    children?: React.ReactNode
    subtitle?: string
}

const BulletListItem: React.FC<{ children: ReactNode }> = ({ children }) => {

    return (
        <li className="list-inside marker:text-2xl md:marker:text-3xl marker:content-['●']">
            {` ${children}`}
        </li>
    )
}

const Subsection: React.FC<SubsectionProps> = ({ children, subtitle }) => {

    return (
        <div className="w-full flex flex-col gap-3 md:gap-5">
            {subtitle && <h4 className="text-xl md:text-3xl font-semibold">{subtitle}</h4>}
            <p className="md:text-lg">
                {children}
            </p>
        </div>
    )
}

const PrivacyContentSection: React.FC = () => {

    return (
        <>
            <section className="bg-neutral w-full flex flex-col gap-9 md:gap-8 text-secondary px-4 sm:px-18 lg:px-37 xl:px-90 pt-15 md:pt-23 pb-20 md:pb-30">
                <Subsection>
                    At Alternative Bank Limited, we take your privacy seriously. We are committed to protecting your personal information and ensuring your data is collected, stored, and processed lawfully and transparently through Altbuida.
                    <br />
                    <br />
                    This Privacy Policy (“Policy”) explains how we collect, use, store, and share the personal data you provide when accessing Altbuida through our website, mobile platform, and other communication or service channels (collectively referred to as “Services”).
                    <br />
                    <br />
                    Throughout this Policy, “we”, “us”, “our” or “Altbuida” refer to Alternative Bank Limited as the provider of Altbuida. “You” or “your” means any user, business owner, entrepreneur, consultant, or subscriber who interacts with the Altbuida platform.
                    <br />
                    <br />
                    By accessing or using the Altbuida platform or any of our services, you agree to the terms of this Policy.
                </Subsection>

                <Subsection subtitle="The Information We Collect About You">
                    We gather information from you for a number of reasons. We may need you to provide the following but is not limited to Personal Information/Data such as your name, contact details, identification, work and residential addresses, gender, Business name, CAC registration details, and tax-related data,Payment information and subscription preferences,Bank Verification Number (BVN), payment details and other enquiry details which would enhance your service experience.We may also collect sensitive data where legally required or with your explicit consent (e.g. biometric ID verification).
                </Subsection>

                <Subsection subtitle="Information on how you use your device/ Usage Data. ">
                    We may also collect information that your browser sends whenever you visit our website or banking applications or when you access our Services by or through a mobile device (“Usage Data”). This Usage Data may include information such as your computer’s Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit and the time spent on those pages amongst other diagnostic data. When you access the Service by or through a mobile device or use the mobile app, this Usage Data may include information such as the type of mobile device you use, your mobile device unique ID, the IP address of your mobile device, your mobile operating system, the type of mobile Internet browser you use, unique device identifiers and other diagnostic data.
                </Subsection>

                <Subsection subtitle="How We Use Your Information">
                    We may use your personal data to Deliver platform features and services (e.g., invoicing, financial analytics, tax tools), Set up and manage your Altbuida account, Personalize your user experience and marketing communications, Improve platform functionality, usability, and security, Process payments and manage your subscriptions, Respond to inquiries or provide customer support or Fulfill legal and regulatory obligations
                </Subsection>

                <Subsection subtitle="Sensitive Data">
                    We may hold information about you which includes without limitation health, criminal conviction information or biometric information used to uniquely identify you, (for example your fingerprint, facial recognition or voice recording). We will only hold this data when we need to for the purposes of the product or services we provide to you, where we are required to process the data for a public interest purpose, or where we have a legal obligation or your consent to do so.
                </Subsection>

                <Subsection subtitle="Information Which You Have Consented To Us Using">
                    We may collect information about your marketing preferences to help us share with you information about relevant services, products and offers that we think may be of interest to you.
                </Subsection>

                <Subsection subtitle="Tracking and Cookies Data">
                    Altbuida uses cookies and related technologies to understand how you use our platform and to enhance your experience. You can manage your cookie preferences through your browser settings. Please note, disabling cookies may limit certain platform features. Tracking technologies are also used-e.g, beacons, tags, and scripts to collect and track information and to improve and analyze our Service. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. You can also refuse permission to read your phone data by the mobile application. However, if you do not accept cookies on your browser or allow permissions on your mobile device, our online service experience to you may be degraded and you may not be able to use some portions of our Service. We may also collect information about your internet browser settings and Internet Protocol (IP) address and other relevant information to help us identify your geographic location when providing you with our services.
                    <br />
                    <br />
                    <br />
                    Examples of Cookies we use:
                    <br />
                    <br />
                    <BulletListItem>
                        Session Cookies. We use Session Cookies to operate our Service. Session cookies will expire at the end of your browser session and allow us to link your actions during that browser session.
                    </BulletListItem>
                    <br />
                    <BulletListItem>
                        Preference Cookies. We use Preference Cookies to remember your preferences and actions, across multiple sites.
                    </BulletListItem>
                    <br />
                    <BulletListItem>
                        Security Cookies. We use Security Cookies for security purposes.
                    </BulletListItem>
                    <br />
                    <BulletListItem>
                        Information from social networks or online accounts-This includes Information from any social media profiles or any accounts that you share with us.
                    </BulletListItem>
                </Subsection>

                <Subsection subtitle="Who We Share Your Information With">
                    We may share your information with:
                    <br />
                    <BulletListItem>
                        Verified service providers (e.g., CAC, tax processors, payment gateways)
                    </BulletListItem>
                    <br />
                    <BulletListItem>
                        Regulatory or government authorities (when required by law)
                    </BulletListItem>
                    <br />
                    <BulletListItem>
                        Internal teams or affiliated Alternative Bank platforms for service delivery
                    </BulletListItem>
                    <br />
                    <BulletListItem>
                        Third-party tools used for analytics or performance monitoring
                    </BulletListItem>
                    <br />
                    We do not sell your data to third parties.
                </Subsection>

                <Subsection subtitle="How Do We Share Your Information">
                    We may share the information about you and your dealings with us, to the extent permitted by law, with the following:
                    <br />
                    <BulletListItem>
                        The Alternative Bank branches and subsidiaries
                    </BulletListItem>
                    <br />
                    <BulletListItem>
                        Legal/Regulatory Authorities – It may be necessary by law, legal process, litigation, and/or requests from public and governmental authorities for the Alternative Bank to disclose your personal information. We may also disclose information about you if we determine that for purposes of national security, law enforcement, or other issues of public importance, disclosure is necessary or appropriate;
                    </BulletListItem>
                    <br />
                    <BulletListItem>
                        Professional Advisers: Auditors/Legal Advisers
                    </BulletListItem>
                    <br />
                    <BulletListItem>
                        Credit Agencies;
                    </BulletListItem>
                    <br />
                    <BulletListItem>
                        Correspondent Banks;
                    </BulletListItem>
                    <br />
                    <BulletListItem>
                        External Auditors;
                    </BulletListItem>
                    <br />
                    <BulletListItem>
                        Strategic partners/service providers – for the purpose of providing our services to you. Your Personal information will not be shared with third parties for their marketing purposes.
                    </BulletListItem>
                    <br />
                    We may also disclose your Personal Information in the good faith and belief that such action is necessary in any of the following circumstances:
                    <br />
                    <BulletListItem>
                        We have your consent to share the information;
                    </BulletListItem>
                    <br />
                    <BulletListItem>
                        To comply with a legal obligation;
                    </BulletListItem>
                    <br />
                    <BulletListItem>
                        To bring you improved service across our array of products and services, when permissible under relevant laws and regulations, by disclosing your personal information with The Alternative Bank’s affiliated websites and businesses;
                    </BulletListItem>
                    <br />
                    <BulletListItem>
                        To protect and defend the rights or property of the Bank;
                    </BulletListItem>
                    <br />
                    <BulletListItem>
                        To prevent or investigate possible wrongdoing in connection with our Service;
                    </BulletListItem>
                    <br />
                    <BulletListItem>
                        To protect the personal safety of users of our Service or the public;
                    </BulletListItem>
                    <br />
                    <BulletListItem>
                        To protect against legal liability;
                    </BulletListItem>
                    <br />
                    <BulletListItem>
                        in the event of a reorganization, merger, or sale we may transfer any and all personal information we collect to the relevant third party or
                    </BulletListItem>
                    <br />
                    <BulletListItem>
                        We find that your actions on our web sites or banking applications violate any part of our Privacy Policy;
                    </BulletListItem>
                </Subsection>

                <Subsection subtitle="Data Security">
                    We implement industry-standard security measures to protect your information from unauthorized access or misuse. These include:
                    <br />
                    <BulletListItem>
                        Encryption protocols
                    </BulletListItem>
                    <br />
                    <BulletListItem>
                        Secure login and authentication processes
                    </BulletListItem>
                    <br />
                    <BulletListItem>
                        Regular audits and system reviews
                    </BulletListItem>
                    <br />
                    You are responsible for keeping your Altbuida login credentials safe.
                </Subsection>

                <Subsection subtitle="Updates To This Policy">
                    This Policy may be updated from time to time. We will notify you of any material changes via the Altbuida platform or email. Continued use of our services constitutes your acceptance of the updated terms.
                </Subsection>

                <Subsection subtitle="How We Secure Your Information">
                    We have implemented appropriate organizational and technical measures to keep your Personal Information/Data confidential and secure. This includes the use of encryption, access controls and other forms of security to ensure that your data is protected. We require all parties including our staff and third-parties processing data on our behalf to comply with relevant policies and guidelines. Where you have a password which grants you access to specific areas on our site or to any of our services, you are responsible for keeping this password confidential. We request that you do not share your password or other authentication details (e.g. token generated codes) with anyone.
                    <br />
                    <br />
                    Although we have taken measures to secure and keep your information confidential, because the security of your data is important to us, please be aware that no method of transmission over the Internet, or method of electronic storage can guarantee 100% security at all times. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security, you are responsible for securing and maintaining the privacy of your password and Account/profile registration information and verifying that the Personal Data we maintain about you is valid, accurate and up to date. If we receive instructions using your account login information, we will consider that you have authorized the instructions and process your instruction accordingly and without incurring any liability for doing so.
                </Subsection>

                <Subsection subtitle="How Long We Keep Your Information">
                    We retain your Information for as long as the purpose for which the information was collected continues. The information is then securely destroyed unless its retention is required to satisfy legal, regulatory, internal compliance or accounting requirements or to protect The Alternative Bank’s interest.
                </Subsection>

                <Subsection subtitle="Information From Locations Outside Nigeria">
                    If you are located outside Nigeria and choose to provide information to us, please note that the data, including Personal Data, will be processed in Nigeria. Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.
                </Subsection>

                <Subsection subtitle="Accuracy and Update of Your Information">
                    You are responsible for making sure the information provided is accurate and should inform on any changes as it occurs, this will enable us to update your information with us.
                    <br />
                    <br />
                    Any changes will affect only future uses of your Personal Information. Subject to applicable law, which might, from time to time, oblige us to store your Personal Information for a certain period of time, we will respect your wishes to correct inaccurate information. Otherwise, we will hold your Personal Information for as long as we believe it will help us achieve our objectives as detailed in this Privacy Policy.
                </Subsection>

                <Subsection subtitle="Your Rights">
                    You have certain rights in relation to the personal data we collect as provided by the Nigeria Data Protection Regulation 2019 (NDPR), these rights include:
                    <br />
                    <BulletListItem>
                        A right to access your personal data.
                    </BulletListItem>
                    <br />
                    <BulletListItem>
                        A right to rectify/update your information in our possession.
                    </BulletListItem>
                    <br />
                    <BulletListItem>
                        A right to request the erasure of personal data.
                    </BulletListItem>
                    <br />
                    <BulletListItem>
                        A right to withdraw your consent to processing of personal data. This will however not affect the legality of processing carried out prior to any such withdrawal.
                    </BulletListItem>
                    <br />
                    <BulletListItem>
                        Right to object to processing of personal data. This will only be applicable where there are no legal or operational reasons.
                    </BulletListItem>
                    <br />
                    <BulletListItem>
                        Request that your personal data be made available to you in a common electronic format and/or request that such data be sent to a third party.
                    </BulletListItem>
                    <br />
                    <BulletListItem>
                        Request that your information be erased. We might continue to retain such data if there are valid legal, regulatory or operational reasons.
                    </BulletListItem>
                    <br />
                    These rights are however subject to certain limitations as provided in the NDPR.
                </Subsection>

                <Subsection subtitle="Privacy of Minors">
                    We do not knowingly collect names, email addresses, or any other personally identifiable information from children through the internet or any other touch points. We do not allow children under the age of 18 to open accounts nor provide online banking services for children less than 18 years of age without the consent of a guardian. If you are a parent or guardian and you are aware that your child has provided us with Personal Data without verification of parental consent, please promptly contact us.
                </Subsection>

                <Subsection subtitle="Social Media Platforms">
                    We operate and communicate through our designated pages and accounts on some social media platforms to communicate and engage with our customers. We monitor and record comments and posts made about us on these channels so that we can improve our services. The general public can access and read any  information posted on these sites. Please note that any content you post to such social media platforms is subject to the applicable social media platform’s terms of use and privacy policies. We recommend that you review the information carefully in order to better understand your rights and obligations regarding such content.
                    <br />
                    <br />
                    Our Services may allow you to connect and share your actions, comments, content, and information publicly or with friends. We are not responsible for maintaining the confidentiality of any information you share publicly or with friends.
                    <br />
                    <br />
                    Our Service may also allow you to connect with us on, share on, and use third-party websites, applications, and services. Please be mindful of your personal privacy needs and the privacy needs of others, as you choose whom to connect with and what to share and make public. We cannot control the privacy or security of information you choose to make public or share with others. We also do not control the privacy practices of third parties. Please contact those sites and services directly if you want to learn about their privacy practices.
                </Subsection>

                <Subsection subtitle="Third Party Websites">
                    Our website, related websites and mobile applications may have links to or from other websites that are not operated by us. We have no control over and assume no responsibility for the security, privacy practices or content of third-party websites or services. We recommend that you always read the privacy and security statements on these websites.
                </Subsection>

                <Subsection subtitle="Service Providers">
                    We may employ third party companies and individuals to facilitate our Service (“Service Providers”), to provide the Service on our behalf, to perform specific Service-related roles  or to assist us in analysing how our Service is used. These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose outside of the service-specific need for which the data is required.
                </Subsection>

                <Subsection subtitle="Changes To This Policy">
                    This Privacy Policy is effective as of the date stated above and will remain in effect except with respect to any changes in its provisions in the future, which will be in effect immediately after being posted on our website.
                    <br />
                    <br />
                    Based on the changing nature of privacy laws, user needs and our business, we may modify this Privacy Policy from time to time. Any change to our privacy policy will be communicated on our website, via email or by placing a notice on our Platform and this will be effective as soon as published. Accordingly, we encourage periodic reviews of this Privacy Policy for awareness of any changes that may have occurred. Your continued use of the Services after we post any modifications to the Privacy Policy on our website will constitute your acknowledgment of the modifications and your consent to abide and be bound by the modified Privacy Policy.
                </Subsection>

                <Subsection subtitle="Contact Us">
                    If you have any questions or concerns about this Privacy Policy or how we manage your data, please contact:
                    <br />
                    <br />
                    help@altbank.ng
                    <br />
                    <br />
                    01-7000555
                </Subsection>
            </section>
        </>
    )
}

export default PrivacyContentSection;