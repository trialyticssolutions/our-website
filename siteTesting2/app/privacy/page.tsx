import { Metadata } from 'next'
import { MainLayout } from '@/components/layout/main-layout'
import { LegalShell, LegalBlock } from '@/components/sections/legal'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy Policy for AcubeInsights - Learn how we collect, use, and protect your personal information.',
  alternates: {
    canonical: '/privacy',
  },
}

export default function PrivacyPage() {
  return (
    <MainLayout>
      <LegalShell
        title="Privacy Policy"
        sub="Learn how AcubeInsights collects, uses, and protects your personal information"
      >
        <LegalBlock>
          <p>
            This Privacy Policy outlines how AcubeInsights collects, uses, discloses, and
            protects the personal information of users. By interacting with our website
            and services, you agree to the terms outlined below.
          </p>
        </LegalBlock>

        <LegalBlock heading="Collection and Usage of Personal Information">
          <p>
            When you engage in transactions with our firm, we collect personal
            information such as your name, address, and email address to facilitate the
            buying and selling process.
          </p>
          <p>
            Additionally, when you browse our website, we automatically receive your
            computer&apos;s IP address to gather information about your browser and
            operating system.
          </p>
          <p>
            With your explicit consent, we may send you emails regarding our services and
            updates.
          </p>
        </LegalBlock>

        <LegalBlock heading="Section 1 – Payment">
          <p>
            For processing payments, we use Razorpay, which adheres to the Payment Card
            Industry Data Security Standard (PCI-DSS). Razorpay does not store your card
            data on their servers, and the transaction data is encrypted for security.
            Your purchase information is retained only as long as necessary to complete
            the transaction.
          </p>
          <p>
            Our payment gateway complies with PCI-DSS standards set by the PCI Security
            Standards Council.
          </p>
          <p>
            For more information, refer to the terms and conditions of Razorpay at{' '}
            <a href="https://razorpay.com" target="_blank" rel="noopener noreferrer">
              https://razorpay.com
            </a>
          </p>
        </LegalBlock>

        <LegalBlock heading="Section 2 – Security">
          <p>
            We take reasonable precautions and follow industry best practices to protect
            your personal information from loss, misuse, access, disclosure, alteration,
            or destruction.
          </p>
        </LegalBlock>

        <LegalBlock heading="Section 3 – Cookies">
          <p>
            We use cookies to maintain your user session. These cookies are not used to
            personally identify you on other websites.
          </p>
        </LegalBlock>

        <LegalBlock heading="Section 4 – Changes to This Privacy Policy">
          <p>
            We reserve the right to modify this privacy policy at any time. Please review
            it frequently, as changes and clarifications will take effect immediately
            upon posting on the website.
          </p>
          <p>
            In the event of material changes, we will notify you to keep you informed
            about what information we collect, how we use it, and any circumstances in
            which we may use and/or disclose it.
          </p>
          <p>
            If our firm is acquired or merged with another company, your information may
            be transferred to the new owners to ensure the continued provision of our
            services to you.
          </p>
        </LegalBlock>
      </LegalShell>
    </MainLayout>
  )
}
