import { Metadata } from 'next'
import { Footer } from '@/components/layout/footer'

export const metadata: Metadata = {
  title: 'Privacy Policy | Data Flow',
  description: 'Privacy Policy for Data Flow - Learn how we collect, use, and protect your personal information.',
}

export default function PrivacyPage() {
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
                Privacy Policy
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Learn how Data Flow collects, uses, and protects your personal information
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
                <p className="text-gray-300 text-lg leading-relaxed">
                  This Privacy Policy outlines how Data Flow collects, uses, discloses, and protects the personal information of users. By interacting with our website and services, you agree to the terms outlined below.
                </p>
              </div>

              <hr className="border-gray-600 mb-12" />

              {/* Collection and Usage */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-orange-500 mb-6">
                  COLLECTION AND USAGE OF PERSONAL INFORMATION
                </h2>
                <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                  <p>
                    When you engage in transactions with our firm, we collect personal information such as your name, address, and email address to facilitate the buying and selling process.
                  </p>
                  <p>
                    Additionally, when you browse our website, we automatically receive your computer's IP address to gather information about your browser and operating system.
                  </p>
                  <p>
                    With your explicit consent, we may send you emails regarding our services and updates.
                  </p>
                </div>
              </div>

              <hr className="border-gray-600 mb-12" />

              {/* Section 1 - Payment */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-orange-500 mb-6">
                  SECTION 1 – PAYMENT
                </h2>
                <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                  <p>
                    For processing payments, we use Razorpay, which adheres to the Payment Card Industry Data Security Standard (PCI-DSS). Razorpay does not store your card data on their servers, and the transaction data is encrypted for security. Your purchase information is retained only as long as necessary to complete the transaction.
                  </p>
                  <p>
                    Our payment gateway complies with PCI-DSS standards set by the PCI Security Standards Council.
                  </p>
                  <p>
                    For more information, refer to the terms and conditions of Razorpay at{' '}
                    <a href="https://razorpay.com" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-400 underline">
                      https://razorpay.com
                    </a>
                  </p>
                </div>
              </div>

              <hr className="border-gray-600 mb-12" />

              {/* Section 2 - Security */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-orange-500 mb-6">
                  SECTION 2 – SECURITY
                </h2>
                <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                  <p>
                    We take reasonable precautions and follow industry best practices to protect your personal information from loss, misuse, access, disclosure, alteration, or destruction.
                  </p>
                </div>
              </div>

              <hr className="border-gray-600 mb-12" />

              {/* Section 3 - Cookies */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-orange-500 mb-6">
                  SECTION 3 – COOKIES
                </h2>
                <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                  <p>
                    We use cookies to maintain your user session. These cookies are not used to personally identify you on other websites.
                  </p>
                </div>
              </div>

              <hr className="border-gray-600 mb-12" />

              {/* Section 4 - Changes */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-orange-500 mb-6">
                  SECTION 4 – CHANGES TO THIS PRIVACY POLICY
                </h2>
                <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                  <p>
                    We reserve the right to modify this privacy policy at any time. Please review it frequently, as changes and clarifications will take effect immediately upon posting on the website.
                  </p>
                  <p>
                    In the event of material changes, we will notify you to keep you informed about what information we collect, how we use it, and any circumstances in which we may use and/or disclose it.
                  </p>
                  <p>
                    If our firm is acquired or merged with another company, your information may be transferred to the new owners to ensure the continued provision of our services to you.
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