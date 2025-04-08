import { React, useRef, useState } from "react";
import Navbar from "../components/HomePageComponents/Navbar";
import Herosection from "../components/HomePageComponents/Herosection";
import GamesCards from "../components/HomePageComponents/GamesCards";
import Tournaments from "../components/HomePageComponents/Tournaments";
import Prices from "../components/HomePageComponents/Prices";

export default function Home() {
  const homeRef = useRef(null);
  const gameRef = useRef(null);
  const tournamentsRef = useRef(null);
  const priceRef = useRef(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent("");
  };

  const privacypolicycontent = `
Privacy Policy
Effective Date: [April 2025]

Welcome to Xephra — a gaming platform where users join events, chat in groups and privately with admins, view rankings, and participate in a competitive gaming community. We value your trust and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, share, and protect your information when you use our website and services.

1. Information We Collect
When you use Xephra, we may collect the following types of information:

a. Personal Information
Name, username, and profile picture

Email address and contact information

Payment and subscription details (via third-party payment processors)

b. Account and Activity Data
Events you join or participate in

Messages you send in event group chats or in private with admins

Game-related actions, scores, performance, and rankings

Suspensions, reports, or rule violations related to your account

c. Technical Information
IP address, browser type, operating system, and device type

Date and time of access

Usage logs and activity tracking

2. How We Use Your Information
We use your data to provide, maintain, and improve our services, including:

Enabling you to join events and track your participation

Allowing chat functionality within event groups and with admins

Displaying user profiles and public rankings

Processing payments and managing your subscription status

Monitoring user behavior to detect cheating or rule violations

Providing support and resolving disputes

Sending notifications, updates, and event-related communications

Enforcing our Terms of Service and Community Guidelines

3. User Profiles, Rankings, and Public Data
Your username, profile, ranking, and event performance may be displayed to other users. This is a core feature of the platform, designed to encourage competition and community engagement.

Note: Private data such as email addresses and payment details are never shared publicly.

4. Chat Features and Data Monitoring
Xephra includes group chats for events and one-on-one messaging between users and admins. These chats are stored securely and may be monitored by admins:

To ensure fair play and respectful communication

To investigate reports of abuse, harassment, or cheating

To improve moderation and community support

By using these chat features, you agree to this monitoring for safety and compliance purposes.

5. Role of Admins and Moderation Rights
Xephra admins are responsible for maintaining the integrity of the platform. Admins may access user data (including chats and event history) for:

Handling rule violations and cheating reports

Managing user accounts and suspensions

Supporting users and answering queries

Ensuring a fair and enjoyable gaming experience

Admins reserve the right to take appropriate action if users are found violating rules, including issuing warnings, temporary bans, or permanent suspension.

6. Payments and Subscriptions
Xephra offers paid features and event participation options. All payment transactions are handled securely by trusted third-party processors (e.g., Stripe, PayPal).

We do not store your full credit/debit card details. However, we may store limited transaction metadata such as subscription type, renewal dates, and payment status.

7. How We Share Your Information
We do not sell your personal information. We may share it only in the following cases:

With Service Providers: For hosting, data storage, payment processing, and analytics.

For Legal Purposes: If required by law or in response to legal proceedings.

To Protect Xephra: When necessary to enforce our Terms or protect our rights, users, and community.

8. Security Measures
We implement technical, administrative, and physical safeguards to protect your personal data. This includes:

Data encryption

Secure server hosting

Access controls and authentication

Regular audits and monitoring

While we strive to use commercially acceptable means to protect your information, no method of transmission over the Internet is 100% secure.

9. Your Rights and Choices
You have the right to:

Access, update, or delete your personal data

Change your communication preferences

Cancel your account at any time

Request a copy of your stored data

10. Data Retention
We retain your data only for as long as necessary to provide our services or as required by law. If you cancel your account, we will delete or anonymize your personal information unless we are required to retain it for legitimate business or legal purposes.

11. Children’s Privacy
Xephra is not designed for children under the age of 13. If we learn that we have collected personal data from a child without parental consent, we will delete it promptly.

12. International Users
If you are accessing Xephra from outside your home country, be aware that your data may be transferred to and processed in other countries where our servers or service providers are located.

13. Changes to This Policy
We may update this Privacy Policy from time to time. We will notify you of any significant changes via email or through the website. Continued use of Xephra after changes indicates your acceptance of the new terms.

14. Contact Us
If you have questions, concerns, or requests regarding your privacy, you can reach us at:

`;

  const termsandcondtionscontent = `Terms and Conditions

Effective Date: [April 2025]

Welcome to Xephra! Please read the following terms and conditions carefully before using our website and services. By accessing or using our website, you agree to be bound by these terms and conditions. If you do not agree, please do not use the website.

1. Acceptance of Terms
By accessing or using the Xephra website, you agree to comply with and be bound by these Terms and Conditions. These terms may be updated from time to time, and we encourage you to review them periodically.

2. User Account
To participate in events, use our chat feature, and access other services, you must create an account on the Xephra website. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to provide accurate and up-to-date information when creating your account.

3. Events and Rankings
Xephra offers various gaming events where users can participate and be ranked based on their performance. Rankings will be displayed publicly on the website. Users are required to play fairly and follow all event rules. Any attempt to manipulate rankings or cheat in events will result in suspension or termination of the user's account.

4. User Conduct
Users agree to:

Not engage in any form of cheating, hacking, or exploiting bugs in games or events.

Follow the community guidelines, be respectful towards other users, and refrain from using offensive or abusive language.

Not participate in any activity that harms the integrity of the website, other users, or our servers.

Xephra reserves the right to suspend or ban any user who violates these terms.

5. User-Admin Chat
Users can communicate with admins and other participants through the chat system. Admins have the authority to monitor and manage chat content to ensure compliance with the community guidelines. Any inappropriate behavior or violation of these guidelines may result in disciplinary action, including the suspension of your account.

6. Admin Powers
Admins have full access to the information of users participating in events. Admins have the right to suspend or ban users for violations such as cheating, offensive behavior, or any other breach of these Terms and Conditions. Admin actions are final and non-negotiable.

7. Payment and Subscriptions
Xephra offers payment subscriptions for users to access premium features, including exclusive events or additional functionalities. By subscribing, you agree to pay the subscription fees as outlined on our website. Payments will be processed securely, and users are responsible for ensuring that their payment information is up to date.

Subscriptions are non-refundable, and users can cancel their subscription at any time before the next billing cycle.

8. Privacy and Data Collection
Xephra respects your privacy. We collect and process personal data in accordance with our Privacy Policy, which can be reviewed [here]. By using the website, you consent to the collection and use of your data as outlined in the Privacy Policy.

9. Cheating and Suspension
Users found cheating, exploiting bugs, or engaging in any fraudulent activity will be immediately suspended or banned. The decision to suspend or ban a user is at the sole discretion of Xephra’s administrative team.

10. Limitation of Liability
Xephra is not liable for any damages, losses, or expenses arising from your use of the website or participation in any events, including any indirect, incidental, or consequential damages.

11. Indemnification
You agree to indemnify, defend, and hold harmless Xephra, its officers, employees, and agents from any claims, liabilities, damages, or costs arising from your breach of these Terms and Conditions or your use of the website.

12. Changes to Terms
Xephra reserves the right to modify or update these Terms and Conditions at any time. Any changes will be posted on this page, and the updated Terms will become effective immediately upon posting.

13. Contact Us
If you have any questions about these Terms and Conditions, please contact us at:`;

  return (
    <>
      <Navbar
        scrollToSection={scrollToSection}
        refs={{
          homeRef,
          gameRef,
          tournamentsRef,
          priceRef,
        }}
      />
      <div ref={homeRef}>
        <Herosection />
      </div>
      <div ref={gameRef}>
        <GamesCards />
      </div>
      <div ref={tournamentsRef}>
        <Tournaments />
      </div>
      <div ref={priceRef}>
        <Prices />
      </div>

      {/* Footer */}
      <div className="bg-[#232122]">
        <div className="flex justify-between text-white p-12 mx-12">
          <button
            className="border-2 rounded font-bold p-4 hover:hover:bg-[#5d2a33]"
            onClick={() => openModal("Privacy Policy")}
          >
            Privacy Policy
          </button>
          {/* Vertical Line Divider */}
    <div className="w-px h-16 bg-white mx-4"></div>
          <button
            className="border-2 rounded font-bold p-4 hover:bg-[#5d2a33]"
            onClick={() => openModal("Terms & Conditions")}
          >
            Terms & Conditions
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-[100%] max-w-xl relative max-h-[95vh] overflow-y-auto">
            <button
              className="sticky border-2 rounded-sm p-[1.5px] pt-0 bg-red-500 top-2 left-[38rem] text-black text-2xl font-bold"
              onClick={closeModal}
            >
              ×
            </button>
            <h2 className="text-xl font-semibold mb-4">{modalContent}</h2>
            <pre className="text-gray-700 whitespace-pre-wrap text-sm">
              {modalContent === "Privacy Policy"
                ? privacypolicycontent
                : termsandcondtionscontent}
            </pre>
          </div>
        </div>
      )}
    </>
  );
}
