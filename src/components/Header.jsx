import Link from 'next/link'
import { Popover } from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLinks } from '@/components/NavLinks'
import { useRouter } from 'next/router'

function MenuIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5 6h14M5 18h14M5 12h14"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ChevronUpIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M17 14l-5-5-5 5"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MobileNavLink({ children, ...props }) {
  return (
    <Popover.Button
      as={Link}
      className="block text-base leading-7 tracking-tight text-gray-700 hover:bg-black"
      {...props}
    >
      {children}
    </Popover.Button>
  )
}

export function Header() {
  const router = useRouter()
  return (
    <header>
      <nav>
        <Container className="relative z-50 flex justify-between py-8">
          <div className="relative z-10 flex items-center gap-16">
            <Link href="/" aria-label="Home">
              <Logo className="h-10 w-auto" />
            </Link>
            {router.pathname === '/' && (
              <div className="hidden lg:flex lg:gap-10">
                <NavLinks />
              </div>
            )}
          </div>
          <div className="flex items-center gap-6">
            <Popover className="lg:hidden">
              {({ open }) => (
                <>
                  <Popover.Button
                    className="relative z-10 -m-2 inline-flex items-center rounded-lg stroke-gray-900 p-2 hover:bg-gray-200/50 hover:stroke-gray-600 active:stroke-gray-900 [&:not(:focus-visible)]:focus:outline-none"
                    aria-label="Toggle site navigation"
                  >
                    {({ open }) =>
                      open ? (
                        <ChevronUpIcon className="h-6 w-6" />
                      ) : (
                        <MenuIcon className="h-6 w-6" />
                      )
                    }
                  </Popover.Button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <>
                        <Popover.Overlay
                          static
                          as={motion.div}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="fixed inset-0 z-0 bg-gray-300/60 backdrop-blur"
                        />
                        <Popover.Panel
                          static
                          as={motion.div}
                          initial={{ opacity: 0, y: -32 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{
                            opacity: 0,
                            y: -32,
                            transition: { duration: 0.2 },
                          }}
                          className="absolute inset-x-0 top-0 z-0 origin-top rounded-b-2xl bg-gray-50 px-6 pb-6 pt-16 shadow-2xl shadow-gray-900/20"
                        >
                          {/* {router.pathname === '/' && (
                            <div className="flex flex-col space-y-4">
                              <MobileNavLink
                                href="#features"
                                className="hover:bg-black"
                              >
                                Features
                              </MobileNavLink>
                              <MobileNavLink href="#reviews">
                                Reviews
                              </MobileNavLink>
                              <MobileNavLink href="#pricing">
                                Pricing
                              </MobileNavLink>
                              <MobileNavLink href="#faqs">FAQs</MobileNavLink>
                            </div>
                          )} */}
                          <div className="mt-8 flex flex-col gap-4">
                            <Link href="/">
                              <a
                                className={`rounded-lg p-3 ${
                                  router.pathname === '/' ? 'bg-slate-200' : ''
                                } duration-300 hover:bg-slate-200`}
                              >
                                Home
                              </a>
                            </Link>
                            <Link href="/how-it-works">
                              <a
                                className={`rounded-lg p-3 ${
                                  router.pathname === '/how-it-works'
                                    ? 'bg-slate-200'
                                    : ''
                                } duration-300 hover:bg-slate-200`}
                              >
                                How it works
                              </a>
                            </Link>
                            <Link href="/contact">
                              <a
                                className={`rounded-lg p-3 ${
                                  router.pathname === '/contact'
                                    ? 'bg-slate-200'
                                    : ''
                                } duration-300 hover:bg-slate-200`}
                              >
                                Contact
                              </a>
                            </Link>
                            <Link href="/support">
                              <a
                                className={`rounded-lg p-3 ${
                                  router.pathname === '/support'
                                    ? 'bg-slate-200'
                                    : ''
                                } duration-300 hover:bg-slate-200`}
                              >
                                Support
                              </a>
                            </Link>
                          </div>
                        </Popover.Panel>
                      </>
                    )}
                  </AnimatePresence>
                </>
              )}
            </Popover>
            <div className="hidden justify-between lg:flex">
              <Link href="/">
                <a
                  className={`mx-1 rounded-lg p-3 ${
                    router.pathname === '/' ? 'bg-slate-200' : ''
                  } duration-300 hover:bg-slate-200`}
                >
                  Home
                </a>
              </Link>

              <Link href="/how-it-works">
                <a
                  className={`mx-1 rounded-lg p-3 ${
                    router.pathname === '/how-it-works' ? 'bg-slate-200' : ''
                  } duration-300 hover:bg-slate-200`}
                >
                  How it works
                </a>
              </Link>

              <Link href="/contact">
                <a
                  className={`mx-1 rounded-lg p-3 ${
                    router.pathname === '/contact' ? 'bg-slate-200' : ''
                  } duration-300 hover:bg-slate-200`}
                >
                  Contact
                </a>
              </Link>

              <Link href="/support">
                <a
                  className={`mx-1 rounded-lg p-3 ${
                    router.pathname === '/support' ? 'bg-slate-200' : ''
                  } duration-300 hover:bg-slate-200`}
                >
                  Support
                </a>
              </Link>
            </div>
          </div>
        </Container>
      </nav>
    </header>
  )
}
