'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion, useAnimation, Variants } from 'framer-motion'
import { FilePenLineIcon } from './file-pen-icon'
import { MenuIcon } from './menu-icon'
import styles from './header.module.css'

const penVariants: Variants = {
  normal: {
    rotate: 0,
    x: 0,
    y: 0,
  },
  animate: {
    rotate: [-0.3, 0.2, -0.4],
    x: [0, -0.5, 1, 0],
    y: [0, 1, -0.5, 0],
    transition: {
      duration: 0.5,
      repeat: 1,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
}

const navLinks = [
  { href: 'https://www.jeanruiz.dev', label: 'Portfolio', external: true },
  { href: '/resume_en.pdf', label: 'Resume', external: true },
]

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hoveredNavItem, setHoveredNavItem] = useState<string | null>(null)
  const controls = useAnimation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`py-5 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="app-container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className={styles.logoLink}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="flex items-center"
          >
            <span className={styles.logoJ}>J</span>
            <span className={styles.logoRuiz}>Ruiz</span>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center">
          <nav
            className="items-center flex"
            onMouseLeave={() => setHoveredNavItem(null)}
          >
            <ul className="flex items-center gap-4">
              {navLinks.map(({ label, href, external }, index) => (
                <motion.li
                  key={href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.15, duration: 0.35 }}
                  className="relative inline-flex"
                >
                  <AnimatePresence>
                    {hoveredNavItem === label && (
                      <motion.div
                        layoutId="hovered-backdrop"
                        className="absolute inset-0 bg-teal/15 pointer-events-none"
                        initial={{
                          borderRadius: 8,
                        }}
                        exit={{ opacity: 0 }}
                        transition={{
                          duration: 0.2,
                          ease: 'easeInOut',
                        }}
                      />
                    )}
                  </AnimatePresence>
                  <Link
                    href={href}
                    target={external ? '_blank' : undefined}
                    onMouseEnter={() => setHoveredNavItem(label)}
                    className="relative text-text-secondary px-4 py-2 transition-opacity hover:text-text-primary hover:opacity-[1]"
                  >
                    {label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Mobile Navigation Toggle */}
        <MenuIcon
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          isOpen={isOpen}
        />

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full right-0 left-0 bg-zinc-tinted-800 md:hidden"
          >
            <div className="app-container flex flex-col py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  className="py-3 text-text-secondary transition-colors hover:text-teal text-[1.2rem]"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              <div className="mt-4 flex items-center justify-between border-t border-zinc-tinted-700 pt-4">
                <Link
                  className="flex items-center gap-2 p-0 text-text-secondary transition-colors hover:text-teal text-[1.2rem]"
                  href="/resume_en.pdf"
                  target="_blank"
                  onMouseLeave={() => controls.start('normal')}
                  onMouseEnter={() => controls.start('animate')}
                >
                  Resume
                  <FilePenLineIcon
                    controls={controls}
                    penVariants={penVariants}
                  />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Scroll indicator line */}
      <motion.div
        initial={{ width: '0%' }}
        animate={{ width: scrolled ? '100%' : '0%' }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        className="absolute bottom-0 left-1/2 h-[1px] bg-teal/30 -translate-x-1/2 pointer-events-none"
      />
    </motion.header>
  )
}

export default Header
