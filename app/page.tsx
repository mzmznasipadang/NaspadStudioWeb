'use client'

import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const imgNaspadIconlogoVer11 = "/logo.svg";

const faqData = [
  {
    question: "What services do you offer?",
    answer: "We offer comprehensive web development services including consultation, design, and development. Our team specializes in modern frameworks like React, Next.js, and provides full-stack solutions."
  },
  {
    question: "How long does a project typically take?",
    answer: "Project timelines vary based on complexity and requirements. A typical website takes 2-6 weeks, while more complex applications can take 2-4 months. We provide detailed timelines during consultation."
  },
  {
    question: "Do you provide ongoing support?",
    answer: "Yes! We offer ongoing maintenance and support packages to ensure your website stays updated, secure, and performing optimally. This includes regular updates, backups, and technical support."
  },
  {
    question: "What's your development process?",
    answer: "Our process includes: 1) Initial consultation and planning, 2) Design and prototyping, 3) Development and testing, 4) Review and refinement, 5) Launch and deployment, 6) Ongoing support and maintenance."
  }
];

const asciiFrames = [
  `
    ╔══════════════════════════════════════════════════════════════════════╗
    ║                                                                      ║
    ║  ███╗   ██╗ █████╗ ███████╗██████╗  █████╗ ██████╗                   ║
    ║  ████╗  ██║██╔══██╗██╔════╝██╔══██╗██╔══██╗██╔══██╗                  ║
    ║  ██╔██╗ ██║███████║███████╗██████╔╝███████║██║  ██║                  ║
    ║  ██║╚██╗██║██╔══██║╚════██║██╔═══╝ ██╔══██║██║  ██║                  ║
    ║  ██║ ╚████║██║  ██║███████║██║     ██║  ██║██████╔╝                  ║
    ║  ╚═╝  ╚═══╝╚═╝  ╚═╝╚══════╝╚═╝     ╚═╝  ╚═╝╚═════╝                   ║
    ║                                                                      ║
    ║                     💻 CRAFTING DIGITAL DREAMS                       ║
    ║                                                                      ║
    ╚══════════════════════════════════════════════════════════════════════╝
  `,
  `
    ╔══════════════════════════════════════════════════════════════════════╗
    ║                                                                      ║
    ║  ████╗  ██╗ █████╗ ███████╗██████╗  █████╗ ██████╗                   ║
    ║  ██╔██╗ ██║██╔══██╗██╔════╝██╔══██╗██╔══██╗██╔══██╗                  ║
    ║  ██║╚██╗██║███████║███████╗██████╔╝███████║██║  ██║                  ║
    ║  ██║ ╚████║██╔══██║╚════██║██╔═══╝ ██╔══██║██║  ██║                  ║
    ║  ██║  ╚███║██║  ██║███████║██║     ██║  ██║██████╔╝                  ║
    ║  ╚═╝   ╚══╝╚═╝  ╚═╝╚══════╝╚═╝     ╚═╝  ╚═╝╚═════╝                   ║
    ║                                                                      ║
    ║                      🚀 BUILDING THE FUTURE                         ║
    ║                                                                      ║
    ╚══════════════════════════════════════════════════════════════════════╝
  `,
  `
    ╔══════════════════════════════════════════════════════════════════════╗
    ║                                                                      ║
    ║  ██╗   ██╗ █████╗ ███████╗██████╗  █████╗ ██████╗                    ║
    ║  ███╗  ██║██╔══██╗██╔════╝██╔══██╗██╔══██╗██╔══██╗                   ║
    ║  ████╗ ██║███████║███████╗██████╔╝███████║██║  ██║                   ║
    ║  ██╔██╗██║██╔══██║╚════██║██╔═══╝ ██╔══██║██║  ██║                   ║
    ║  ██║╚████║██║  ██║███████║██║     ██║  ██║██████╔╝                   ║
    ║  ╚═╝ ╚═══╝╚═╝  ╚═╝╚══════╝╚═╝     ╚═╝  ╚═╝╚═════╝                    ║
    ║                                                                      ║
    ║                      ⚡ POWERED BY PASSION                          ║
    ║                                                                      ║
    ╚══════════════════════════════════════════════════════════════════════╝
  `,
  `
    ╔══════════════════════════════════════════════════════════════════════╗
    ║                                                                      ║
    ║  ███╗   ██╗ █████╗ ███████╗██████╗  █████╗ ██████╗                   ║
    ║  ████╗  ██║██╔══██╗██╔════╝██╔══██╗██╔══██╗██╔══██╗                  ║
    ║  ██╔██╗ ██║███████║███████╗██████╔╝███████║██║  ██║                  ║
    ║  ██║╚██╗██║██╔══██║╚════██║██╔═══╝ ██╔══██║██║  ██║                  ║
    ║  ██║ ╚████║██║  ██║███████║██║     ██║  ██║██████╔╝                  ║
    ║  ╚═╝  ╚═══╝╚═╝  ╚═╝╚══════╝╚═╝     ╚═╝  ╚═╝╚═════╝                   ║
    ║                                                                      ║
    ║                      🎨 DESIGNING TOMORROW                          ║
    ║                                                                      ║
    ╚══════════════════════════════════════════════════════════════════════╝
  `
];

