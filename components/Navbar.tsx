'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

interface NavbarProps {
  activeTab?: 'services' | 'portfolio' | 'team' | 'career'
}

const imgNaspadIconlogoVer11 = "/logo.svg";

export default function Navbar({ activeTab }: NavbarProps) {
  const [currentSection, setCurrentSection] = useState<string>('')

  useEffect(() => {
    const handleScroll = () => {
      const featuresSection = document.getElementById('features')
      const talentsSection = document.getElementById('talents')

      if (featuresSection && talentsSection) {
        const scrollY = window.scrollY
        const featuresTop = featuresSection.offsetTop - 100
        const featuresBottom = featuresTop + featuresSection.offsetHeight
        const talentsTop = talentsSection.offsetTop - 100
        const talentsBottom = talentsTop + talentsSection.offsetHeight

        if (scrollY >= featuresTop && scrollY < featuresBottom) {
          setCurrentSection('services')
        } else if (scrollY >= talentsTop && scrollY < talentsBottom) {
          setCurrentSection('team')
        } else {
          setCurrentSection('')
        }
      }
    }

    // Only add scroll listener on homepage
    if (window.location.pathname === '/') {
      window.addEventListener('scroll', handleScroll)
      handleScroll() // Check initial position
    }

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Determine which tab should be active
  const getActiveTab = () => {
    if (activeTab === 'portfolio') return 'portfolio'
    if (window.location.pathname === '/' && currentSection === 'services') return 'services'
    if (window.location.pathname === '/' && currentSection === 'team') return 'team'
    return activeTab
  }

  const activeTabState = getActiveTab()
  const handleNavigation = (section: string) => {
    if (section === 'services') {
      // If on homepage, scroll to features section, otherwise go to homepage
      if (window.location.pathname === '/') {
        document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })
      } else {
        window.location.href = '/#features'
      }
    } else if (section === 'portfolio') {
      window.location.href = '/portfolio'
    } else if (section === 'team') {
      // Scroll to talents section if on homepage, otherwise go to homepage
      if (window.location.pathname === '/') {
        document.getElementById('talents')?.scrollIntoView({ behavior: 'smooth' })
      } else {
        window.location.href = '/#talents'
      }
    }
  }

  const handleBookCall = () => {
    // Scroll to CTA section if on homepage, otherwise go to homepage
    if (window.location.pathname === '/') {
      document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.location.href = '/#cta'
    }
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="relative w-full py-[50px] px-[50px]">
        {/* Header */}
        <div className="absolute top-[50px] left-[50px] w-[200px] h-16">
          <Image
            src={imgNaspadIconlogoVer11}
            alt="Naspad Studio Logo"
            width={200}
            height={64}
            className="w-full h-full object-contain cursor-pointer"
            onClick={() => window.location.href = '/'}
          />
        </div>

        {/* Navigation */}
        <div className="absolute bg-[#272660] box-border content-stretch flex flex-col gap-2.5 items-start justify-start left-1/2 px-20 py-4 rounded-[10px] top-[52px] translate-x-[-50%]">
          <div className="content-stretch flex font-['Montserrat'] font-medium gap-14 items-center justify-start leading-[0] not-italic relative shrink-0 text-[20px] text-nowrap text-white tracking-[0.1px]">
            <div className="relative shrink-0">
              <button
                onClick={() => handleNavigation('services')}
                className={`leading-[28px] text-nowrap whitespace-pre transition-colors duration-300 cursor-pointer bg-transparent border-none ${
                  activeTabState === 'services' ? 'text-secondary font-semibold' : 'text-white hover:text-secondary'
                }`}
              >
                Services
              </button>
            </div>
            <div className="relative shrink-0">
              <button
                onClick={() => handleNavigation('portfolio')}
                className={`leading-[28px] text-nowrap whitespace-pre transition-colors duration-300 cursor-pointer bg-transparent border-none ${
                  activeTabState === 'portfolio' ? 'text-secondary font-semibold' : 'text-white hover:text-secondary'
                }`}
              >
                Portfolio
              </button>
            </div>
            <div className="relative shrink-0">
              <button
                onClick={() => handleNavigation('team')}
                className={`leading-[28px] text-nowrap whitespace-pre transition-colors duration-300 cursor-pointer bg-transparent border-none ${
                  activeTabState === 'team' ? 'text-secondary font-semibold' : 'text-white hover:text-secondary'
                }`}
              >
                Team
              </button>
            </div>
            <div className="relative shrink-0">
              <button
                className={`leading-[28px] text-nowrap whitespace-pre transition-colors duration-300 cursor-pointer bg-transparent border-none ${
                  activeTabState === 'career' ? 'text-secondary font-semibold' : 'text-white hover:text-secondary'
                }`}
              >
                Career
              </button>
            </div>
          </div>
        </div>

        {/* Book a Call Button (Top Right) */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="absolute top-[52px] right-[50px] bg-primary px-[27px] py-4 rounded-[10px] flex items-center justify-center cursor-pointer hover:bg-light-navy transition-colors duration-300"
          onClick={handleBookCall}
        >
          <div className="font-['Montserrat'] font-medium text-[20px] leading-[28px] text-secondary tracking-[0.1px]">
            Book a Call
          </div>
        </motion.div>
      </div>
    </div>
  )
}