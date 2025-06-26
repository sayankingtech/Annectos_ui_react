import React, { useEffect } from 'react';
import './PrivacyPolicyCom.css';

import { BsQuestionCircle } from "react-icons/bs";

const policyData = [
  {
    introLine: "This Privacy Policy applies to the annectosworld.com",
    description: [
      "annectosworld.com recognises the importance of maintaining your privacy. We value your privacy and appreciate your trust in us. This Policy describes how we treat user information we collect on http://www.annectosworld.com and other offline sources.This Privacy Policy applies to current and former visitors to our website and to our online customers. By visiting and/or using our website, you agree to this Privacy Policy.",
      "annectosworld.com is a property of annectoś Rewards & Retail Pvt. Ltd, an Indian Company registered under the Companies Act, 2012 having its registered office at #11, Railway Parallel Rd, Nehru Nagar, Bengaluru, Karnataka 560020."
    ]
  },
  {
    introLine: "Information we collect",
  }, {
    introLine: "Contact information.",
    description: [
      "We might collect your name, email, mobile number, phone number, street, city, state, pincode, country and ip address."
    ]
  }, {
    introLine: "Information you post.",
    description: [
      "We collect information you post in a public space on our website or on a third-party social media site belonging to annectosworld.com."]
  },
  {
    introLine: "Demographic information.",
    description: [
      "We may collect demographic information about you, events you like, events you intend to participate in, tickets you buy, or any other information provided by your during the use of our website. We might collect this as a part of a survey also."
    ]
  },
  {
    introLine: "Other information.",
    description: [
      "If you use our website, we may collect information about your IP address and the browser you’re using. We might look at what site you came from, duration of time spent on our website, pages accessed or what site you visit when you leave us. We might also collect the type of mobile device you are using, or the version of the operating system your computer or device is running."
    ]
  },
  {
    introLine: "We collect information in different ways.",
  },
  {
    introLine: "We collect information directly from you.",
    description: [
      "We collect information directly from you when you register for an event or buy tickets. We also collect information if you post a comment on our websites or ask us a question through phone or email."
    ]
  },
  {
    introLine: "We collect information from you passively.",
    description: [
      "We use tracking tools like Google Analytics, Google Webmaster, browser cookies and web beacons for collecting information about your usage of our website."
    ]
  },
  {
    introLine: "We get information about you from third parties.",
    description: [
      "For example, if you use an integrated social media feature on our websites. The third-party social media site will give us certain information about you. This could include your name and email address."
    ]
  },
  {
    introLine: "Use of your personal information",
  },
  {
    introLine: "We use information to contact you:",
    description: [
      "We might use the information you provide to contact you for confirmation of a purchase on our website or for other promotional purposes."
    ]
  },
  {
    introLine: "We use information to respond to your requests or questions.",
    description: [
      "We might use your information to confirm your registration for an event or contest."
    ]
  },
  {
    introLine: "We use information to improve our products and services.",
    description: [
      "We might use your information to customize your experience with us. This could include displaying content based upon your preferences."
    ]
  },
  {
    introLine: "We use information to look at site trends and customer interests.",
    description: [
      "We may use your information to make our website and products better. We may combine information we get from you with information about you we get from third parties."
    ]
  },
  {
    introLine: "We use information for security purposes.",
    description: [
      "We may use information to protect our company, our customers, or our websites."
    ]
  },
  {
    introLine: "We use information for marketing purposes.",
    description: [
      "We might send you information about special promotions or offers. We might also tell you about new features or products. These might be our own offers or products, or third-party offers or products we think you might find interesting. Or, for example, if you buy tickets from us we’ll enroll you in our newsletter."
    ]
  },
  {
    introLine: "We use information to send you transactional communications.",
    description: [
      "We might send you emails or SMS about your account or a ticket purchase. We use information as otherwise permitted by law."
    ]
  },
  {
    introLine: "Sharing of information with third-parties",
  },
  {
    introLine: "We will share information with third parties who perform services on our behalf.",
    description: [
      "We share information with vendors who help us manage our online registration process or payment processors or transactional message processors. Some vendors may be located outside of India."
    ]
  },
  {
    introLine: "We will share information with the event organizers.",
    description: [
      "We share your information with event organizers and other parties responsible for fulfilling the purchase obligation. The event organizers and other parties may use the information we give them as described in their privacy policies."
    ]
  },
  {
    introLine: "We will share information with our business partners.",
    description: [
      "This includes a third party who provide or sponsor an event, or who operates a venue where we hold events. Our partners use the information we give them as described in their privacy policies."
    ]
  },
  {
    introLine: "We may share information if we think we have to in order to comply with the law or to protect ourselves.",
    description: [
      "We will share information to respond to a court order or subpoena. We may also share it if a government agency or investigatory body requests. Or, we might also share information when we are investigating potential fraud."
    ]
  },
  {
    introLine: "We may share information with any successor to all or part of our business.",
    description: [
      "For example, if part of our business is sold we may give our customer list as part of that transaction."
    ]
  },
  {
    introLine: "We may share your information for reasons not described in this policy.",
    description: [
      "We will tell you before we do this."
    ]
  },
  {
    introLine: "Email Opt-Out",
  },
  {
    introLine: "You can opt out of receiving our marketing emails.",
    description: [
      "To stop receiving our promotional emails, please email support@annectos.in. It may take about ten days to process your request. Even if you opt out of getting marketing messages, we will still be sending you transactional messages through email and SMS about your purchases."
    ]
  },
  {
    introLine: "Third party sites",
    description: [
      "If you click on one of the links to third party websites, you may be taken to websites we do not control. This policy does not apply to the privacy practices of those websites. Read the privacy policy of other websites carefully. We are not responsible for these third party sites."
    ]
  },
  {
    introLine: "Grievance Officer",
    description: [
      "In accordance with Information Technology Act 2000 and rules made there under, the contact details of the Grievances are provided below:","#11, Railway Parallel Road, Nehru Nagar, Bengaluru, Karnataka 560020","Phone: +91– 9686202046","Email: support@annectos.in","If you have any questions about this Policy or other privacy concerns, you can also email us at support@annectos.in"
    ]
  },
  {
    introLine: "Updates to this policy",
    description: [
      "This Privacy Policy was last updated on 15.01.2021. From time to time we may change our privacy practices. We will notify you of any material changes to this policy as required by law. We will also post an updated copy on our website. Please check our site periodically for updates."
    ]
  },
  {
    introLine: "Jurisdiction",
    description: [
      "If you choose to visit the website, your visit and any dispute over privacy is subject to this Policy and the website’s terms of use. In addition to the foregoing, any disputes arising under this Policy shall be governed by the laws of India."
    ]
  }
];