const MatrixRain = () => {
  const [drops, setDrops] = useState<Array<{ x: number; y: number; speed: number; chars: string }>>([]);

  useEffect(() => {
    const chars = "01234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz{}[]()<>/\\";
    const initialDrops = Array.from({ length: 25 }, (_, i) => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      speed: Math.random() * 2 + 1,
      chars: Array.from({ length: 8 }, () => chars[Math.floor(Math.random() * chars.length)]).join('')
    }));

    setDrops(initialDrops);

    const interval = setInterval(() => {
      setDrops(prev => prev.map(drop => ({
        ...drop,
        y: drop.y > 100 ? -10 : drop.y + drop.speed,
        chars: Array.from({ length: 8 }, () => chars[Math.floor(Math.random() * chars.length)]).join('')
      })));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-15">
      {drops.map((drop, i) => (
        <div
          key={i}
          className="absolute text-secondary text-xs font-mono whitespace-pre"
          style={{
            left: `${drop.x}%`,
            top: `${drop.y}%`,
            transform: 'translateX(-50%)',
            textShadow: '0 0 5px rgba(73, 188, 233, 0.6)'
          }}
        >
          {drop.chars.split('').map((char, charIndex) => (
            <div key={charIndex} style={{ opacity: 1 - (charIndex * 0.12) }}>
              {char}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

const ASCIIAnimation = () => {
  const [currentFrame, setCurrentFrame] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    const interval = setInterval(() => {
      setCurrentFrame((prev) => (prev + 1) % asciiFrames.length);
    }, 2000);

    const blinkInterval = setInterval(() => {
      setIsVisible((prev) => !prev);
    }, 500);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
      clearInterval(blinkInterval);
    };
  }, []);

  // Calculate parallax effect - ASCII moves slower than scroll
  const parallaxY = scrollY * 0.5;
  const opacity = Math.max(0.1, 0.3 - (scrollY / 1000));

  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Matrix Rain Background */}
      <MatrixRain />

      {/* Main ASCII Art with Parallax */}
      <div className="absolute inset-0 flex items-center justify-center" style={{ opacity }}>
        <motion.pre
          key={currentFrame}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: isVisible ? 1 : 0.4,
            scale: 1
          }}
          transition={{ duration: 0.5 }}
          className="text-secondary text-base leading-tight font-mono whitespace-pre-wrap font-bold"
          style={{
            fontFamily: 'Monaco, "Lucida Console", "Courier New", monospace',
            textShadow: '0 0 20px rgba(73, 188, 233, 0.8), 0 0 40px rgba(73, 188, 233, 0.4)',
            transform: `translateY(${parallaxY}px)`
          }}
        >
          {asciiFrames[currentFrame]}
        </motion.pre>
      </div>
    </div>
  );
};

export default function Homepage() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <div className="bg-black relative w-full" data-name="Homepage" data-node-id="13:382">
      {/* Hero Section */}
      <div className="relative w-full min-h-screen bg-black overflow-hidden">
        {/* ASCII Animation Background */}
        <ASCIIAnimation />
      {/* Header */}
      <div className="absolute top-[50px] left-[50px] w-[200px] h-16">
        <Image
          src={imgNaspadIconlogoVer11}
          alt="Naspad Studio Logo"
          width={200}
          height={64}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Navigation */}
      <div className="absolute top-[52px] left-1/2 transform -translate-x-1/2 w-[500px] h-[60px] bg-primary rounded-[10px] flex items-center justify-center">
        <div className="flex items-center space-x-8">
          <button
            onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
            className="font-['Montserrat'] font-medium text-[20px] leading-[28px] text-white tracking-[0.1px] hover:text-secondary transition-colors duration-300 cursor-pointer"
          >
            Services
          </button>
          <button className="font-['Montserrat'] font-medium text-[20px] leading-[28px] text-white tracking-[0.1px] hover:text-secondary transition-colors duration-300 cursor-pointer">
            Portfolio
          </button>
          <button
            onClick={() => document.getElementById('talents')?.scrollIntoView({ behavior: 'smooth' })}
            className="font-['Montserrat'] font-medium text-[20px] leading-[28px] text-white tracking-[0.1px] hover:text-secondary transition-colors duration-300 cursor-pointer"
          >
            Team
          </button>
        </div>
      </div>

      {/* Book a Call Button (Top Right) */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="absolute top-[52px] right-[50px] bg-primary px-[27px] py-4 rounded-[10px] flex items-center justify-center cursor-pointer hover:bg-light-navy transition-colors duration-300"
        onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <div className="font-['Montserrat'] font-medium text-[20px] leading-[28px] text-secondary tracking-[0.1px]">
          Book a Call
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        {/* Deploy Faster Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-secondary px-[31px] py-[11px] rounded-[30px] inline-flex items-center justify-center mb-[100px] hover:shadow-lg hover:shadow-secondary/25 transition-all duration-300"
        >
          <div className="font-['Montserrat'] text-[20px] leading-[28px] text-white tracking-[0.1px]">
            <span className="font-medium">Deploy </span>
            <span className="font-semibold">Faster </span>
            <span className="font-medium">and </span>
            <span className="font-semibold">Cheaper</span>
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-['Montserrat'] text-[48px] leading-[56px] tracking-[0.24px] text-white text-center mb-[70px] max-w-[680px]"
        >
          <span className="font-medium">Fueling Your Website Needs </span>
          <span className="font-semibold bg-gradient-to-r from-secondary to-light-cyan bg-clip-text text-transparent">Faster</span>
          <span className="font-medium"> and </span>
          <span className="font-semibold bg-gradient-to-r from-secondary to-light-cyan bg-clip-text text-transparent">Easier</span>
        </motion.div>

        {/* Subtitle */}
        <div className="font-['Montserrat'] font-medium text-[24px] leading-[32px] tracking-[0.12px] text-white mb-[82px]">
          Elevating your digital branding better
        </div>

        {/* Book a Call Button (Main) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(73, 188, 233, 0.3)" }}
          whileTap={{ scale: 0.95 }}
          className="bg-primary px-[25px] py-[9px] rounded-[20px] inline-flex items-center justify-center h-[60px] cursor-pointer hover:bg-light-navy transition-all duration-300"
          onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <div className="font-['Montserrat'] font-medium text-[24px] leading-[32px] text-white tracking-[0.12px]">
            Book a Call
          </div>
        </motion.div>
      </div>
      </div>

      {/* Features Section */}
      <div id="features" className="bg-primary relative w-full min-h-screen py-[75px]" data-name="Features" data-node-id="13:399">
        {/* Features Badge */}
        <div className="absolute top-[75px] right-[50px] bg-light-navy px-[31px] py-[11px] rounded-[30px] inline-flex items-center justify-center">
          <div className="font-['Montserrat'] font-semibold text-[20px] leading-[28px] text-white tracking-[0.1px]">
            Features
          </div>
        </div>

        {/* Feature Cards Container */}
        <div className="flex gap-[40px] px-[50px] pt-[75px]">
          {/* Feature Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(53, 50, 163, 0.3)" }}
            className="bg-light-navy w-[250px] h-[450px] rounded-[30px] relative p-[20px] cursor-pointer transition-all duration-300"
          >
            <div className="font-['Montserrat'] text-[18px] leading-[26px] text-white tracking-[0.09px]">
              /01
            </div>
            <div className="absolute bottom-[150px] left-[20px] w-[50px] h-[50px] bg-white rounded-full"></div>
            <div className="absolute bottom-[30px] left-[20px] right-[20px]">
              <div className="font-['Montserrat'] font-semibold text-[20px] leading-[28px] text-white tracking-[0.1px] mb-[15px]">
                Newbie? Not here.
              </div>
              <div className="font-['Montserrat'] text-[18px] leading-[26px] text-white tracking-[0.09px]">
                Now offering the best of the best at the Academy.
              </div>
            </div>
          </motion.div>

          {/* Feature Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(53, 50, 163, 0.3)" }}
            className="bg-light-navy w-[250px] h-[450px] rounded-[30px] relative p-[20px] cursor-pointer transition-all duration-300"
          >
            <div className="font-['Montserrat'] text-[18px] leading-[26px] text-white tracking-[0.09px]">
              /02
            </div>
            <div className="absolute bottom-[150px] left-[20px] w-[50px] h-[50px] bg-white rounded-full"></div>
            <div className="absolute bottom-[30px] left-[20px] right-[20px]">
              <div className="font-['Montserrat'] font-semibold text-[20px] leading-[28px] text-white tracking-[0.1px] mb-[15px]">
                Newbie? Not here.
              </div>
              <div className="font-['Montserrat'] text-[18px] leading-[26px] text-white tracking-[0.09px]">
                Now offering the best of the best at the Academy.
              </div>
            </div>
          </motion.div>

          {/* Feature Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(53, 50, 163, 0.3)" }}
            className="bg-light-navy w-[250px] h-[450px] rounded-[30px] relative p-[20px] cursor-pointer transition-all duration-300"
          >
            <div className="font-['Montserrat'] text-[18px] leading-[26px] text-white tracking-[0.09px]">
              /03
            </div>
            <div className="absolute bottom-[150px] left-[20px] w-[50px] h-[50px] bg-white rounded-full"></div>
            <div className="absolute bottom-[30px] left-[20px] right-[20px]">
              <div className="font-['Montserrat'] font-semibold text-[20px] leading-[28px] text-white tracking-[0.1px] mb-[15px]">
                Newbie? Not here.
              </div>
              <div className="font-['Montserrat'] text-[18px] leading-[26px] text-white tracking-[0.09px]">
                Now offering the best of the best at the Academy.
              </div>
            </div>
          </motion.div>
        </div>

        {/* Description Text */}
        <div className="absolute right-[50px] top-[175px] w-[400px] font-['Montserrat'] font-medium text-[20px] leading-[28px] text-white tracking-[0.1px]">
          An All-in-One Solution offering <span className="font-semibold">consultation</span>, <span className="font-semibold">design</span> and <span className="font-semibold">build</span> your web for your business needs.
        </div>

        {/* Consult Now Button */}
        <div className="absolute right-[50px] top-[300px] bg-deep-cyan px-[31px] py-[11px] rounded-[30px] inline-flex items-center justify-center">
          <div className="font-['Montserrat'] font-semibold text-[20px] leading-[28px] text-white tracking-[0.1px]">
            Consult Now
          </div>
        </div>
      </div>

      {/* Talents Section */}
      <div id="talents" className="bg-bg-light relative w-full min-h-screen py-[75px]" data-name="Talents" data-node-id="13:426">
        {/* Talents Badge */}
        <div className="absolute top-[75px] left-[50px] bg-light-navy px-[31px] py-[11px] rounded-[30px] inline-flex items-center justify-center">
          <div className="font-['Montserrat'] font-semibold text-[20px] leading-[28px] text-white tracking-[0.1px]">
            Talents
          </div>
        </div>

        {/* Header Text */}
        <div className="absolute left-[50px] top-[155px] font-['Montserrat'] font-medium text-[32px] leading-[40px] text-black tracking-[0.16px]">
          <div className="mb-0">
            Based in <span className="font-semibold">South Tangerang ID</span>,
          </div>
          <div>
            But experts in <span className="font-semibold">World Class Services</span>
          </div>
        </div>

        {/* Talent Cards Container */}
        <div className="flex gap-[40px] px-[50px] pt-[190px]">
          {/* Product Designer Card */}
          <div className="bg-light-cyan w-[650px] h-[650px] rounded-[30px] relative p-[35px]">
            {/* Profile Section */}
            <div className="flex items-center gap-[16px] mb-[130px]">
              <div className="w-[100px] h-[100px] bg-primary rounded-full flex items-center justify-center">
                <div className="font-['Montserrat'] font-semibold text-[32px] leading-[40px] text-white tracking-[0.16px]">
                  logo
                </div>
              </div>
            </div>

            <div className="font-['Montserrat'] font-semibold text-[32px] leading-[40px] text-black tracking-[0.16px] mb-[226px]">
              Product Designer
            </div>

            {/* Description */}
            <div className="font-['Montserrat'] font-medium text-[20px] leading-[28px] text-text-dark tracking-[0.1px] mb-[24px] w-[350px]">
              The Crafters Behind Stunning User-Centric Websites.
            </div>

            {/* Skills/Tools Icons */}
            <div className="flex items-center gap-[16px]">
              <div className="w-[80px] h-[80px] bg-white/30 rounded-full"></div>
              <div className="w-[80px] h-[80px] bg-white/30 rounded-full"></div>
              <div className="w-[80px] h-[80px] bg-white/30 rounded-full"></div>
              <div className="w-[80px] h-[80px] bg-white/30 rounded-full"></div>
              <div className="w-[80px] h-[80px] bg-white rounded-full flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-primary">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Website Developer Card */}
          <div className="bg-light-cyan w-[650px] h-[650px] rounded-[30px] relative p-[35px]">
            {/* Profile Section */}
            <div className="flex items-center gap-[16px] mb-[130px]">
              <div className="w-[100px] h-[100px] bg-primary rounded-full flex items-center justify-center">
                <div className="font-['Montserrat'] font-semibold text-[32px] leading-[40px] text-white tracking-[0.16px]">
                  logo
                </div>
              </div>
            </div>

            <div className="font-['Montserrat'] font-semibold text-[32px] leading-[40px] text-black tracking-[0.16px] mb-[226px]">
              Website Developer
            </div>

            {/* Description */}
            <div className="font-['Montserrat'] font-medium text-[20px] leading-[28px] text-text-dark tracking-[0.1px] mb-[24px] w-[350px]">
              The Crafters Behind Stunning User-Centric Websites.
            </div>

            {/* Skills/Tools Icons */}
            <div className="flex items-center gap-[16px]">
              <div className="w-[80px] h-[80px] bg-white/30 rounded-full"></div>
              <div className="w-[80px] h-[80px] bg-white/30 rounded-full"></div>
              <div className="w-[80px] h-[80px] bg-white/30 rounded-full"></div>
              <div className="w-[80px] h-[80px] bg-white/30 rounded-full"></div>
              <div className="w-[80px] h-[80px] bg-white rounded-full flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-primary">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-black relative w-full min-h-screen py-[50px]" data-name="Footer, Contact and CTA" data-node-id="13:466">
        {/* FAQ Section */}
        <div className="relative px-[50px]">
          {/* FAQ Badge */}
          <div className="absolute top-0 left-[50px] bg-light-navy px-[31px] py-[11px] rounded-[30px] inline-flex items-center justify-center">
            <div className="font-['Montserrat'] font-semibold text-[20px] leading-[28px] text-white tracking-[0.1px]">
              Frequent Questions
            </div>
          </div>

          {/* FAQ Content */}
          <div className="flex gap-[50px] pt-[80px]">
            {/* Left Side - FAQ Text */}
            <div className="w-[530px]">
              <div className="font-['Montserrat'] font-semibold text-[40px] leading-[48px] text-white tracking-[0.2px] mb-[30px]">
                All the question asked we got you covered.
              </div>
              <div className="font-['Montserrat'] font-medium text-[24px] leading-[32px] text-white tracking-[0.12px]">
                From a to z, we are here to help you and grow together with your business.
              </div>
            </div>

            {/* Right Side - FAQ Items */}
            <div className="flex-1 space-y-[20px] max-w-[600px]">
              {faqData.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-light-navy rounded-[20px] overflow-hidden cursor-pointer hover:bg-opacity-90 transition-all duration-300"
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="flex items-center px-[35px] py-[28px]">
                    <motion.div
                      animate={{ rotate: expandedFAQ === index ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-6 h-6 flex items-center justify-center mr-[20px]"
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-white">
                        <path d="M8 3V13M3 8H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </motion.div>
                    <div className="font-['Montserrat'] font-medium text-[20px] leading-[28px] text-white tracking-[0.1px] flex-1">
                      {faq.question}
                    </div>
                  </div>

                  <AnimatePresence>
                    {expandedFAQ === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-[35px] pb-[28px] pl-[75px]">
                          <div className="font-['Montserrat'] font-normal text-[16px] leading-[24px] text-white/80 tracking-[0.08px]">
                            {faq.answer}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div id="cta" className="relative px-[50px] mt-[100px]">
          <div className="bg-primary h-[302px] rounded-[30px] relative flex items-center px-[35px]">
            {/* Left Side - CTA Text */}
            <div className="w-[600px]">
              <div className="font-['Montserrat'] font-semibold text-[32px] leading-[40px] text-white tracking-[0.16px] mb-[40px]">
                So, what's holding you now?
              </div>
              <div className="font-['Montserrat'] font-medium text-[24px] leading-[32px] text-white tracking-[0.12px] mb-[40px]">
                Get one consultation session on us*! And let's get your brand growth!
              </div>
              <div className="bg-deep-cyan px-[31px] py-[11px] rounded-[30px] inline-flex items-center justify-center">
                <div className="font-['Montserrat'] font-semibold text-[20px] leading-[28px] text-white tracking-[0.1px]">
                  Consult Now
                </div>
              </div>
            </div>

            {/* Right Side - Mac Image */}
            <div className="absolute right-[35px] top-[-24px] w-[467px] h-[349px]">
              <div className="w-full h-full bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-lg mx-auto mb-4"></div>
                  <div className="text-sm opacity-60">Mac Studio Preview</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="flex justify-between items-center px-[50px] pt-[50px]">
          <div className="font-['Montserrat'] text-[20px] leading-[28px] text-white tracking-[0.1px]">
            <span className="font-semibold">© 2025 Naspad Studio.</span>
            <span className="font-medium"> Made with Love from Indonesia</span>
          </div>
          <div className="flex gap-[40px] font-['Montserrat'] font-medium text-[20px] leading-[28px] text-white tracking-[0.1px]">
            <div>Linkedin</div>
            <div>Instagram</div>
            <div>Twitter</div>
          </div>
        </div>
      </div>
    </div>
  );
}