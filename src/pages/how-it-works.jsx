import React, { useState } from 'react'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { RadioGroup } from '@headlessui/react'
import clsx from 'clsx'
import { SecondFeatures } from '@/components/SecondFeatures'
import CompareModels from '@/components/CompareModels'
import { Header } from '@/components/Header'
import Rules from '@/components/Rules'
import { theme } from '../../tailwind.config'
import Swipper from '@/components/Swipper'
import { Footer } from '@/components/Footer'

const HowItWorks = () => {
  let [activePeriod, setActivePeriod] = useState('FT9ja Classic')
  let [prevPeriod, setPrevPeriod] = useState('FT9ja Classic')

  const breakpoints = theme

  console.log('Breakpoints')
  console.log(breakpoints)

  return (
    <>
      <Header />
      <div className="flex justify-center bg-gray-900 px-2 pt-10 lg:mx-0">
        <div className="relative">
          <RadioGroup
            value={activePeriod}
            onClick={() => setPrevPeriod(activePeriod)}
            onChange={setActivePeriod}
            className="grid grid-cols-3 text-center"
          >
            {console.log(prevPeriod + activePeriod)}
            <RadioGroup.Option
              value={'FT9ja Classic'}
              className={clsx(
                'cursor-pointer rounded-l-lg border border-gray-300 px-3 py-7 text-sm text-gray-200 outline-2 outline-offset-2 transition-colors hover:border-gray-400 sm:px-10'
              )}
            >
              FT9ja Classic
            </RadioGroup.Option>
            <RadioGroup.Option
              value={'FT9ja Challenge'}
              className={clsx(
                'cursor-pointer border border-gray-300 px-3 py-7 text-sm text-gray-200 outline-2 outline-offset-2 transition-colors hover:border-gray-400 sm:px-10'
              )}
            >
              FT9ja Challenge
            </RadioGroup.Option>
            <RadioGroup.Option
              value={'Compare Models'}
              className={clsx(
                'cursor-pointer rounded-r-lg  border border-gray-300 px-3 py-7 text-sm text-gray-200 outline-2 outline-offset-2 transition-colors hover:border-gray-400 sm:px-10'
              )}
            >
              Compare Models
            </RadioGroup.Option>
          </RadioGroup>
          <div
            aria-hidden="true"
            className={clsx(
              'pointer-events-none absolute inset-0 z-10 grid grid-cols-3 overflow-hidden rounded-lg bg-cyan-500 transition-all duration-300',
              activePeriod === 'FT9ja Classic'
                ? '[clip-path:inset(0_66%_0_0)]'
                : activePeriod === 'FT9ja Challenge'
                ? '[clip-path:inset(0_33%_0_33%)]'
                : '[clip-path:inset(0_0_0_calc(66%-1px))]'
            )}
          >
            {['FT9ja Classic', 'FT9ja Challenge', 'Compare Models'].map(
              (period) => (
                <div
                  key={period}
                  className={clsx(
                    'py-7 px-3 text-center text-sm text-white sm:px-10 [&:not(:focus-visible)]:focus:outline-none',
                    period === 'FT9ja Classic'
                  )}
                >
                  {period}
                </div>
              )
            )}
          </div>
        </div>
      </div>
      {activePeriod === 'FT9ja Classic' && <PrimaryFeatures />}
      {activePeriod === 'FT9ja Challenge' && <SecondFeatures />}
      {activePeriod === 'Compare Models' && <CompareModels />}
      <Rules />
      <div className="mx-auto max-w-screen-md py-10 px-5 sm:px-10">
        <h1 className="pb-5 text-center text-3xl font-bold sm:text-left">
          Meet Sam
        </h1>
        <Swipper />
      </div>
      <Footer />
    </>
  )
}

export default HowItWorks
