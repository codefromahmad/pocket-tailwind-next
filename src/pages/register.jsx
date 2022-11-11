import Head from 'next/head'
import Link from 'next/link'

import { AuthLayout } from '@/components/AuthLayout'
import { Button } from '@/components/Button'
import { TextField } from '@/components/Fields'

export default function Register() {
  return (
    <>
      <Head>
        <title>Sign Up - FT9ja</title>
      </Head>
      <AuthLayout
        title="Sign up for an account"
        subtitle={
          <>
            Already registered?{' '}
            <Link href="/login" className="">
              <span className="cursor-pointer text-[#28a745]">Sign in</span>
            </Link>{' '}
            to your account.
          </>
        }
      >
        <form>
          <div className="grid grid-cols-2 gap-6">
            <TextField
              label="First Name"
              id="firstname"
              name="firstname"
              type="name"
              autoComplete="given-name"
              required
            />
            <TextField
              label="Second Name"
              id="lastname"
              name="lastname"
              type="name"
              autoComplete="family-name"
              required
            />
            <TextField
              className="col-span-full"
              label="Email Address"
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
            />
            <TextField
              className="col-span-full"
              label="Phone"
              id="phone"
              name="phone"
              type="phone"
              autoComplete="phone"
              required
            />
            <TextField
              className="col-span-full"
              label="Broker"
              id="broker"
              name="broker"
              type="broker"
              autoComplete="broker"
              required
            />
            <TextField
              className="col-span-full"
              label="Account Size"
              id="accsize"
              name="accsize"
              type="accsize"
              autoComplete="accsize"
              required
            />
            <TextField
              className="col-span-full"
              label="Payout"
              id="payout"
              name="payout"
              type="payout"
              autoComplete="payout"
              required
            />
            <TextField
              className="col-span-full"
              label="Referral Code"
              id="referral_code"
              name="referral_code"
              type="referral_code"
              autoComplete="referral_code"
              required
            />
            <TextField
              className="col-span-full"
              label="Password"
              id="password"
              name="password"
              type="password"
              autoComplete="password"
              required
            />
            <TextField
              className="col-span-full"
              label="Re-Password"
              id="password"
              name="password2"
              type="password"
              autoComplete="password"
              required
            />
          </div>
          <Button type="submit" color="cyan" className="mt-8 w-full hover:bg-gray-800 focus:bg-[#28a745] duration-200 focus:text-white/80">
            Get started today
          </Button>
        </form>
      </AuthLayout>
    </>
  )
}
