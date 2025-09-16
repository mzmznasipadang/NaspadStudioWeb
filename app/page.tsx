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
╚══════════════════════════════════════════════════════════════════════╝`,
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
║                      🚀 BUILDING THE FUTURE                         ║
║                                                                      ║
╚══════════════════════════════════════════════════════════════════════╝`,
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
║                      ⚡ POWERED BY PASSION                          ║
║                                                                      ║
╚══════════════════════════════════════════════════════════════════════╝`,
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
╚══════════════════════════════════════════════════════════════════════╝`
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
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-25">
      {drops.map((drop, i) => (
        <div
          key={i}
          className="absolute text-secondary text-xs font-['Montserrat'] whitespace-pre"
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
          className="text-secondary text-base leading-tight font-['Montserrat'] whitespace-pre-wrap font-bold"
          style={{
            fontFamily: 'Montserrat, sans-serif',
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
      <div className="relative w-full min-h-screen bg-gradient-to-b from-black to-primary overflow-hidden">
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
      <div className="absolute bg-[#272660] box-border content-stretch flex flex-col gap-2.5 items-start justify-start left-1/2 px-20 py-4 rounded-[10px] top-[52px] translate-x-[-50%]" data-node-id="13:391">
        <div className="content-stretch flex font-['Montserrat'] font-medium gap-14 items-center justify-start leading-[0] not-italic relative shrink-0 text-[20px] text-nowrap text-white tracking-[0.1px]" data-node-id="13:392">
          <div className="relative shrink-0" data-node-id="13:394">
            <button
              onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              className="leading-[28px] text-nowrap whitespace-pre hover:text-secondary transition-colors duration-300 cursor-pointer bg-transparent border-none"
            >
              Services
            </button>
          </div>
          <div className="relative shrink-0" data-node-id="13:395">
            <button className="leading-[28px] text-nowrap whitespace-pre hover:text-secondary transition-colors duration-300 cursor-pointer bg-transparent border-none">
              Portfolio
            </button>
          </div>
          <div className="relative shrink-0" data-node-id="13:396">
            <button
              onClick={() => document.getElementById('talents')?.scrollIntoView({ behavior: 'smooth' })}
              className="leading-[28px] text-nowrap whitespace-pre hover:text-secondary transition-colors duration-300 cursor-pointer bg-transparent border-none"
            >
              Team
            </button>
          </div>
          <div className="relative shrink-0" data-node-id="20:21">
            <button className="leading-[28px] text-nowrap whitespace-pre hover:text-secondary transition-colors duration-300 cursor-pointer bg-transparent border-none">
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
        onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <div className="font-['Montserrat'] font-medium text-[20px] leading-[28px] text-secondary tracking-[0.1px]">
          Book a Call
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-center" data-node-id="13:383">
        {/* Deploy Faster Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-[#3aa9d4] box-border flex gap-2.5 items-center justify-center px-[31px] py-[11px] rounded-[30px] hover:shadow-lg hover:shadow-secondary/25 transition-all duration-300 mb-8"
          data-node-id="13:384"
        >
          <div className="font-['Montserrat'] font-medium leading-[0] not-italic relative shrink-0 text-[0px] text-nowrap text-white tracking-[0.1px]" data-node-id="13:385">
            <p className="leading-[28px] text-[20px] whitespace-pre">
              <span>{`Deploy `}</span>
              <span className="font-['Montserrat'] font-semibold not-italic tracking-[0.1px]">{`Faster `}</span>
              <span>{`and `}</span>
              <span className="font-['Montserrat'] font-semibold not-italic tracking-[0.1px]">Cheaper</span>
            </p>
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-['Montserrat'] font-medium leading-[0] not-italic text-[0px] text-center text-white tracking-[0.24px] w-[680px] mb-12"
          data-node-id="13:386"
        >
          <p className="leading-[56px] text-[48px]">
            <span>{`Fueling 🔥 Your Website Needs `}</span>
            <span className="font-['Montserrat'] font-semibold not-italic tracking-[0.24px]">Faster</span>
            <span>{` and `}</span>
            <span className="font-['Montserrat'] font-semibold not-italic tracking-[0.24px]">Easier</span>
          </p>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="font-['Montserrat'] font-medium leading-[0] not-italic text-[24px] text-center text-white tracking-[0.12px] mb-16"
          data-node-id="13:387"
        >
          <p className="leading-[32px] whitespace-pre">Elevating your digital branding better</p>
        </motion.div>

        {/* Book a Call Button (Main) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(73, 188, 233, 0.3)" }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#272660] box-border flex gap-2.5 h-[60px] items-center justify-center px-[25px] py-[9px] rounded-[20px] cursor-pointer hover:bg-light-navy transition-all duration-300 mb-6"
          data-node-id="13:388"
          onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <div className="font-['Montserrat'] font-medium leading-[0] not-italic relative shrink-0 text-[24px] text-nowrap text-white tracking-[0.12px]" data-node-id="13:389">
            <p className="leading-[32px] whitespace-pre">Book a Call</p>
          </div>
        </motion.div>

        {/* First consultation text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="font-['Montserrat'] font-normal leading-[0] not-italic text-[18px] text-center text-white tracking-[0.09px]"
          data-node-id="14:44"
        >
          <p className="leading-[26px] whitespace-pre">First consultation is free.</p>
        </motion.div>
      </div>
      </div>

      {/* Features Section */}
      <div id="features" className="bg-[#272660] relative w-full h-[600px] py-[75px]" data-name="Features" data-node-id="13:399">
        {/* Features Badge */}
        <div className="absolute bg-[#3532a3] box-border content-stretch flex gap-2.5 items-center justify-center px-[31px] py-[11px] rounded-[30px] top-[75px] translate-x-[-50%]" data-node-id="13:400" style={{ left: "calc(50% + 246.5px)" }}>
          <div className="font-['Montserrat'] font-semibold leading-[0] not-italic relative shrink-0 text-[20px] text-nowrap text-white tracking-[0.1px]" data-node-id="13:401">
            <p className="leading-[28px] whitespace-pre">Features</p>
          </div>
        </div>

        {/* Consult Now Button */}
        <div className="absolute bg-[#3aa9d4] box-border content-stretch flex gap-2.5 items-center justify-center px-[31px] py-[11px] rounded-[30px] top-[300px] translate-x-[-50%]" data-node-id="13:402" style={{ left: "calc(50% + 268px)" }}>
          <div className="font-['Montserrat'] font-semibold leading-[0] not-italic relative shrink-0 text-[20px] text-nowrap text-white tracking-[0.1px]" data-node-id="13:403">
            <p className="leading-[28px] whitespace-pre">Consult Now</p>
          </div>
        </div>

        {/* Feature Card 1 - Professional Service */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(53, 50, 163, 0.3)" }}
          className="absolute left-[50px] top-[75px] w-[250px] h-[450px] bg-[#3532a3] rounded-[30px] cursor-pointer transition-all duration-300 p-[20px] flex flex-col"
          data-node-id="13:404"
        >
          <div className="font-['Montserrat'] font-normal text-[#49bce9] text-[18px] leading-[26px] tracking-[0.09px] mb-[30px]" data-node-id="13:406">
            /01
          </div>

          <div className="flex-1 flex flex-col justify-between">
            <div className="size-[50px] mb-[20px]" data-node-id="21:36">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 50">
                <g id="Group 27">
                  <circle cx="25" cy="25" fill="#FEFEFE" id="Ellipse 1" r="25" />
                  <g id="IconVibeCodingStar">
                    <path d="M31.7757 14.5343C31.7467 14.2776 31.5297 14.0836 31.2714 14.0833C31.013 14.0831 30.7956 14.2766 30.766 14.5332C30.5813 16.1353 29.677 17.0396 28.0749 17.2244C27.8183 17.254 27.6247 17.4714 27.625 17.7297C27.6253 17.988 27.8193 18.205 28.0759 18.2341C29.6553 18.413 30.6223 19.3085 30.7647 20.9118C30.788 21.1742 31.008 21.3753 31.2714 21.375C31.5348 21.3747 31.7544 21.1731 31.7771 20.9107C31.9139 19.33 32.8717 18.3722 34.4524 18.2354C34.7148 18.2127 34.9164 17.9932 34.9167 17.7297C34.917 17.4663 34.7159 17.2463 34.4535 17.223C32.8502 17.0806 31.9546 16.1137 31.7757 14.5343Z" fill="#3532A3" id="Vector" />
                    <path d="M21.1146 23.4583C23.1281 23.4583 24.7604 21.826 24.7604 19.8125C24.7604 17.799 23.1281 16.1667 21.1146 16.1667C19.101 16.1667 17.4688 17.799 17.4688 19.8125C17.4688 21.826 19.101 23.4583 21.1146 23.4583Z" id="Vector_2" stroke="#3532A3" strokeWidth="2" />
                    <path d="M14.0833 32.8333C14.0833 29.3816 16.8816 26.5833 20.3333 26.5833H20.8542" id="Vector_3" stroke="#3532A3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    <path d="M23.4583 32.8333L25.2179 26.6749C25.4096 26.0042 26.0226 25.5417 26.7203 25.5417H33.3976C34.1589 25.5417 34.7084 26.2703 34.4994 27.0023L33.0492 32.0778C32.9215 32.525 32.5127 32.8333 32.0476 32.8333H23.4583ZM23.4583 32.8333H19.2917" id="Vector_4" stroke="#3532A3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </g>
                </g>
              </svg>
            </div>

            <div className="mt-auto">
              <div className="font-['Montserrat'] font-semibold text-[20px] text-white leading-[28px] tracking-[0.1px] mb-[15px]" data-node-id="13:409">
                Professional Service
              </div>
              <div className="font-['Montserrat'] font-normal text-[18px] text-white leading-[26px] tracking-[0.09px]" data-node-id="13:410">
                Now offering the best of the best at the Academy.
              </div>
            </div>
          </div>
        </motion.div>

        {/* Feature Card 2 - Collaboration */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(53, 50, 163, 0.3)" }}
          className="absolute left-[320px] top-[75px] w-[250px] h-[450px] bg-[#3532a3] rounded-[30px] cursor-pointer transition-all duration-300 p-[20px] flex flex-col"
          data-node-id="13:411"
        >
          <div className="font-['Montserrat'] font-normal text-[#49bce9] text-[18px] leading-[26px] tracking-[0.09px] mb-[30px]" data-node-id="13:413">
            /02
          </div>

          <div className="flex-1 flex flex-col justify-between">
            <div className="size-[50px] mb-[20px] relative" data-node-id="13:415">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 50">
                <circle cx="25" cy="25" fill="#FEFEFE" id="Ellipse 1" r="25" />
              </svg>
              <div className="absolute left-[12px] size-[25px] top-[12px]" data-name="IconBezierCircle" data-node-id="21:39">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
                  <g id="IconBezierCircle">
                    <path d="M9.89583 5.68711C7.96357 6.42615 6.42615 7.96357 5.68711 9.89583M15.1042 5.68711C17.0365 6.42615 18.5739 7.96357 19.3129 9.89583M5.68711 15.1042C6.42615 17.0365 7.96357 18.5739 9.89583 19.3129M15.1042 19.3129C17.0365 18.5739 18.5739 17.0365 19.3129 15.1042M4.16667 14.5833H6.25C6.82529 14.5833 7.29167 14.117 7.29167 13.5417V11.4583C7.29167 10.883 6.82529 10.4167 6.25 10.4167H4.16667C3.59137 10.4167 3.125 10.883 3.125 11.4583V13.5417C3.125 14.117 3.59137 14.5833 4.16667 14.5833ZM14.5833 6.25V4.16667C14.5833 3.59137 14.117 3.125 13.5417 3.125H11.4583C10.883 3.125 10.4167 3.59137 10.4167 4.16667V6.25C10.4167 6.82529 10.883 7.29167 11.4583 7.29167H13.5417C14.117 7.29167 14.5833 6.82529 14.5833 6.25ZM17.7083 13.5417V11.4583C17.7083 10.883 18.1747 10.4167 18.75 10.4167H20.8333C21.4086 10.4167 21.875 10.883 21.875 11.4583V13.5417C21.875 14.117 21.4086 14.5833 20.8333 14.5833H18.75C18.1747 14.5833 17.7083 14.117 17.7083 13.5417ZM14.5833 20.8333V18.75C14.5833 18.1747 14.117 17.7083 13.5417 17.7083H11.4583C10.883 17.7083 10.4167 18.1747 10.4167 18.75V20.8333C10.4167 21.4086 10.883 21.875 11.4583 21.875H13.5417C14.117 21.875 14.5833 21.4086 14.5833 20.8333Z" id="Vector" stroke="#3532A3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </g>
                </svg>
              </div>
            </div>

            <div className="mt-auto">
              <div className="font-['Montserrat'] font-semibold text-[20px] text-white leading-[28px] tracking-[0.1px] mb-[15px]" data-node-id="13:416">
                Collaboration
              </div>
              <div className="font-['Montserrat'] font-normal text-[18px] text-white leading-[26px] tracking-[0.09px]" data-node-id="13:417">
                Continuous collaboration for faster deployment
              </div>
            </div>
          </div>
        </motion.div>

        {/* Feature Card 3 - World Class Service */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(53, 50, 163, 0.3)" }}
          className="absolute left-[590px] top-[75px] w-[250px] h-[450px] bg-[#3532a3] rounded-[30px] cursor-pointer transition-all duration-300 p-[20px] flex flex-col"
          data-node-id="13:418"
        >
          <div className="font-['Montserrat'] font-normal text-[#49bce9] text-[18px] leading-[26px] tracking-[0.09px] mb-[30px]" data-node-id="13:420">
            /03
          </div>

          <div className="flex-1 flex flex-col justify-between">
            <div className="size-[50px] mb-[20px] relative" data-node-id="13:422">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 50">
                <circle cx="25" cy="25" fill="#FEFEFE" id="Ellipse 1" r="25" />
              </svg>
              <div className="absolute left-[12px] size-[25px] top-[12px]" data-name="IconEarth" data-node-id="21:44">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
                  <g id="IconEarth">
                    <path d="M4.34537 8.40636L7.13945 10.5034C7.82203 11.0158 8.80182 10.7862 9.18579 10.024C9.3648 9.66869 9.68942 9.4087 10.0753 9.31163L12.3393 8.74209C13.0642 8.55973 13.6299 7.99321 13.8111 7.26804L14.7146 3.65502M21.875 12.5C21.875 17.6777 17.6777 21.875 12.5 21.875C7.32233 21.875 3.125 17.6777 3.125 12.5C3.125 7.32233 7.32233 3.125 12.5 3.125C17.6777 3.125 21.875 7.32233 21.875 12.5ZM11.9012 16.665L11.0441 15.3793C10.7139 14.884 10.7798 14.2243 11.2016 13.8041C11.4548 13.5517 11.8044 13.4202 12.1612 13.4429L13.0224 13.4979C13.3805 13.5207 13.7261 13.6382 14.024 13.8383L15.4523 14.7982C16.084 15.2227 16.3022 16.0503 15.9618 16.731C15.7054 17.2437 15.1815 17.5676 14.6082 17.5676H13.5878C12.9101 17.5676 12.2772 17.2289 11.9012 16.665Z" id="Vector" stroke="#3532A3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </g>
                </svg>
              </div>
            </div>

            <div className="mt-auto">
              <div className="font-['Montserrat'] font-semibold text-[20px] text-white leading-[28px] tracking-[0.1px] mb-[15px]" data-node-id="13:423">
                World Class Service
              </div>
              <div className="font-['Montserrat'] font-normal text-[18px] text-white leading-[26px] tracking-[0.09px]" data-node-id="13:424">
                We are aiming to deliver a world-class services
              </div>
            </div>
          </div>
        </motion.div>

        {/* Description Text */}
        <div className="absolute font-['Montserrat'] font-medium leading-[0] left-[890px] not-italic text-[0px] text-white top-[175px] tracking-[0.1px] w-[400px]" data-node-id="13:425">
          <p className="leading-[28px] text-[20px]">
            <span>{`An All-in-One Solution offering `}</span>
            <span className="font-['Montserrat'] font-semibold not-italic tracking-[0.1px]">consultation</span>
            <span>{`, `}</span>
            <span className="font-['Montserrat'] font-semibold not-italic tracking-[0.1px]">design</span>
            <span>{` and `}</span>
            <span className="font-['Montserrat'] font-semibold not-italic tracking-[0.1px]">build</span>
            <span>{` your web for your business needs.`}</span>
          </p>
        </div>
      </div>

      {/* Talents Section */}
      <div id="talents" className="bg-[#49bce9] relative w-full min-h-screen py-[75px]" data-name="Talents" data-node-id="13:426">
        {/* Talents Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute bg-[#3532a3] flex items-center justify-center px-[31px] py-[11px] rounded-[30px] top-[75px] left-[75px]"
          data-node-id="13:427"
        >
          <div className="font-['Montserrat'] font-semibold text-[20px] leading-[28px] text-white tracking-[0.1px]" data-node-id="13:428">
            Talents
          </div>
        </motion.div>

        {/* Header Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="absolute left-[75px] top-[155px] font-['Montserrat'] text-[32px] leading-[40px] text-black tracking-[0.16px]"
          data-node-id="13:429"
        >
          <div className="mb-0">
            Based in <span className="font-bold">South Tangerang ID</span>,
          </div>
          <div>
            But experts in <span className="font-bold">World Class Services</span>
          </div>
        </motion.div>

        {/* Talent Cards Container */}
        <div className="flex justify-center gap-[40px] pt-[250px] px-[75px]" data-node-id="19:120">
          {/* Product Designer Card */}
          <motion.div
            initial={{ opacity: 0, y: 50, rotateY: -15 }}
            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
            whileHover={{
              y: -20,
              rotateY: 5,
              boxShadow: "0 25px 50px rgba(0,0,0,0.15)"
            }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-[#fefefe] w-[650px] h-[400px] rounded-[30px] cursor-pointer relative p-[35px]"
            data-node-id="13:430"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Profile Icon */}
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="absolute left-[35px] top-[35px] size-[100px]"
              data-node-id="13:433"
            >
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 100">
                <g id="Group 13">
                  <circle cx="50" cy="50" fill="#272660" id="Ellipse 2" r="50" />
                  <g id="IconPaintBrush">
                    <path d="M64.5833 50V33.3333C64.5833 32.1828 63.6506 31.25 62.5 31.25H48.9583L45.8333 35.4167L42.7083 31.25H37.5C36.3494 31.25 35.4167 32.1827 35.4167 33.3333V50C35.4167 52.3013 37.2821 54.1667 39.5833 54.1667H44.7917L44.1658 63.5554C43.9408 66.9304 46.6175 69.7917 50 69.7917C53.3825 69.7917 56.0592 66.9304 55.8342 63.5554L55.2083 54.1667H60.4167C62.7179 54.1667 64.5833 52.3013 64.5833 50Z" id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    <path d="M35.4167 45.8333H64.5833" id="Vector_2" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </g>
                </g>
              </svg>
            </motion.div>

            {/* Title and Description */}
            <div className="absolute left-[35px] top-[160px]" data-node-id="19:80">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="font-['Montserrat'] font-semibold text-[24px] leading-[32px] text-black tracking-[0.12px] mb-[10px]"
                data-node-id="13:436"
              >
                Product Designer
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="font-['Montserrat'] text-[18px] leading-[26px] text-[#111111] tracking-[0.09px] w-[350px]"
                data-node-id="19:78"
              >
                The Crafters Behind Stunning User-Centric Websites.
              </motion.div>
            </div>

            {/* Team Photos and Arrow */}
            <div className="absolute bottom-[35px] left-[35px] right-[35px] flex items-center justify-between" data-node-id="13:437">
              <div className="flex items-center gap-[10px]">
                {/* Team member photos */}
                <motion.div
                  whileHover={{ scale: 1.1, zIndex: 10 }}
                  className="size-20 relative"
                  data-node-id="13:440"
                >
                  <Image
                    src="/team/dev1.jpg"
                    alt="Product Designer"
                    width={80}
                    height={80}
                    className="w-full h-full object-cover rounded-full border-2 border-white shadow-lg"
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1, zIndex: 10 }}
                  className="size-20 relative"
                  data-node-id="13:441"
                >
                  <Image
                    src="/team/designer2.jpg"
                    alt="Product Designer"
                    width={80}
                    height={80}
                    className="w-full h-full object-cover rounded-full border-2 border-white shadow-lg"
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1, zIndex: 10 }}
                  className="size-20 relative"
                  data-node-id="13:442"
                >
                  <Image
                    src="/team/designer3.jpg"
                    alt="Product Designer"
                    width={80}
                    height={80}
                    className="w-full h-full object-cover rounded-full border-2 border-white shadow-lg"
                  />
                </motion.div>
              </div>

              {/* Arrow button */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 15 }}
                whileTap={{ scale: 0.9 }}
                className="size-20 cursor-pointer"
                data-node-id="13:444"
              >
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
                  <g id="Group 15">
                    <circle cx="40" cy="40" fill="#1E1D4D" id="Ellipse 7" r="40" />
                    <g id="IconArrowUpRight">
                      <path d="M50.4167 45.4167V29.5833M50.4167 29.5833H34.5833M50.4167 29.5833L30 50" id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    </g>
                  </g>
                </svg>
              </motion.div>
            </div>
          </motion.div>

          {/* Website Developer Card */}
          <motion.div
            initial={{ opacity: 0, y: 50, rotateY: 15 }}
            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
            whileHover={{
              y: -20,
              rotateY: -5,
              boxShadow: "0 25px 50px rgba(0,0,0,0.15)"
            }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#fefefe] w-[650px] h-[400px] rounded-[30px] cursor-pointer relative p-[35px]"
            data-node-id="19:82"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Profile Icon */}
            <motion.div
              whileHover={{ scale: 1.1, rotate: -5 }}
              className="absolute left-[35px] top-[35px] size-[100px]"
              data-node-id="19:85"
            >
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 100">
                <g id="Group 13">
                  <circle cx="50" cy="50" fill="#272660" id="Ellipse 2" r="50" />
                  <g id="IconCodeBrackets">
                    <path d="M45.8333 66.6667L54.1667 33.3333M62.5 41.6667L67.8871 47.0537C69.5142 48.681 69.5142 51.3192 67.8871 52.9465L62.5 58.3333M37.5 58.3333L32.1129 52.9465C30.4858 51.3192 30.4858 48.681 32.1129 47.0537L37.5 41.6667" id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </g>
                </g>
              </svg>
            </motion.div>

            {/* Title and Description */}
            <div className="absolute left-[35px] top-[160px]" data-node-id="19:90">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="font-['Montserrat'] font-semibold text-[24px] leading-[32px] text-black tracking-[0.12px] mb-[10px]"
                data-node-id="19:91"
              >
                Website Developer
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="font-['Montserrat'] text-[18px] leading-[26px] text-[#111111] tracking-[0.09px] w-[350px]"
                data-node-id="19:92"
              >
                The Master-Mind that Bending The Codes
              </motion.div>
            </div>

            {/* Team Photos and Arrow */}
            <div className="absolute bottom-[35px] left-[35px] right-[35px] flex items-center justify-between" data-node-id="19:93">
              <div className="flex items-center gap-[10px]">
                {/* Team member photos */}
                <motion.div
                  whileHover={{ scale: 1.1, zIndex: 10 }}
                  className="size-20 relative"
                  data-node-id="19:95"
                >
                  <Image
                    src="/team/dev1.jpg"
                    alt="Website Developer"
                    width={80}
                    height={80}
                    className="w-full h-full object-cover rounded-full border-2 border-white shadow-lg"
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1, zIndex: 10 }}
                  className="size-20 relative"
                  data-node-id="19:110"
                >
                  <Image
                    src="/team/dev2.jpg"
                    alt="Website Developer"
                    width={80}
                    height={80}
                    className="w-full h-full object-cover rounded-full border-2 border-white shadow-lg"
                  />
                </motion.div>

                {/* Team member icon */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="size-20 relative"
                  data-node-id="19:111"
                >
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
                    <circle cx="40" cy="40" fill="#1E1D4D" id="Ellipse 9" r="40" />
                  </svg>
                  <div className="absolute left-[20px] size-10 top-[20px]" data-name="IconPeople" data-node-id="19:116">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
                      <g id="IconPeople">
                        <path d="M25.8352 10.8333C25.8352 14.055 23.2235 16.6667 20.0018 16.6667C16.7802 16.6667 14.1685 14.055 14.1685 10.8333C14.1685 7.61167 16.7802 5 20.0018 5C23.2235 5 25.8352 7.61167 25.8352 10.8333Z" id="Vector" stroke="white" strokeLinejoin="round" strokeWidth="2" />
                        <path d="M20.0018 21.6667C14.3499 21.6667 10.0619 25.0238 8.306 29.7715C7.62467 31.6137 9.19907 33.3333 11.1633 33.3333H28.8405C30.8047 33.3333 32.379 31.6137 31.6977 29.7715C29.9418 25.0238 25.6538 21.6667 20.0018 21.6667Z" id="Vector_2" stroke="white" strokeLinejoin="round" strokeWidth="2" />
                      </g>
                    </svg>
                  </div>
                </motion.div>
              </div>

              {/* Arrow button */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 15 }}
                whileTap={{ scale: 0.9 }}
                className="size-20 cursor-pointer"
                data-node-id="19:100"
              >
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
                  <g id="Group 15">
                    <circle cx="40" cy="40" fill="#1E1D4D" id="Ellipse 7" r="40" />
                    <g id="IconArrowUpRight">
                      <path d="M50.4167 45.4167V29.5833M50.4167 29.5833H34.5833M50.4167 29.5833L30 50" id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    </g>
                  </g>
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-black relative w-full min-h-screen py-[50px]" data-name="Footer, Contact and CTA" data-node-id="13:466">
        <div className="container mx-auto px-[50px] relative h-full">
          {/* FAQ Section */}
          <div className="relative">
            {/* FAQ Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center justify-center bg-[#3532a3] px-[31px] py-[11px] rounded-[30px] mb-[80px]"
            >
              <span className="font-['Montserrat'] font-semibold text-[20px] leading-[28px] text-white tracking-[0.1px]">
                Frequent Questions
              </span>
            </motion.div>

            {/* FAQ Content */}
            <div className="flex gap-[260px] mb-[140px]">
              {/* Left Side - FAQ Text */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex-shrink-0 w-[480px]"
              >
                <h2 className="font-['Montserrat'] font-semibold text-[40px] leading-[48px] text-white tracking-[0.2px] mb-[30px]">
                  All the question asked we got you covered.
                </h2>
                <p className="font-['Montserrat'] font-medium text-[24px] leading-[32px] text-white tracking-[0.12px]">
                  From a to z, we are here to help you and grow together with your business.
                </p>
              </motion.div>

              {/* Right Side - FAQ Questions */}
              <div className="flex-1 space-y-[30px]">
                {faqData.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="bg-[#3532a3] rounded-[20px] overflow-hidden cursor-pointer transition-all duration-300"
                    onClick={() => toggleFAQ(index)}
                  >
                    <div className="flex items-center px-[35px] py-[24px]">
                      <motion.div
                        animate={{ rotate: expandedFAQ === index ? 45 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="w-6 h-6 flex items-center justify-center mr-[20px]"
                      >
                        <svg width="20" height="20" viewBox="0 0 36 36" fill="none" className="text-white">
                          <path
                            d="M17.6667 1V17.6667M17.6667 17.6667V34.3333M17.6667 17.6667H1M17.6667 17.6667H34.3333"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeWidth="2"
                          />
                        </svg>
                      </motion.div>
                      <span className="font-['Montserrat'] font-medium text-[24px] leading-[32px] text-white tracking-[0.12px] flex-1">
                        {faq.question}
                      </span>
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
                          <div className="px-[35px] pb-[24px] pl-[75px]">
                            <p className="font-['Montserrat'] font-normal text-[16px] leading-[24px] text-white/80 tracking-[0.08px]">
                              {faq.answer}
                            </p>
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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            id="cta"
            className="bg-[#272660] rounded-[30px] relative p-[35px] mb-[50px] overflow-hidden"
          >
            <div className="flex items-center justify-between">
              {/* Left Side - CTA Text */}
              <div className="flex-1 max-w-[600px]">
                <h2 className="font-['Montserrat'] font-semibold text-[32px] leading-[40px] text-white tracking-[0.16px] mb-[20px]">
                  So, what's holding you now?
                </h2>
                <p className="font-['Montserrat'] font-medium text-[24px] leading-[32px] text-white tracking-[0.12px] mb-[10px]">
                  Get one consultation session on us*! And let's get your brand growth!
                </p>
                <p className="font-['Montserrat'] text-[12px] leading-[26px] text-white tracking-[0.06px] mb-[30px]">
                  *Terms and Condition Applied.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#3aa9d4] px-[31px] py-[11px] rounded-[30px] font-['Montserrat'] font-semibold text-[20px] leading-[28px] text-white tracking-[0.1px] transition-all duration-300"
                  onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Consult Now
                </motion.button>
              </div>

              {/* Right Side - Mac Image */}
              <div className="flex-shrink-0 ml-[50px]">
                <Image
                  src="/macstudio.png"
                  alt="Mac Studio"
                  width={400}
                  height={280}
                  className="w-[400px] h-[280px] object-cover rounded-lg"
                />
              </div>
            </div>
          </motion.div>

          {/* Footer Links */}
          <div className="flex justify-between items-center">
            <div className="font-['Montserrat'] text-[20px] leading-[28px] text-white tracking-[0.1px]">
              <span className="font-semibold">© 2025 Naspad Studio. </span>
              <span className="font-medium">Made with Love from Indonesia</span>
            </div>
            <div className="flex gap-[40px] font-['Montserrat'] font-medium text-[20px] leading-[28px] text-white tracking-[0.1px]">
              <a href="#" className="hover:text-secondary transition-colors duration-300">Linkedin</a>
              <a href="#" className="hover:text-secondary transition-colors duration-300">Instagram</a>
              <a href="#" className="hover:text-secondary transition-colors duration-300">Twitter</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}