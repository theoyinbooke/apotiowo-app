import { Link } from 'react-router-dom'
import { ArrowLeft, Shield, Database, Lock, UserCheck, Trash2, Mail } from 'lucide-react'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="Apotiowo" className="w-10 h-10 rounded-xl" />
            <span className="text-xl font-semibold text-gray-900">Apotiowo</span>
          </Link>
          <Link
            to="/"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="pt-28 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-gray-500">Last Updated: December 2, 2024</p>
          </div>

          {/* Quick Summary */}
          <div className="bg-gradient-to-br from-[#2AA7B5]/10 to-[#1E8A96]/10 rounded-2xl p-6 mb-12">
            <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Shield className="w-5 h-5 text-[#2AA7B5]" />
              Quick Summary
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white rounded-xl p-4">
                <Database className="w-5 h-5 text-[#2AA7B5] mb-2" />
                <p className="text-sm text-gray-700">We collect only what's needed to provide our service</p>
              </div>
              <div className="bg-white rounded-xl p-4">
                <Lock className="w-5 h-5 text-[#2AA7B5] mb-2" />
                <p className="text-sm text-gray-700">Your data is encrypted and securely stored</p>
              </div>
              <div className="bg-white rounded-xl p-4">
                <Trash2 className="w-5 h-5 text-[#2AA7B5] mb-2" />
                <p className="text-sm text-gray-700">You can delete your data at any time</p>
              </div>
            </div>
          </div>

          {/* Policy Content */}
          <div className="prose prose-gray max-w-none">
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
              <p className="text-gray-600 leading-relaxed">
                Welcome to Apotiowo ("we," "our," or "us"). We are committed to protecting your privacy
                and ensuring the security of your personal information. This Privacy Policy explains how
                we collect, use, store, and protect your data when you use our mobile application ("App").
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                By using Apotiowo, you agree to the collection and use of information in accordance with this policy.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Account Information</h3>
              <p className="text-gray-600 leading-relaxed">When you create an account with Apotiowo, we collect:</p>
              <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                <li><strong>Email address</strong> - Used for account identification and authentication</li>
                <li><strong>Name</strong> (optional) - Used to personalize your experience</li>
                <li><strong>Profile picture</strong> (optional) - Used to personalize your account</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Financial Data</h3>
              <p className="text-gray-600 leading-relaxed">To provide our budgeting and financial management services, we collect and store:</p>
              <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                <li><strong>Budget information</strong> - Budget names, amounts, date ranges, and categories</li>
                <li><strong>Transaction records</strong> - Transaction amounts, dates, descriptions, and categories</li>
                <li><strong>Savings goals</strong> - Goal names, target amounts, deadlines, and progress</li>
                <li><strong>Credit card information</strong> - Card names, credit limits, and current balances (we do NOT collect actual card numbers or CVV codes)</li>
                <li><strong>Categories</strong> - Custom and default financial categories you create or use</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Device Information</h3>
              <p className="text-gray-600 leading-relaxed">We may automatically collect:</p>
              <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                <li>Device type and model</li>
                <li>Operating system version</li>
                <li>App version</li>
                <li>Unique device identifiers (for authentication purposes only)</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
              <p className="text-gray-600 leading-relaxed">We use the information we collect to:</p>
              <ol className="list-decimal list-inside text-gray-600 mt-2 space-y-2">
                <li><strong>Provide our services</strong> - Enable budgeting, transaction tracking, savings goals management, and financial analytics</li>
                <li><strong>Authenticate your identity</strong> - Securely log you into your account</li>
                <li><strong>Sync your data</strong> - Keep your financial data synchronized across your devices in real-time</li>
                <li><strong>Improve our services</strong> - Analyze usage patterns to enhance app functionality and user experience</li>
                <li><strong>Provide customer support</strong> - Respond to your inquiries and resolve issues</li>
              </ol>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Storage and Security</h2>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Where Your Data is Stored</h3>
              <p className="text-gray-600 leading-relaxed">Your data is stored securely using the following third-party services:</p>
              <ul className="list-disc list-inside text-gray-600 mt-2 space-y-2">
                <li><strong>Convex</strong> - Our backend database provider that stores your financial data. Convex uses industry-standard encryption and security practices.</li>
                <li><strong>Clerk</strong> - Our authentication provider that manages your account credentials and login sessions.</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Security Measures</h3>
              <p className="text-gray-600 leading-relaxed">We implement appropriate technical and organizational measures to protect your personal data, including:</p>
              <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                <li><strong>Encryption in transit</strong> - All data transmitted between your device and our servers is encrypted using TLS/SSL</li>
                <li><strong>Encryption at rest</strong> - Your data is encrypted when stored in our databases</li>
                <li><strong>Secure authentication</strong> - We use industry-standard authentication protocols</li>
                <li><strong>Biometric security</strong> - Support for Face ID and Touch ID for additional app security (optional)</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Sharing</h2>
              <p className="text-gray-600 leading-relaxed">
                We do <strong>NOT</strong> sell, trade, or rent your personal information to third parties.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                We may share your information only in the following circumstances:
              </p>
              <ol className="list-decimal list-inside text-gray-600 mt-2 space-y-2">
                <li><strong>Service Providers</strong> - With trusted third-party service providers (Convex, Clerk) who assist us in operating the App, subject to confidentiality agreements</li>
                <li><strong>Legal Requirements</strong> - When required by law, legal process, or government request</li>
                <li><strong>Protection of Rights</strong> - To protect our rights, privacy, safety, or property, or that of our users or others</li>
              </ol>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights and Choices</h2>
              <p className="text-gray-600 leading-relaxed">You have the following rights regarding your personal data:</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Access and Portability</h3>
              <p className="text-gray-600 leading-relaxed">You can access all your financial data directly within the App at any time.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Correction</h3>
              <p className="text-gray-600 leading-relaxed">You can update or correct your personal information through the App's settings and profile sections.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Deletion</h3>
              <p className="text-gray-600 leading-relaxed">You can request deletion of your account and all associated data by:</p>
              <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                <li>Contacting us at the email address provided below</li>
                <li>Using the account deletion feature in the App (if available)</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-2">
                Upon receiving a deletion request, we will delete your personal data within 30 days, except where we are required to retain it by law.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
              <p className="text-gray-600 leading-relaxed">
                Apotiowo is not intended for use by children under the age of 13 (or 16 in the European Economic Area).
                We do not knowingly collect personal information from children. If you believe we have collected
                information from a child, please contact us immediately.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">International Data Transfers</h2>
              <p className="text-gray-600 leading-relaxed">
                Your information may be transferred to and processed in countries other than your country of residence.
                These countries may have data protection laws that are different from the laws of your country.
                We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Privacy Policy</h2>
              <p className="text-gray-600 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by:
              </p>
              <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                <li>Posting the new Privacy Policy on this page</li>
                <li>Updating the "Last Updated" date at the top of this policy</li>
                <li>Sending a notification through the App (for significant changes)</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-2">
                We encourage you to review this Privacy Policy periodically for any changes.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Retention</h2>
              <p className="text-gray-600 leading-relaxed">
                We retain your personal data for as long as your account is active or as needed to provide you services.
                If you delete your account, we will delete your personal data within 30 days, except where retention
                is required for legal obligations or legitimate business purposes.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">California Privacy Rights (CCPA)</h2>
              <p className="text-gray-600 leading-relaxed">
                If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA):
              </p>
              <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                <li><strong>Right to Know</strong> - You can request information about the categories and specific pieces of personal information we have collected</li>
                <li><strong>Right to Delete</strong> - You can request deletion of your personal information</li>
                <li><strong>Right to Non-Discrimination</strong> - We will not discriminate against you for exercising your privacy rights</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">European Privacy Rights (GDPR)</h2>
              <p className="text-gray-600 leading-relaxed">
                If you are in the European Economic Area (EEA), you have additional rights under the General Data Protection Regulation (GDPR):
              </p>
              <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                <li><strong>Right to Access</strong> - Request access to your personal data</li>
                <li><strong>Right to Rectification</strong> - Request correction of inaccurate data</li>
                <li><strong>Right to Erasure</strong> - Request deletion of your data</li>
                <li><strong>Right to Restrict Processing</strong> - Request restriction of how we process your data</li>
                <li><strong>Right to Data Portability</strong> - Request a copy of your data in a portable format</li>
                <li><strong>Right to Object</strong> - Object to certain types of processing</li>
                <li><strong>Right to Withdraw Consent</strong> - Withdraw consent at any time where we rely on consent</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">Our legal basis for processing your data includes:</p>
              <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                <li><strong>Contract Performance</strong> - To provide you with our services</li>
                <li><strong>Legitimate Interests</strong> - To improve our services and ensure security</li>
                <li><strong>Consent</strong> - Where you have given explicit consent</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-600 leading-relaxed">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:
              </p>
              <div className="bg-gray-50 rounded-xl p-6 mt-4 flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#2AA7B5] flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <a href="mailto:oyinbookeola@outlook.com" className="text-[#2AA7B5] hover:underline">
                    oyinbookeola@outlook.com
                  </a>
                  <p className="text-gray-600 mt-2"><strong>Developer:</strong> Olanrewaju Oyinbooke</p>
                </div>
              </div>
            </section>

            {/* Summary Table */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Summary of Key Points</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 rounded-xl overflow-hidden">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">What We Collect</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">How We Use It</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">How We Protect It</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-600">Email address</td>
                      <td className="px-6 py-4 text-sm text-gray-600">Account authentication</td>
                      <td className="px-6 py-4 text-sm text-gray-600">Encrypted in transit and at rest</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-600">Financial data (budgets, transactions, goals)</td>
                      <td className="px-6 py-4 text-sm text-gray-600">Provide budgeting services</td>
                      <td className="px-6 py-4 text-sm text-gray-600">Stored securely with Convex</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-600">Device information</td>
                      <td className="px-6 py-4 text-sm text-gray-600">App functionality</td>
                      <td className="px-6 py-4 text-sm text-gray-600">Industry-standard security</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="bg-[#C8E6DC] rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <UserCheck className="w-5 h-5" />
                We do NOT:
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Sell your personal data</li>
                <li>Collect actual credit card numbers or banking credentials</li>
                <li>Share your data with advertisers</li>
                <li>Track your location</li>
              </ul>
            </section>

            <p className="text-center text-gray-500 text-sm mt-12">
              This privacy policy is effective as of December 2, 2024.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 px-6 bg-gray-900">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Apotiowo" className="w-8 h-8 rounded-lg" />
            <span className="text-lg font-semibold text-white">Apotiowo</span>
          </div>
          <p className="text-gray-500 text-sm">2024 Apotiowo. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
