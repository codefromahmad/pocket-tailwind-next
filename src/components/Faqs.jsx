import Link from 'next/link'

import { Container } from '@/components/Container'

const faqs = [
  {
    id: 1,
    question: 'How does this work?',
    list: '',
    answer:
      'Our whole business depends on our tips being good, so it’s in our best interest that they are. The results of our customers speak for themselves, just trust us.',
  },
  {
    id: 2,
    question: 'What are the rules?',
    answer: '',
    list: [
      {
        id: 1,
        title: 'Maximum Daily Drawdown limit: 5%.',
      },
      {
        id: 2,
        title: 'Account DrawDown Limit: 10%.',
      },
      {
        id: 3,
        title: 'Minimum Trading Days: 2 days a week and 10 days a month.',
      },
    ],
  },
  {
    id: 3,
    question: 'What is the Zuma Account?',
    list: '',
    answer: `Every Trader starts with a ZumaRock Account. ZumaRock Accounts are the gateway to AsoRock Accounts. Although ZumaRock Accounts are demo accounts, you still get paid 5% weekly or 10% monthly on the profit you make! That's the Talent Bonus.`,
  },
  {
    id: 4,
    question: 'What is the Aso Account?',
    answer: '',
    list: [
      {
        id: 1,
        title:
          'Aso Accounts are live accounts successful Zuma Account Traders are eligible for by positively growing their accounts to 25% over time (no time limits). Aso Account Traders are FT9ja Traders! They are Traders that have proven to be in the league of the best Traders in Nigeria. Aso Account Traders get paid up to 80% of the profit.',
      },
      {
        id: 2,
        title:
          'Account can be compounded to 2X of the original Account Size. For example, a $25,000 account can be compounded to up to $50,000.',
      },
    ],
  },
  {
    id: 5,
    question: 'Are you a Broker?',
    answer: '',
    list: [
      {
        id: 1,
        title: `No, we are not.`,
      },
      {
        id: 2,
        title: `We have accounts with third-party Brokers which we give our Traders access to.`,
      },
    ],
  },
  {
    id: 6,
    question: 'Is this an investment offer?',
    answer: '',
    list: [
      {
        id: 1,
        title: `No. You are not “investing” any money into our company or into any trading account.`,
      },
      {
        id: 2,
        title: `At FT9ja, we invest our funds into talented, profitable, and reliable Traders. We discover our AsoRock Traders by onboarding them through ZumaRock Account which is a simulated/demo trading account. Traders get paid even during the onboarding period!`,
      },
    ],
  },
  {
    id: 7,
    list: '',
    question: 'Will I be responsible for losses?',
    answer: 'No! We cover the losses.',
  },
  {
    id: 8,
    list: '',
    question: 'Which Brokers do you offer?',
    answer: 'You can choose between IC Markets, FXTM, and Deriv.',
  },
]

export function Faqs() {
  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="border-t border-gray-200 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faqs-title"
            className="text-3xl font-medium tracking-tight text-gray-900"
          >
            Frequently asked questions
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            If you have anything else you want to ask,{' '}
            <Link
              href="mailto:info@ft9ja.com"
              className="text-gray-900 underline"
            >
              reach out to us
            </Link>
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-10 sm:mt-20 md:grid-cols-2 lg:max-w-none lg:grid-cols-3">
          {faqs.map(({ id, question, answer, list }) => (
            <div key={id}>
              <p className="text-lg font-semibold leading-6 text-gray-900">
                {question}
              </p>
              {answer && <p className="mt-4 text-sm text-gray-700">{answer}</p>}

              {list &&
                list.map(({ id, title }) => (
                  <li className="mt-4 text-sm text-gray-700" key={id}>
                    {title}
                  </li>
                ))}
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
