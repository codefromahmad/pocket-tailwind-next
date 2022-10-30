import Image from 'next/future/image'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { NavLinks } from '@/components/NavLinks'
import { useRouter } from 'next/router'
import logo from '../images/logo.png'
import { ImFacebook, ImTwitter, ImYoutube } from 'react-icons/im'
import { GrInstagram } from 'react-icons/gr'

export function Footer() {
  const router = useRouter()
  return (
    <footer className="bg-white">
      <Container>
        <div className="mx-auto grid max-w-[425px] grid-cols-1 gap-8 pt-14 pb-8 md:max-w-screen-lg md:grid-cols-3 lg:py-16">
          <div className="flex   flex-col text-gray-900">
            <Image src={logo} alt="alsdkjf" />
            <div className="ml-2">
              <p className="mt-1 text-sm">
                We are Nigeria's 1st next-generational proprietary trading firm.
                Our aim is to scout for talented but undercapitalized
                Financial-asset Traders in Nigeria (FT9ja) and empower them.
                They trade with our funds, and we split the profit. It’s really
                a win-win! We want to see retail Traders succeed. Trade with
                peace of mind by trading with our money. Get rid of the fear of
                losing your money as well as the problems of trading a small
                account size.
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="mb-4 text-center text-2xl font-bold md:text-left">
              Contact Us
            </h1>
            <div>
              <p className="text-center md:text-left">
                <span className="font-bold">Email: </span>
                <a className="text-green-600" href="mailto:info@ft9ja.com">
                  info@ft9ja.com
                </a>
              </p>
              <p className="text-center md:text-left">
                {' '}
                <span className="font-bold">Whatsapp Number: </span>
                +2348138462394
              </p>
              <p className="text-center text-sm md:text-left">
                Mon to Fri - 9am to 5pm WAT
              </p>
              <p className="text-center md:text-left">
                Abuja: 18, Queen Elizabeth Street, Asokoro
              </p>
              <p className="text-center md:text-left">
                <a
                  className="text-sm text-green-600"
                  href="https://calendly.com/ft9ja-lagos"
                >
                  (Appointments only)
                </a>
              </p>
              <p className="text-center md:text-left">
                Lagos: 362 Herbert Macaulay Way, Yaba
              </p>
              <p className="text-center md:text-left">
                <a
                  className="text-sm  text-green-600"
                  href="https://calendly.com/ft9ja-lagos"
                >
                  (Appointments only)
                </a>
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="mb-8 text-center text-2xl font-bold md:text-left">
              Apply Online
            </h1>
            <div className="text-center md:text-left">
              <Link href="https://temp-app-pockettailwind.herokuapp.com/#pricing">
                <a className="rounded-lg bg-black py-4 px-8 text-xl text-white duration-300 hover:bg-gray-800 md:px-10 md:py-5">
                  Start Trading
                </a>
              </Link>
            </div>
          </div>
          {/* {router.pathname === '/' && (
              <nav className="mt-11 flex gap-8">
                <NavLinks />
              </nav>
            )} */}
        </div>

        <div className="flex flex-col items-center border-t border-gray-200 px-5 pt-8 pb-12 md:px-10 md:pt-6">
          <div className="flex py-3 md:py-5">
            <a
              href="https://facebook.com/FT9ja-101059375510372/"
              className="px-4"
            >
              <ImFacebook className="text-2xl" />
            </a>
            <a
              href="https://www.instagram.com/ft9ja.official/"
              className="px-4"
            >
              <GrInstagram className="text-2xl" />
            </a>
            <a href="https://twitter.com/ft9ja_official" className="px-4">
              <ImTwitter className="text-2xl" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCM3RtiMpxAQ3pNUnvUP9xcw"
              className="px-4"
            >
              <ImYoutube className="text-2xl" />
            </a>
          </div>
          <p className="mt-6 text-sm text-gray-500 md:mt-0">
            All right reserved &copy; 2022 FT9ja -{' '}
            <a href="https://docs.google.com/document/d/1kn0WYZko52qc5-ju8l6jl1kj1AfBNqc7eHVuDczzagQ/">
              Terms & Conditions
            </a>{' '}
            and{' '}
            <a href="https://docs.google.com/document/d/1_Avh3t3fzpju1ZHB6MfBLqjjC0iuLfPMm8CfY1lQXKo/">
              Privacy
            </a>
          </p>
        </div>
      </Container>
    </footer>
  )
}
