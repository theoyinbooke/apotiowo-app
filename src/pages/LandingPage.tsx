import { Link } from 'react-router-dom'
import {
  PieChart,
  Target,
  CreditCard,
  TrendingUp,
  Shield,
  ArrowRight,
  CheckCircle,
  BarChart3,
  Calendar,
  Bell,
  Wallet
} from 'lucide-react'

const features = [
  {
    icon: Wallet,
    title: 'Smart Budgeting',
    description: 'Create and manage budgets with ease. Track your spending across categories and stay within your limits.',
    color: '#D4C9B8'
  },
  {
    icon: BarChart3,
    title: 'Transaction Tracking',
    description: 'Record income, expenses, and savings transactions. See where your money goes with detailed breakdowns.',
    color: '#F4A087'
  },
  {
    icon: Target,
    title: 'Savings Goals',
    description: 'Set financial goals and track your progress. Watch your savings grow with visual progress indicators.',
    color: '#C8E6DC'
  },
  {
    icon: CreditCard,
    title: 'Credit Card Management',
    description: 'Track credit card balances and payments. Auto-deficit feature helps monitor overspending.',
    color: '#7B9CAD'
  },
  {
    icon: PieChart,
    title: 'Visual Analytics',
    description: 'Understand your spending patterns with beautiful charts and budget health overviews.',
    color: '#2AA7B5'
  },
  {
    icon: Calendar,
    title: 'Recurring Transactions',
    description: 'Set up recurring income and expenses. Never miss tracking your regular payments.',
    color: '#F4A087'
  }
]

const benefits = [
  'Real-time sync across all your devices',
  'Secure data storage with encryption',
  'Beautiful, intuitive interface',
  'Category-based expense tracking',
  'Budget health monitoring',
  'Export and manage your data'
]

const currentYear = new Date().getFullYear()

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Apotiowo" className="w-10 h-10 rounded-xl" />
            <span className="text-xl font-semibold text-gray-900">Apotiowo</span>
          </div>
          <nav className="flex items-center gap-6">
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
            <Link to="/privacy" className="text-gray-600 hover:text-gray-900 transition-colors">Privacy</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Take Control of Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2AA7B5] to-[#1E8A96]">
                Finances
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Apotiowo is your personal finance companion. Track budgets, manage expenses,
              set savings goals, and gain insights into your spending habits.
            </p>
            <div className="flex justify-center">
              <a
                href="https://apps.apple.com/app/apotiowo"
                className="inline-block hover:opacity-80 transition-opacity"
              >
                <img
                  src="/appstore-badge.svg"
                  alt="Download on the App Store"
                  className="h-14"
                />
              </a>
            </div>
          </div>

          {/* App Preview */}
          <div className="mt-16 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-[#2AA7B5]/10 to-transparent rounded-3xl" />
            <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 md:p-12 shadow-xl">
              <div className="grid md:grid-cols-3 gap-6">
                {/* Dashboard Preview Card */}
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-500">Monthly Overview</span>
                    <TrendingUp className="w-4 h-4 text-green-500" />
                  </div>
                  <p className="text-3xl font-bold text-gray-900">$4,250.00</p>
                  <p className="text-sm text-gray-500 mt-1">Total Income</p>
                  <div className="mt-4 h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-gradient-to-r from-[#2AA7B5] to-[#1E8A96] rounded-full" />
                  </div>
                </div>

                {/* Budget Card */}
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-500">Budget Health</span>
                    <CheckCircle className="w-4 h-4 text-[#2AA7B5]" />
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700">Groceries</span>
                      <span className="text-sm text-green-600">75%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full w-3/4 bg-[#C8E6DC] rounded-full" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700">Transport</span>
                      <span className="text-sm text-yellow-600">90%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full w-[90%] bg-[#F4A087] rounded-full" />
                    </div>
                  </div>
                </div>

                {/* Savings Card */}
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-500">Savings Goals</span>
                    <Target className="w-4 h-4 text-[#C8E6DC]" />
                  </div>
                  <p className="text-3xl font-bold text-gray-900">$12,500</p>
                  <p className="text-sm text-gray-500 mt-1">of $20,000 goal</p>
                  <div className="mt-4 flex items-center gap-2">
                    <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full w-[62%] bg-[#C8E6DC] rounded-full" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">62%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Manage Your Money
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Powerful features designed to help you take control of your financial life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: feature.color }}
                >
                  <feature.icon className="w-6 h-6 text-gray-800" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Apotiowo?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Built with your financial wellness in mind, Apotiowo provides a seamless
                experience to help you achieve your money goals.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#C8E6DC] flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-gray-800" />
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-[#2AA7B5]/10 to-[#1E8A96]/10 rounded-3xl p-8">
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-4 shadow-sm flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#F4A087] flex items-center justify-center">
                    <Bell className="w-5 h-5 text-gray-800" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Budget Alert</p>
                    <p className="text-sm text-gray-500">You've used 80% of your dining budget</p>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#C8E6DC] flex items-center justify-center">
                    <Target className="w-5 h-5 text-gray-800" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Goal Progress</p>
                    <p className="text-sm text-gray-500">Emergency fund is 62% complete</p>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#7B9CAD] flex items-center justify-center">
                    <CreditCard className="w-5 h-5 text-gray-800" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Payment Due</p>
                    <p className="text-sm text-gray-500">Credit card payment in 5 days</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#2AA7B5] to-[#1E8A96]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Start Your Financial Journey Today
          </h2>
          <p className="text-xl text-white/80 mb-10">
            Download Apotiowo and take the first step towards financial freedom.
          </p>
          <a
            href="https://apps.apple.com/app/apotiowo"
            className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-colors"
          >
            Get Apotiowo
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="Apotiowo" className="w-10 h-10 rounded-xl" />
              <span className="text-xl font-semibold text-white">Apotiowo</span>
            </div>
            <nav className="flex items-center gap-6">
              <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <a href="mailto:oyinbookeola@outlook.com" className="text-gray-400 hover:text-white transition-colors">
                Contact
              </a>
            </nav>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              {currentYear} Apotiowo. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <Shield className="w-4 h-4" />
              <span>Your data is secure and encrypted</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
