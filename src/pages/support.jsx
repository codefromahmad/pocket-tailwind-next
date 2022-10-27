import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import Link from 'next/link'
import React, { useState } from 'react'
import { BiSearch } from 'react-icons/bi'

const support = () => {
  const supportLinks = [
    {
      id: 1,
      title: 'Getting Started',
      links: [
        {
          id: 1,
          title: 'What You Need to Get Started',
          link: '/articles/what-you-need-to-get-started/',
        },
        {
          id: 2,
          title: 'Investments you can make on Robinhood',
          link: '/articles/investments-you-can-make-on-robinhood/',
        },
        {
          id: 3,
          title: 'Open My Account',
          link: '/articles/open-my-account/',
        },
      ],
    },
    {
      id: 2,
      title: 'Frequently Asked Questions',
      links: [
        {
          id: 1,
          title: 'What to know in light of Russia’s attack on Ukraine',
          link: '/articles/russia-securities-sanctions/',
        },
        {
          id: 2,
          title: 'Massachusetts State and Robinhood',
          link: '/articles/massachusetts-state-and-robinhood/',
        },
        {
          id: 3,
          title: 'November 3 data security incident',
          link: '/articles/november-3-data-security-incident/',
        },
      ],
    },
    {
      id: 3,
      title: 'My account and login',
      links: [
        {
          id: 1,
          title: 'How to sign in to Robinhood from a new device',
          link: '/articles/how-to-sign-in-to-robinhood-from-a-new-device/',
        },
        {
          id: 2,
          title: 'Updating your notification settings',
          link: '/articles/updating-your-notification-settings/',
        },
        {
          id: 3,
          title: 'Getting familiar with your username',
          link: '/articles/getting-familiar-with-your-username/',
        },
      ],
    },
    {
      id: 4,
      title: 'Getting Started',
      links: [
        {
          id: 1,
          title: 'What You Need to Get Started',
          link: '/articles/what-you-need-to-get-started/',
        },
        {
          id: 2,
          title: 'Investments you can make on Robinhood',
          link: '/articles/investments-you-can-make-on-robinhood/',
        },
        {
          id: 3,
          title: 'Open My Account',
          link: '/articles/open-my-account/',
        },
      ],
    },
    {
      id: 5,
      title: 'Frequently Asked Questions',
      links: [
        {
          id: 1,
          title: 'What to know in light of Russia’s attack on Ukraine',
          link: '/articles/russia-securities-sanctions/',
        },
        {
          id: 2,
          title: 'Massachusetts State and Robinhood',
          link: '/articles/massachusetts-state-and-robinhood/',
        },
        {
          id: 3,
          title: 'November 3 data security incident',
          link: '/articles/november-3-data-security-incident/',
        },
      ],
    },
    {
      id: 6,
      title: 'My account and login',
      links: [
        {
          id: 1,
          title: 'How to sign in to Robinhood from a new device',
          link: '/articles/how-to-sign-in-to-robinhood-from-a-new-device/',
        },
        {
          id: 2,
          title: 'Updating your notification settings',
          link: '/articles/updating-your-notification-settings/',
        },
        {
          id: 3,
          title: 'Getting familiar with your username',
          link: '/articles/getting-familiar-with-your-username/',
        },
      ],
    },
    {
      id: 7,
      title: 'Getting Started',
      links: [
        {
          id: 1,
          title: 'What You Need to Get Started',
          link: '/articles/what-you-need-to-get-started/',
        },
        {
          id: 2,
          title: 'Investments you can make on Robinhood',
          link: '/articles/investments-you-can-make-on-robinhood/',
        },
        {
          id: 3,
          title: 'Open My Account',
          link: '/articles/open-my-account/',
        },
      ],
    },
    {
      id: 8,
      title: 'Frequently Asked Questions',
      links: [
        {
          id: 1,
          title: 'What to know in light of Russia’s attack on Ukraine',
          link: '/articles/russia-securities-sanctions/',
        },
        {
          id: 2,
          title: 'Massachusetts State and Robinhood',
          link: '/articles/massachusetts-state-and-robinhood/',
        },
        {
          id: 3,
          title: 'November 3 data security incident',
          link: '/articles/november-3-data-security-incident/',
        },
      ],
    },
    {
      id: 9,
      title: 'My account and login',
      links: [
        {
          id: 1,
          title: 'How to sign in to Robinhood from a new device',
          link: '/articles/how-to-sign-in-to-robinhood-from-a-new-device/',
        },
        {
          id: 2,
          title: 'Updating your notification settings',
          link: '/articles/updating-your-notification-settings/',
        },
        {
          id: 3,
          title: 'Getting familiar with your username',
          link: '/articles/getting-familiar-with-your-username/',
        },
      ],
    },
  ]

  const [search, setSearch] = useState('')
  const [result, setResult] = useState()

  const handleChange = (e) => {
    setSearch(e.target.value)
    const data = supportLinks.map((item) => ({
      links: item.links.filter((child) =>
        child.title.toLowerCase().includes(search.toLowerCase())
      ),
    }))
    setResult(data)
    console.log(data)
  }

  return (
    <div>
      <Header />
      <div className="w-full">
        <div className="mx-auto max-w-screen-lg">
          <div>
            <h1 className="text-4xl font-bold">Hello!</h1>
            <h1 className="text-4xl font-bold">How can we help?</h1>
            <div className="group">
              <div className="my-5 flex max-w-screen-sm items-center rounded-full bg-slate-200 py-1 text-xl duration-300 group-focus-within:bg-slate-100 group-focus-within:shadow-xl">
                <span className="pl-4">
                  <BiSearch className="text-red text-2xl text-[rgb(106,114,120)]" />
                </span>
                <input
                  type="text"
                  name="search"
                  onChange={handleChange}
                  value={search}
                  placeholder="Search"
                  className="w-full border-none bg-transparent text-xl focus:ring-0"
                />
                {/* {result && console.log(result.links)} */}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-5">
            {supportLinks.map(({ id, title, links }) => (
              <div key={id} className="py-8">
                <h1 className="my-4 text-xl font-bold">{title}</h1>
                {links.map(({ id, title, link }) => (
                  <div key={id} className="py-2">
                    <Link href={link}>
                      <a className="duration-300 hover:underline">{title}</a>
                    </Link>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default support
