'use client'

export default function Footer() {
  return (
    <div className="flex justify-between items-center">
      <div className="font-['Montserrat'] text-[20px] leading-[28px] text-white tracking-[0.1px]">
        <span className="font-semibold">© 2025 Naspad Studio. </span>
        <span className="font-medium">Made with Love from Indonesia</span>
      </div>
      <div className="flex gap-[40px] font-['Montserrat'] font-medium text-[20px] leading-[28px] text-white tracking-[0.1px]">
        <a href="https://www.linkedin.com/company/naspad-studio/" className="hover:text-secondary transition-colors duration-300">Linkedin</a>
        <a href="https://www.instagram.com/naspadstudio/" className="hover:text-secondary transition-colors duration-300">Instagram</a>
        <a href="https://twitter.com/naspadstudio" className="hover:text-secondary transition-colors duration-300">Twitter</a>
      </div>
    </div>
  )
}