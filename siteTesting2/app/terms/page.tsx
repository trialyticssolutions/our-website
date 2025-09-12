import { Metadata } from 'next'
import { Footer } from '@/components/layout/footer'

export const metadata: Metadata = {
  title: 'Terms and Conditions | Data Flow',
  description: 'Terms and Conditions for Data Flow - Learn about our service terms, policies, and user agreements.',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-surfe-dark via-surfe-dark to-blue-900">
      {/* Header */}
      <div className="relative pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
                Legal Information
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Terms and Conditions
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Learn about our service terms, policies, and user agreements
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12">
              
              {/* Introduction */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-orange-500 mb-6">
                  DATA FLOW – TERMS AND CONDITIONS
                </h2>
                <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                  <p>
                    Welcome to Data Flow. In this agreement, we refer to ourselves as "we," "us," and "our."
                  </p>
                  <p>
                    By accessing this website, mobile application, or engaging with us through any other medium (online or offline), you agree to be bound by the Terms and Conditions, including those additional policies referenced herein. The Terms and Conditions shall apply to all users or visitors of the website.
                  </p>
                </div>
              </div>

              <hr className="border-gray-600 mb-12" />

              {/* Informational Purpose */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-orange-500 mb-6">
                  INFORMATIONAL PURPOSE ONLY
                </h2>
                <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                  <p>
                    The content on this website is for informational purposes only. No material or information provided on this website should be construed as advice.
                  </p>
                  <p>
                    These terms and conditions should be read in conjunction with our Privacy Policy and Payment Policy. By engaging with us, you are deemed to have accepted these terms and conditions and are bound by them.
                  </p>
                </div>
              </div>

              <hr className="border-gray-600 mb-12" />

              {/* Access to Site */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-orange-500 mb-6">
                  ACCESS TO THE SITE
                </h2>
                <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                  <p>
                    When you access the website, you are deemed to be familiar with the Privacy Policy, Terms and Conditions, and the Payment Policy. Access to the website may be complete or partial, and you are deemed to have agreed to and accepted the Terms and Conditions upon such access.
                  </p>
                </div>
              </div>

              <hr className="border-gray-600 mb-12" />

              {/* Pricing */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-orange-500 mb-6">
                  PRICING
                </h2>
                <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                  <p>
                    Our pricing shall differ based on the services opted for and the level of technicalities involved. All prices are exclusive of GST and other taxes, if necessary unless specified explicitly.
                  </p>
                </div>
              </div>

              <hr className="border-gray-600 mb-12" />

              {/* Payments */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-orange-500 mb-6">
                  PAYMENTS
                </h2>
                <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                  <p>
                    We have a detailed payment policy, covering our modes of payment available, due date and late payment, change of service, cancellations and refund policy. By accepting this terms and conditions, you are also accepting the payment policy available here.
                  </p>
                </div>
              </div>

              <hr className="border-gray-600 mb-12" />

              {/* Communication */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-orange-500 mb-6">
                  COMMUNICATION
                </h2>
                <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                  <p>
                    All notifications under this agreement will be by email to your nominated internet address. By entering into this agreement you agree to receive other email communications of a marketing and promotional nature unless you opt out of our mailing list. You will not be able to opt-out of critical service notifications, renewal, billing and account notifications, scheduled downtime notifications or any other communications deemed to be an essential part of our Service to you.
                  </p>
                  <p>
                    Any grievances or redressal can be communicated to us via email or Customer Service helpline.
                  </p>
                </div>
              </div>

              <hr className="border-gray-600 mb-12" />

              {/* Refund Policy */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-orange-500 mb-6">
                  REFUND POLICY
                </h2>
                <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                  <p>
                    Our refund policy is covered in our payment policy. By accepting these terms and conditions, you also accept our payment policy, including the refund policy.
                  </p>
                </div>
              </div>

              <hr className="border-gray-600 mb-12" />

              {/* Liability */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-orange-500 mb-6">
                  LIABILITY
                </h2>
                <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                  <p>
                    We shall not be held liable for any damages caused to you during the rendering of the service after your explicit permit/acceptance of the same.
                  </p>
                  <p>
                    You are deemed to have read, agreed, and accepted our Privacy Policy, Terms and Conditions, and Payment Policy. We are not liable for any confusion/discrepancies caused due to your failure to read these policies before acceptance.
                  </p>
                  <p>
                    We are focused on providing effective and efficient business solutions and services to you. However, you should understand that despite our best efforts, we may not attain desired results at all times. We cannot be held responsible for such occurrences.
                  </p>
                  <p>
                    We are not liable for any information about us received by you from any third party.
                  </p>
                  <p>
                    We respect your privacy and shall not compromise it. We cannot be held liable for any information theft.
                  </p>
                </div>
              </div>

              <hr className="border-gray-600 mb-12" />

              {/* Service Access */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-orange-500 mb-6">
                  SERVICE ACCESS
                </h2>
                <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                  <p>
                    We make every effort to keep the website and mobile application up and running smoothly. While we strive for 24/7 availability, we will not be liable if the website is unavailable for any reason.
                  </p>
                  <p>
                    Access to this website may be suspended temporarily and without notice due to system failure, maintenance or repair, or for reasons beyond our control.
                  </p>
                  <p>
                    Any undue advantage availed by the customer during or due to system failure, coding error, maintenance, repair or other reasons will be recovered and revoked by us.
                  </p>
                </div>
              </div>

              <hr className="border-gray-600 mb-12" />

              {/* Discontinuation by Us */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-orange-500 mb-6">
                  DISCONTINUATION OF SERVICES BY US
                </h2>
                <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                  <p>
                    Notwithstanding other legal remedies that may be available to us, we may, in our sole discretion, discontinue services provided to you either temporarily or indefinitely or suspend or terminate any further dealings with you if:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>You are in breach of any of the terms and conditions of this Agreement and fail to rectify it within 14 days of notification.</li>
                    <li>You have provided wrong, inaccurate, incomplete, incorrect or damaging information which has cost our reputation or acts as a threat to us;</li>
                    <li>Your actions may cause harm, damage, or loss to us or our clients.</li>
                    <li>You become insolvent or are declared bankrupt.</li>
                    <li>Ordered by a court or pursuant to an arbitration award.</li>
                  </ul>
                </div>
              </div>

              <hr className="border-gray-600 mb-12" />

              {/* Discontinuation by You */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-orange-500 mb-6">
                  DISCONTINUATION OF SERVICES BY YOU
                </h2>
                <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                  <p>
                    If you wish to discontinue services with us, you may request for discontinuation at least 30 (thirty) days prior to the desired date.
                  </p>
                  <p>
                    The request for discontinuation will only be processed if communicated in writing and accepted by us.
                  </p>
                  <p>
                    The request for discontinuation shall not be processed until all balances are settled.
                  </p>
                </div>
              </div>

              <hr className="border-gray-600 mb-12" />

              {/* Assignment */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-orange-500 mb-6">
                  ASSIGNMENT
                </h2>
                <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                  <p>
                    You shall not assign or otherwise transfer your rights or obligations under this agreement without obtaining our prior written consent, which shall not be unreasonably withheld. Any request for assignment or transfer must:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Be submitted in the format required by us and include details of the assignee or transferee; and</li>
                    <li>Be accompanied by the transfer fee specified in the prescribed form.</li>
                  </ul>
                  <p>
                    We reserve the right to assign, novate, or transfer our rights and obligations under this agreement to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>A related body corporate, including but not limited to as part of a change in how we provide the Services or as part of a partial or full restructuring of our business; and</li>
                    <li>Another person as part of the sale or restructuring of all or part of our business.</li>
                  </ul>
                  <p>
                    You agree that, in such a case, we may transfer all necessary information, including but not limited to personal information and credit card details, to the related body corporate or other person, enabling them to continue providing the Services to you. If you disagree with the assignment, novation, or transfer, you may terminate this agreement, and we will refund any remaining unused credit on your account.
                  </p>
                </div>
              </div>

              <hr className="border-gray-600 mb-12" />

              {/* Intellectual Property */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-orange-500 mb-6">
                  INTELLECTUAL PROPERTY
                </h2>
                <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                  <p>
                    All content and materials found on the website, including text, graphics, logos, images, videos, and software, are our property and are protected by applicable intellectual property laws.
                  </p>
                  <p>
                    As a user of the website, you are granted a limited, non-exclusive, and non-transferable license to access and use the content and materials for the purpose of browsing the website. However, you are prohibited from reproducing, distributing, transmitting, displaying, performing, publishing, licensing, creating derivative works from, or selling any content or materials obtained from the website without our prior written consent.
                  </p>
                </div>
              </div>

              <hr className="border-gray-600 mb-12" />

              {/* Governing Laws and Dispute Resolution */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-orange-500 mb-6">
                  GOVERNING LAWS AND DISPUTE RESOLUTION
                </h2>
                <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                  <p>
                    The provisions of this terms and conditions shall, in all respects, be governed by and construed in accordance with the Applicable Laws of India.
                  </p>
                  <p>
                    Any dispute arising out of or in connection with this agreement shall be resolved amicably through good-faith negotiations between the Parties. If the Parties are unable to reach a resolution, the dispute shall be referred to mediation or arbitration as mutually agreed upon.
                  </p>
                  <p>
                    The arbitration shall be governed by the Arbitration and Conciliation Act, 1996 (as applicable in India) for the time being in force, and/or any statutory modification or re-enactment thereof.
                  </p>
                  <p>
                    It is important to note that your obligation to make the payment fees will not be suspended during the dispute resolution process.
                  </p>
                </div>
              </div>

              <hr className="border-gray-600 mb-12" />

              {/* Modifications */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-orange-500 mb-6">
                  MODIFICATIONS
                </h2>
                <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                  <p>
                    We reserve the right to modify, suspend, or discontinue any part of the website (including the Payment Policy and Privacy Policy) at any time without prior notice. Additionally, we may update these Terms and Conditions periodically. It is your responsibility to review the Terms and Conditions regularly for any changes. Your continued use of the website after any modifications indicates your acceptance of the modified Terms and Conditions.
                  </p>
                </div>
              </div>

              <hr className="border-gray-600 mb-12" />

              {/* Entire Agreement */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-orange-500 mb-6">
                  ENTIRE AGREEMENT
                </h2>
                <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                  <p>
                    These terms and conditions constitute the complete agreement between us and you, superseding all previous agreements, understandings, and representations, whether oral or written.
                  </p>
                </div>
              </div>

              <hr className="border-gray-600 mb-12" />

              {/* Grievance */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-orange-500 mb-6">
                  GRIEVANCE
                </h2>
                <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                  <p>
                    According to this provision, if you have any grievances related to your use of the website, you can address them to us via email. We will review your complaint or grievance and provide a response within 24 hours from the date of the complaint.
                  </p>
                </div>
              </div>

              <hr className="border-gray-600 mb-12" />

              {/* Disclaimer */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-orange-500 mb-6">
                  DISCLAIMER
                </h2>
                <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                  <p>
                    While we strive to ensure the accuracy of information on this website, we do not warrant the completeness and accuracy of the material presented. Changes may be made to the material on this website or the services described herein.
                  </p>
                  <p className="font-semibold">
                    NOTHING IN THESE TERMS AND CONDITIONS AFFECTS YOUR STATUTORY RIGHTS.
                  </p>
                  <p>
                    By using the website, you agree to abide by these Terms and Conditions. If you have any questions or concerns, you may contact us using the provided contact information on the website.
                  </p>
                </div>
              </div>

              <hr className="border-gray-600 mb-12" />

              {/* Severability */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-orange-500 mb-6">
                  SEVERABILITY
                </h2>
                <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                  <p>
                    We reserve the right to make changes to the website, policies, service terms, and the conditions of use at any time. If any of the conditions are deemed invalid, void, or unenforceable for any reason, that specific condition will be considered separate and independent. The invalidity or unenforceability of one condition will not affect the validity and enforceability of the remaining conditions.
                  </p>
                </div>
              </div>

              {/* Last Updated */}
              <div className="text-center text-gray-400 text-sm border-t border-gray-600 pt-6">
                <p>Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}