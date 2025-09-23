'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const imgNaspadIconlogoVer11 = "/logo.svg";

export default function Career() {
  return (
    <div className="bg-white relative min-h-screen" data-name="Career" data-node-id="90:503">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-black from-[33.203%] to-primary min-h-screen w-full overflow-clip" data-name="Career" data-node-id="90:505">
        <Navbar activeTab="career" />

        {/* Main Hero Content */}
        <div className="flex flex-col items-center justify-center min-h-screen pt-[200px] pb-[100px]" data-node-id="90:517">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-medium leading-[0] text-[0px] text-center text-white tracking-[0.24px] w-[680px]"
            data-node-id="90:518"
          >
            <p className="leading-[56px] mb-0 text-[48px]">{`For those who needs a `}</p>
            <p className="leading-[56px] text-[48px]">
              <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-medium underline">nasi padang*</span>
              <span>{` at work.`}</span>
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="font-medium leading-[32px] text-[24px] text-center text-white tracking-[0.12px] mt-[52px]"
            data-node-id="90:519"
          >
            The home of the world-class developer and designer
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary box-border content-stretch flex gap-2.5 h-[60px] items-center justify-center px-[25px] py-[9px] rounded-[20px] mt-[82px] mx-auto w-fit cursor-pointer hover:bg-light-navy transition-all duration-300"
            data-node-id="90:520"
          >
            <p className="font-medium leading-[32px] text-[24px] text-white tracking-[0.12px]" data-node-id="90:521">
              Job Opening
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="font-normal leading-[26px] text-[18px] text-center text-white tracking-[0.09px] mt-[80px]"
            data-node-id="90:581"
          >
            *Nasi Bungkus for life, but please bring your own.
          </motion.p>
        </div>
      </div>

      {/* Why Join Us Section */}
      <div className="bg-primary py-[50px] w-full" data-name="Why Join Us?" data-node-id="90:522">
        <div className="container mx-auto px-[50px] flex items-center justify-between">
          {/* Left Content */}
          <div className="flex flex-col max-w-[600px]">
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="font-medium leading-[56px] text-[48px] text-white tracking-[0.24px] mb-[32px]"
              data-node-id="90:523"
            >
              <span>{`Join `}</span>
              <span className="font-semibold">Naspad Studio</span>
              <span>{` team! `}</span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-medium leading-[32px] text-[24px] text-white tracking-[0.12px]"
              data-node-id="90:524"
            >
              Why Naspad Studio? Other than we are embracing our culture in Indonesia, we love doing collaboration together, with hybrid workplace and happiness is key, we are sure we can grow together.
            </motion.p>
          </div>

          {/* Right Content - Features */}
          <div className="flex flex-col gap-[30px]">
            {/* Feature 1 - Hybrid Workplace */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="relative cursor-pointer"
              data-node-id="90:525"
            >
              <div className="bg-deep-cyan h-[100px] rounded-[20px] w-[500px]" data-node-id="90:526" />
              <div className="absolute bg-light-navy left-0 rounded-[20px] size-[100px] top-0" data-node-id="90:527" />
              <p className="absolute font-medium leading-[48px] left-[42px] text-[40px] text-white top-[26px] tracking-[0.2px]" data-node-id="90:528">
                1
              </p>
              <p className="absolute font-medium leading-[40px] left-[130px] text-[32px] text-white top-[30px] tracking-[0.16px]" data-node-id="90:529">
                Hybrid Workplace
              </p>
            </motion.div>

            {/* Feature 2 - Collaboration First */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="relative cursor-pointer"
              data-node-id="90:530"
            >
              <div className="bg-deep-cyan h-[100px] rounded-[20px] w-[500px]" data-node-id="90:531" />
              <div className="absolute bg-light-navy left-0 rounded-[20px] size-[100px] top-0" data-node-id="90:532" />
              <p className="absolute font-medium leading-[48px] left-[38px] text-[40px] text-white top-[26px] tracking-[0.2px]" data-node-id="90:533">
                2
              </p>
              <p className="absolute font-medium leading-[40px] left-[130px] text-[32px] text-white top-[30px] tracking-[0.16px]" data-node-id="90:534">
                Collaboration First
              </p>
            </motion.div>

            {/* Feature 3 - Happiness is Key */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
              className="relative cursor-pointer"
              data-node-id="90:535"
            >
              <div className="bg-deep-cyan h-[100px] rounded-[20px] w-[500px]" data-node-id="90:536" />
              <div className="absolute bg-light-navy left-0 rounded-[20px] size-[100px] top-0" data-node-id="90:537" />
              <p className="absolute font-medium leading-[48px] left-[38px] text-[40px] text-white top-[26px] tracking-[0.2px]" data-node-id="90:538">
                3
              </p>
              <p className="absolute font-medium leading-[40px] left-[130px] text-[32px] text-white top-[30px] tracking-[0.16px]" data-node-id="90:539">
                <span>{`Happiness is `}</span>
                <span className="font-semibold">Key</span>
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Available Positions Section */}
      <div className="bg-light-navy py-[50px] w-full" data-name="Available Positions" data-node-id="90:618">
        <div className="container mx-auto px-[50px] text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-medium leading-[56px] text-[48px] text-white tracking-[0.24px] mb-[113px]"
            data-node-id="90:619"
          >
            Available Positions
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
            data-node-id="90:620"
          >
            <div className="bg-primary h-[200px] rounded-[20px] w-[400px] border-2 border-deep-cyan flex flex-col items-center justify-center" data-node-id="90:621">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="font-medium leading-[48px] text-[40px] text-white tracking-[0.2px] mb-4"
                data-node-id="90:622"
              >
                Stay Tuned!
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="font-medium leading-[32px] text-[24px] text-center text-white tracking-[0.12px] w-[300px]"
                data-node-id="90:623"
              >
                <p className="mb-0">{`We're currently building `}</p>
                <p>our team!</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* About Naspad Studio Section */}
      <div className="bg-primary py-[50px] w-full" data-name="About Naspad Studio" data-node-id="90:565">
        <div className="container mx-auto px-[50px]">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-medium leading-[56px] text-[48px] text-white tracking-[0.24px] text-center mb-[82px]"
            data-node-id="90:566"
          >
            About Us
          </motion.p>

          <div className="flex items-center justify-center gap-[30px]" data-node-id="90:567">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-[500px] h-[161px] flex items-center justify-center"
              data-name="Naspad iconlogo ver1 1"
              data-node-id="90:568"
            >
              <Image
                src={imgNaspadIconlogoVer11}
                alt="Naspad Studio Logo"
                width={500}
                height={161}
                className="w-full h-full object-contain"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="font-medium leading-[32px] text-[24px] text-white tracking-[0.12px] w-[600px]"
              data-node-id="90:569"
            >
              {`PT. Naspad Studio Digital (Naspad Studio) is  a South Tangerang Software Houses founded in 2023, with mission is to helps company with their website needs. We're just starting our journey, but our team not! `}
            </motion.p>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-primary py-[75px] w-full" data-name="Footer" data-node-id="90:570">
        <div className="container mx-auto px-[50px]" data-node-id="90:571">
          <Footer />
        </div>
      </div>
    </div>
  );
}