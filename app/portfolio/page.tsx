'use client'

import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const portfolioData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    date: "Sep 5, 2024",
    description: "A comprehensive e-commerce solution built with Next.js and Stripe integration, featuring real-time inventory management and analytics dashboard.",
    isHighlight: true
  },
  {
    id: 2,
    title: "SaaS Dashboard",
    date: "Sep 5, 2024",
    description: "Modern dashboard interface for SaaS applications with data visualization and user management features.",
    isHighlight: false
  },
  {
    id: 3,
    title: "Mobile Banking App",
    date: "Sep 5, 2024",
    description: "Secure mobile banking application with biometric authentication and real-time transaction processing.",
    isHighlight: false
  },
  {
    id: 4,
    title: "Learning Management System",
    date: "Sep 5, 2024",
    description: "Educational platform with video streaming, progress tracking, and interactive assessments.",
    isHighlight: false
  },
  {
    id: 5,
    title: "Healthcare Portal",
    date: "Sep 5, 2024",
    description: "Patient management system with appointment scheduling and telemedicine capabilities.",
    isHighlight: false
  },
  {
    id: 6,
    title: "Real Estate Platform",
    date: "Sep 5, 2024",
    description: "Property listing and management platform with virtual tours and mortgage calculators.",
    isHighlight: false
  }
];

export default function Portfolio() {
  return (
    <div className="bg-black relative w-full min-h-screen pt-[150px]" data-name="Portfolio" data-node-id="21:47">
      {/* Navbar */}
      <Navbar activeTab="portfolio" />

      {/* Main Content */}
      <div className="px-[95px] pt-[30px] pb-[100px]">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-[120px]"
        >
          <h1 className="font-['Montserrat'] font-semibold text-[48px] leading-[56px] text-white tracking-[0.24px] mb-[25px]" data-node-id="21:573">
            Projects
          </h1>
          <p className="font-['Montserrat'] font-medium text-[24px] leading-[32px] text-white tracking-[0.12px] max-w-[1000px] mx-auto" data-node-id="21:575">
            Explore a curated collection of my proudest creations - from pixel-perfect designs to robust enterprise solutions. Need proof? Just scroll down! ✨
          </p>
        </motion.div>

        {/* Highlight Projects Section */}
        <div className="relative mb-[50px]">
          <div className="flex gap-[40px] mb-[40px]">
            {/* Large Highlight Card */}
            {portfolioData.filter(project => project.isHighlight).map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(53, 50, 163, 0.3)" }}
                className="bg-[#1e1d4d] rounded-[20px] border-2 border-[#3532a3] p-[23px] cursor-pointer transition-all duration-300"
                style={{ width: '605px', height: '435px' }}
                data-node-id="21:580"
              >
                <div className="h-full flex flex-col justify-between">
                  <div className="mb-[20px]">
                    <div className="font-['Montserrat'] font-normal text-[18px] leading-[26px] text-white tracking-[0.09px] mb-[15px]" data-node-id="21:584">
                      {project.date}
                    </div>
                    <h2 className="font-['Montserrat'] font-semibold text-[40px] leading-[48px] text-white tracking-[0.2px] mb-[20px]" data-node-id="21:583">
                      {project.title}
                    </h2>
                    <p className="font-['Montserrat'] font-medium text-[20px] leading-[28px] text-white tracking-[0.1px] mb-[40px]" data-node-id="21:581">
                      {project.description}
                    </p>
                  </div>
                  <div className="mt-auto">
                    <button className="font-['SF Pro'] font-medium text-[20px] leading-normal text-white hover:text-secondary transition-colors duration-300" data-node-id="21:582">
                      Read More →
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Right Side - Two Smaller Cards */}
            <div className="flex flex-col gap-[26px]">
              {portfolioData.filter(project => !project.isHighlight).slice(0, 2).map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                  whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(53, 50, 163, 0.2)" }}
                  className="bg-[#1e1d4d] rounded-[20px] border-2 border-[#3532a3] p-[36px] cursor-pointer transition-all duration-300"
                  style={{ width: '605px', height: '205px' }}
                  data-node-id={`21:${596 + index * 6}`}
                >
                  <div className="font-['SF Pro'] font-medium text-[16px] leading-normal text-white mb-[12px]" data-node-id={`21:${599 + index * 6}`}>
                    {project.date}
                  </div>
                  <h3 className="font-['Montserrat'] font-semibold text-[32px] leading-[40px] text-white tracking-[0.16px] mb-[15px]" data-node-id={`21:${598 + index * 6}`}>
                    {project.title}
                  </h3>
                  <p className="font-['Montserrat'] font-normal text-[18px] leading-[26px] text-white tracking-[0.09px]" data-node-id={`21:${597 + index * 6}`}>
                    {project.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className="flex justify-center mb-[50px]" data-node-id="21:608">
          <svg width="1240" height="2" viewBox="0 0 1242 2" fill="none">
            <path d="M1 1H1241" stroke="#3AA9D4" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>

        {/* Grid Projects Section */}
        <div className="mb-[40px]">
          {/* First Row */}
          <div className="flex gap-[30px] mb-[30px]">
            {portfolioData.slice(3, 6).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(53, 50, 163, 0.2)" }}
                className="bg-[#1e1d4d] rounded-[20px] border-2 border-[#3532a3] p-[44px] cursor-pointer transition-all duration-300"
                style={{ width: '393px', height: '173px' }}
                data-node-id={`21:${612 + index * 6}`}
              >
                <div className="font-['SF Pro'] font-medium text-[14px] leading-normal text-white mb-[12px]" data-node-id={`21:${615 + index * 6}`}>
                  {project.date}
                </div>
                <h3 className="font-['SF Pro'] font-bold text-[29px] leading-normal text-white mb-[8px]" data-node-id={`21:${614 + index * 6}`}>
                  {project.title}
                </h3>
                <p className="font-['SF Pro'] font-medium text-[14px] leading-normal text-white" data-node-id={`21:${613 + index * 6}`}>
                  {project.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Second Row */}
          <div className="flex gap-[30px]">
            {portfolioData.slice(0, 3).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (index + 3) * 0.1 }}
                whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(53, 50, 163, 0.2)" }}
                className="bg-[#1e1d4d] rounded-[20px] border-2 border-[#3532a3] p-[44px] cursor-pointer transition-all duration-300"
                style={{ width: '393px', height: '173px' }}
                data-node-id={`21:${632 + index * 6}`}
              >
                <div className="font-['SF Pro'] font-medium text-[14px] leading-normal text-white mb-[12px]" data-node-id={`21:${635 + index * 6}`}>
                  {project.date}
                </div>
                <h3 className="font-['SF Pro'] font-bold text-[29px] leading-normal text-white mb-[8px]" data-node-id={`21:${634 + index * 6}`}>
                  {project.title}
                </h3>
                <p className="font-['SF Pro'] font-medium text-[14px] leading-normal text-white" data-node-id={`21:${633 + index * 6}`}>
                  {project.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-[50px] pb-[50px]" data-node-id="21:656">
        <Footer />
      </div>
    </div>
  );
}