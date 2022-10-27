import React from 'react'
import { motion } from 'framer-motion'

const CompareModels = () => {
  const models = [
    {
      id: 1,
      title: 'FT9ja Classic',
      items: [
        {
          id: 1,
          text: 'some text',
        },
        {
          id: 2,
          text: 'some text',
        },
        {
          id: 3,
          text: 'some text',
        },
        {
          id: 4,
          text: 'some text',
        },
        {
          id: 5,
          text: 'some text',
        },
        {
          id: 6,
          text: 'some text',
        },
      ],
    },
    {
      id: 2,
      title: 'FT9ja Classic',
      items: [
        {
          id: 1,
          text: 'some text',
        },
        {
          id: 2,
          text: 'some text',
        },
        {
          id: 3,
          text: 'some text',
        },
        {
          id: 4,
          text: 'some text',
        },
        {
          id: 5,
          text: 'some text',
        },
        {
          id: 6,
          text: 'some text',
        },
      ],
    },
  ]

  const Animations = {
    initial: 'initial',
    animate: 'animate',
    variants: {
      initial: {
        opacity: 0,
      },
      animate: {
        opacity: 1,
        transition: { duration: 0.8 },
      },
    },
  }

  return (
    <section
      id="features"
      aria-label="Features for investing all your money"
      className="sm:py-15 w-full bg-gray-900 px-2 py-20 lg:mx-0"
    >
      <motion.div {...Animations}>
        <div className=" py-15 mx-auto max-w-screen-md text-white">
          <div className="grid grid-cols-1 gap-16 py-10 md:grid-cols-2">
            {models.map(({ id, title, items }) => (
              <div
                className="rounded-lg border-[1px] border-white text-center"
                key={id}
              >
                <h1 className="border-b-[1px] py-4 font-bold">{title}</h1>
                {items.map(({ id, text }) => (
                  <p
                    key={id}
                    className={`py-4 ${id % 2 === 0 ? 'bg-gray-700' : ''} `}
                  >
                    {text}
                  </p>
                ))}
                <button className="hover: my-5 rounded-lg bg-cyan-600 py-2 px-4 duration-200 hover:bg-cyan-500">
                  Select Classic
                </button>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default CompareModels
