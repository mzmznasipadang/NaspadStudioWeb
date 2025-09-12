'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="bg-primary relative w-full min-h-screen flex flex-col" data-name="Landing Coming Soon Light">
      {/* Animated Background Gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary via-purple-900 to-primary"
        animate={{
          background: [
            'linear-gradient(135deg, #272660 0%, #4c1d95 50%, #1E1D4D 100%)',
            'linear-gradient(135deg, #272660 0%, #7c3aed 50%, #1E1D4D 100%)',
            'linear-gradient(135deg, #272660 0%, #4c1d95 50%, #1E1D4D 100%)'
          ]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Main Content Area - Takes up most of the screen */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 relative z-10 min-h-0">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8 lg:gap-16">
            {/* Logo Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-shrink-0"
            >
              <div className="w-full max-w-[500px] h-[161px] relative">
                <Image
                  src="/logo.svg"
                  alt="Naspad Studio Logo"
                  width={500}
                  height={161}
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>
            
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center lg:text-left flex-shrink-0"
            >
              <div className="font-['Montserrat'] font-semibold text-3xl sm:text-4xl lg:text-[48px] leading-tight sm:leading-[56px] tracking-[0.24px] text-white mb-4">
                Hello There!
              </div>
              
              <div className="font-['Montserrat'] font-medium text-lg sm:text-xl lg:text-[32px] leading-tight sm:leading-[40px] tracking-[0.16px] text-white">
                We are currently building our dream!
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Contact Information - Fixed at bottom with improved animation */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.6, 
          delay: 1.0,
          type: "spring",
          stiffness: 100
        }}
        className="bg-white py-4 px-4 w-full relative z-20 mt-auto"
        style={{ opacity: 1 }} // Force opacity to stay at 1
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.p 
            className="font-['Montserrat'] font-medium text-sm text-primary transition-colors duration-200 group-hover:text-purple-700"
            whileHover={{ scale: 1.05 }}
          >
            info@naspadstudio.id | +62-8111-9903-888
          </motion.p>
        </div>
      </motion.div>
    </div>
  )
}