const PrivacyPolicyCom: React.FC = () => {
  useEffect(() => {
          window.scrollTo(0, 0)
        }, [])
  return (
    <div className="w-[85%] mx-auto pt-5 mb-10 lg:mb-20">
      <div className="career">
        <h1 className="tracking-[1px] text-[#444444] text-[18px]">PRIVACY POLICY</h1>
        <h2 className="text-3xl font-bold text-[#0b2c4d] mt-2 mb-10">PRIVACY POLICY</h2>
      </div>

      {policyData.map((data, index) => {
        return (
          (
            <>
              <div key={index} className="grid md:grid-cols-3 w-[95%] mx-auto gap-6 mt-10 text-[#444444]">

                {/* Left Side - Intro Line */}
                <div className="flex col-span-1 items-start gap-2">
                  <span className="text-blue-500 text-lg pt-[3px]"><BsQuestionCircle /></span>
                  <p className="text-gray-600 text-[15px]">{data.introLine}</p>
                </div>

                {/* Right Side - Paragraphs */}
                <div className="space-y-4 col-span-2 text-gray-700 text-[15px] text-justify">
                  {data.description?.map((d) => {
                    return (
                      <p>{d}</p>
                    )
                  })}
                </div>
              </div>
              <div className='w-[95%] mx-auto h-[1px] bg-[#444444] mt-10 border-b'></div>
            </>
          )
        )
      })}
    </div>
  );
};

export default PrivacyPolicyCom;