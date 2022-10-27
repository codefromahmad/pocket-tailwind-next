import { RadioGroup } from '@headlessui/react'
import React, { useState } from 'react'
import clsx from 'clsx'
import RulesBlock from './RulesBlock'
import SecondRulesBlock from './SecondRulesBlock'
import Swipper from './Swipper'

const Rules = () => {
  let [activePeriod, setActivePeriod] = useState('Dailt Drawdown')

  return (
    <div className="w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center pt-10">
          <div className="relative">
            <RadioGroup
              value={activePeriod}
              onChange={setActivePeriod}
              className="grid grid-cols-2 md:grid-cols-4"
            >
              <RadioGroup.Option
                value={'Dailt Drawdown'}
                className={clsx(
                  `cursor-pointer ${
                    activePeriod === 'Dailt Drawdown'
                      ? 'bg-black text-white'
                      : 'text-black'
                  } rounded-tl-lg border border-gray-300 py-4 text-center text-sm outline-2 outline-offset-2 transition-colors duration-300  hover:border-gray-400 hover:bg-black hover:text-white sm:px-2 md:rounded-l-lg`
                )}
              >
                Dailt Drawdown
              </RadioGroup.Option>
              <RadioGroup.Option
                value={'Account Drawdown'}
                className={clsx(
                  `cursor-pointer ${
                    activePeriod === 'Account Drawdown'
                      ? 'bg-black text-white'
                      : 'text-black'
                  }  rounded-tr-lg border border-gray-300 py-4 text-center text-sm outline-2 outline-offset-2 transition-colors duration-300 hover:border-gray-400  hover:bg-black hover:text-white sm:px-2 md:rounded-tr-none`
                )}
              >
                Account Drawdown
              </RadioGroup.Option>
              <RadioGroup.Option
                value={'Minimum Trading Days'}
                className={clsx(
                  `cursor-pointer ${
                    activePeriod === 'Minimum Trading Days'
                      ? 'bg-black text-white'
                      : 'text-black'
                  }  rounded-bl-lg border border-gray-300 py-4 text-center text-sm outline-2 outline-offset-2 transition-colors duration-300  hover:border-gray-400 hover:bg-black hover:text-white sm:px-2 md:rounded-bl-none`
                )}
              >
                Minimum Trading Days
              </RadioGroup.Option>
              <RadioGroup.Option
                value={'Other things to note'}
                className={clsx(
                  `cursor-pointer ${
                    activePeriod === 'Other things to note'
                      ? 'bg-black text-white'
                      : 'text-black'
                  } rounded-br-lg border border-gray-300 py-4 text-center text-sm outline-2 outline-offset-2 transition-colors duration-300 hover:border-gray-400  hover:bg-black hover:text-white sm:px-2 md:rounded-r-lg`
                )}
              >
                Other things to note
              </RadioGroup.Option>
            </RadioGroup>
            <div></div>
            {/* <div
              aria-hidden="true"
              className={clsx(
                'pointer-events-none absolute inset-0 z-10 grid grid-cols-4 overflow-hidden rounded-lg bg-cyan-500 transition-all duration-300',
                activePeriod === 'Dailt Drawdown'
                  ? '[clip-path:inset(0_75%_0_0)]'
                  : activePeriod === 'Account Drawdown'
                  ? '[clip-path:inset(0_50%_0_25%)]'
                  : activePeriod === 'Minimum Trading Days'
                  ? '[clip-path:inset(0_25%_0_50%)]'
                  : '[clip-path:inset(0_0_0_calc(75%-1px))]'
              )}
            >
              {[
                'Dailt Drawdown',
                'Account Drawdown',
                'Minimum Trading Days',
                'Other things to note',
              ].map((period) => (
                <div
                  key={period}
                  className={clsx(
                    'py-4 text-center text-sm text-white [&:not(:focus-visible)]:focus:outline-none',
                    period === 'FT9ja Classic' && '-ml-px'
                  )}
                >
                  {period}
                </div>
              ))}
            </div> */}
          </div>
        </div>
        <div className="py-20">
          {activePeriod === 'Dailt Drawdown' && <RulesBlock />}
          {activePeriod === 'Account Drawdown' && <RulesBlock />}
          {activePeriod === 'Minimum Trading Days' && <RulesBlock />}
          {activePeriod === 'Other things to note' && <SecondRulesBlock />}
        </div>
      </div>
    </div>
  )
}

export default Rules
