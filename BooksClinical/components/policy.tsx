import React, { useState } from 'react';
import { X } from 'lucide-react';


type PrivacyPolicyModalProps = {
    isOpen: boolean;
    closeModal: () => void;
};

const PrivacyPolicyModal = ({ isOpen, closeModal }: PrivacyPolicyModalProps) => {

    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 z-50 overflow-auto bg-smoke-light flex">
                    <div className="relative bg-white w-full max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl m-auto flex flex-col rounded-lg">
                        {/* Fixed header */}
                        <div className="flex justify-between items-center p-4 border-b border-gray-200">
                            <h1 className="text-2xl text-black font-bold">Privacy Policy</h1>
                            <button
                                onClick={closeModal}
                                className="rounded text-gray-900 hover:bg-blue-900 p-2"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Scrollable Modal content */}
                        <div className='text-gray-700 mt-4 px-4'>
                            <h2 className='text-black-900 font-bold'>INTRODUCTION</h2>
                            <p>Neuroreef Inc. along with its various affiliated businesses (collectively, &quot;Neuroreef&quot;, &quot;we&quot;, &quot;us&quot; or &quot;our&quot;) wants to inform you about the ways we process your personal information. In this Privacy and Cookie Notice, we explain the types of personal information that we collect, use and disclose.</p>
                            <p>For the purpose of this Privacy and Cookie Notice, personal information refers to any data relating to an individual who can be identified, directly or indirectly, based on that information. This may include but not limited to names, contact details, identification data, online identifiers or other characteristics specific to that individual.</p>
                            <p>This Privacy and Cookie Notice applies when you visit our websites, solutions and other services that refer or display a link to this notice (&quot;Services&quot;). This Privacy and Cookie Notice may be supplemented or replaced by additional privacy statements or terms provided to you from time to time.</p>


                            <h2 className='text-black-900 font-bold'>WHO WE ARE</h2>
                            <p>Neuroreef is an organization set up in Delaware, United States. Personal information provided to, or collected by, Neuroreef via our web pages is controlled by Neuroreef Inc located at 5406 Middle Fiskville Road, Austin, TX 78751. We are dedicated to protecting the private data of our users, clients, staff, and other stakeholders while assisting clients, staff, investors, and the general public in making informed decisions and having a greater influence. Please see the &quot;HOW YOU CAN CONTACT US&quot; section below if you have any questions about your personal information.
                            </p>

                            <h2 className='text-black-900 font-bold'>WHAT TYPES OF PERSONAL INFORMATION THAT WE COLLECT FROM YOU?</h2>
                            <p>The type of personal information we collect is contingent upon your association with us and the Services we provide. In order to do that, we may collect the following personal information about you:
                                Name and contact details;
                                Work-related information;
                                Account credentials;
                                Financial information;
                                Usage information;
                                Computer, device and connection information;
                                Any other information shared by you through our websites, apps, and other products and services, including web chat communications.

                                If you are under 18 years of age, please do not use or access the Services. Neuroreef does not knowingly collect or maintain personal information (as defined by the United States Children&apos;s Online Privacy Protection Act) from persons under 18 years of age. If Neuroreef learns that personal information of persons under 18 has been collected on or through the Services, we will take appropriate steps to delete this information.

                            </p>
                            <h2 className='text-black-900 font-bold'>HOW DO WE USE YOUR PERSONAL INFORMATION?</h2>
                            <p>Personal information is used for the purposes for which it has been collected and might be further used for statutory or other legitimate purposes only. For instance, when you use our website&apos;s online chat or service contact form, we will reply to your service request using the information you first gave us. We may utilize that data in the future to enhance the caliber of our customer support procedure.

                                Lawfulness of the processing is one of the main principles relating to the processing of your personal information - we apply the following legal processing grounds:
                                processing is necessary for the performance of a contract, or in order to take steps prior to entering into a contract;
                                processing is necessary for the purposes of our legitimate interests - for example, to improve the quality of our Services;
                                processing is necessary for compliance with a legal obligation to which we are subject, or that is otherwise lawful under the applicable data protection laws;
                                with your given consent.
                                Depending on how you interact with us and the Service, we may use your personal information for the following purposes:
                                Administering our relationship with you and our business, such as providing and managing your access to and use of our Services. This processing is necessary for the performance of a contract;
                                Improving our Services and developing new Sers, such as inviting you to participate in surveys or analyzing website traffic to optimize our websites or to personalize your experience with our Services. This processing is with your given consent or is necessary for the purposes of our legitimate interests;
                                Marketing, such as customer segmentation, providing you with marketing or advertising communications that we think you may be interested in. This processing is with your given consent or for our legitimate interests;
                                Recruiting, such as assessing job applicants. This processing is in order to take steps prior to entering into a contract or with your given consent;
                                Providing online communities, such as making chat rooms, web chats, forums, message boards, or news groups available to you. This processing is necessary for the performance of a contract or our legitimate interests. Please remember that any information disclosed in chat rooms, forums, message boards, and other online groups is public. We encourage you to exercise caution when disclosing personal information in these forums, as this information is made available to other users. Do not disclose information in these public forums that might be considered confidential or proprietary or that you do not wish to be publicly available or that you are prohibited from disclosing.
                                Other general business support purposes, including but not limited to procurement, financial and fiscal management, risk and compliance management, and external reporting. This processing is necessary for compliance with a legal obligation to which we are subject, or that is otherwise lawful under the applicable data protection laws or for our legitimate interests.
                            </p>
                            <h2 className='text-black-900 font-bold'>SHARING YOUR PERSONAL INFORMATION</h2>

                            <p>




                                To be able to provide you the best possible Services and further our business operations, we may share certain information internally or with selected third parties. There might also be a certain statutory or legal obligation that we believe in good faith requires us to disclose your personal information externally. Parties we might share data with include:
                                our service providers, e.g., for managing or hosting services and/or underpinning technology for the Services we are providing;
                                subscribing, accrediting or professional organizations, e.g., for providing utilization information to organizations that provide you with access to our Services and/or sharing tracking and redeeming credits for professional accreditation;
                                organizations involved in business transfers, e.g., to a purchaser or successor entity in the event of a sale or any other corporate transaction involving some or all of our business;
                                other parties, e.g., as needed for external audits, compliance, risk management, corporate development and/or corporate governance related matters; or
                                governmental authorities and regulators, as required under the applicable law.
                                Whenever we share personal information internally or with third parties in other countries, we have appropriate safeguards in place in accordance with the applicable data protection laws. As required under the applicable law, third parties are required to use appropriate safeguards to protect personal information, and they can only access the personal information that is necessary for performing their specific tasks.
                            </p>
                            <h2 className='text-black-900 font-bold'>HOW LONG WE KEEP YOUR PERSONAL INFORMATION</h2>
                            <p> Your personal information will be processed to the extent necessary for the performance of our obligations, and for the time necessary to achieve the purposes for which the information is collected, in accordance with our data retention policies and the applicable data protection laws. When we no longer need your personal information, we will take all reasonable steps to remove it from our systems and records or take steps to properly anonymize it so that you can no longer be identified from it.
                            </p>
                            <h2 className='text-black-900 font-bold'>HOW WE SAFEGUARD YOUR PERSONAL INFORMATION</h2>
                            <p>We will do our utmost to protect the privacy of your data, be it in physical or digital form. This includes having in place procedures and security measures that meet international best practices. These measures are regularly reviewed to ensure that they are effective and adequate. . In addition, we limit access to personal information by our employees, business partners, service providers and third-party service providers to a &apos;need-to-know&apos; basis. We take appropriate technical and organizational measures to ensure the confidentiality and integrity of your personal information and the way it is processed and ensure that all our staff members and authorized third parties will be required to comply with these measures and practices.

                            </p>

                            <h2 className='text-black-900 font-bold'> WHAT ARE YOUR RIGHTS</h2>

                            <p>You have the right to request access to the personal data that you have provided to us.

                                You also have the right to withdraw your consent for us to process the personal data provided by you.  However, the withdrawal of your consent may affect the Services that we can extend to you.

                                You may also change or correct the personal data that you have provided to us.  Please contact us if there are changes to your personal data, or if you believe that the personal data we have about you is inaccurate, incomplete, misleading or outdated.

                                To exercise your rights (if applicable) and/or for any other questions about the handling of your personal information, we refer you to the &quot;HOW YOU CAN CONTACT US&quot; section below.

                                Where the data protection law applicable to our processing of your personal data does not provide for a right or set out limitations and exemptions which we may rely on, we have the right to deny your request or allow such request at our discretion.
                            </p>
                            <h2 className='text-black-900 font-bold'>THE USE OF COOKIES</h2>
                            <p>
                                We use cookies to optimize our websites and analyze website traffic. On occasion we may use third party cookies, notably social media plugins, to enable you to share ideas and information related to us instantly and for our own marketing purposes.
                                Cookies or similar techniques (referred to collectively as &quot;Cookies&quot;) are small text files or pixels, which might be stored on your computer or mobile device. Cookies may be necessary to facilitate website browsing and make it more user-friendly. Cookies may also collect information to analyze personal browsing behavior.
                                We may use Cookies belonging to one of the four categories listed below.
                                Strictly Necessary Cookies - these mandatory Cookies are needed for our websites to function properly.
                                Functional Cookies - these Cookies add additional functionality to our websites.
                                Performance Cookies - these Cookies support analytic services that help us to improve our website&apos;s functionality and user experience.
                                Advertising Cookies - these Cookies can be applied to collect insights, to issue personalized content and advertising on our own and other websites.
                                If you do not want cookies to be stored, then you may turn off certain cookies described above individually or you can select the appropriate options on your web browser or in the cookie-tool provided on some of our websites to block or delete some or all cookies. Please note, however, that if you block some or all cookies you may not be able to use or access all or parts of our websites, such as being able to log on to member-specific areas.

                            </p>
                            {/* <h2 className='text-black-900 font-bold'> ADDITIONAL INFORMATION FOR CALIFORNIA RESIDENTS</h2>
                            <p>In addition to the information provided in this privacy policy, additional information for California residents can be found here: XXXXXXXXX
                            </p> */}
                            <h2 className='text-black-900 font-bold'>HOW YOU CAN CONTACT US</h2>
                            <p>If you have any questions about how we process your personal information or if you want to exercise one of your rights, you can contact us at info@neuroreef.com.  In response to a request, we might ask you to verify your identity if needed, and to provide information that helps us to understand your request better. If we do not grant your request, whether in whole or in part, we will explain why.
                            </p>
                            <h2 className='text-black-900 font-bold'>UPDATES TO THIS NOTICE</h2>
                            <p> We may update this Privacy and Cookie Notice from time to time. Please periodically review this Privacy and Cookie Notice to stay informed on how we are protecting your information. This version was last updated in November 2023.


                            </p>



                        </div>
                    </div>

                </div>

            )}
        </>
    );
};

export default PrivacyPolicyModal;