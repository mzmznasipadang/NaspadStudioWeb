import Image from 'next/image'

const imgNaspadIconlogoVer11 = "/logo.svg";

export default function Homepage() {
  return (
    <div className="bg-black relative w-full" data-name="Homepage" data-node-id="13:382">
      {/* Hero Section */}
      <div className="relative w-full min-h-screen bg-black">
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
          <div className="font-['Montserrat'] font-medium text-[20px] leading-[28px] text-white tracking-[0.1px]">
            Services
          </div>
          <div className="font-['Montserrat'] font-medium text-[20px] leading-[28px] text-white tracking-[0.1px]">
            Portfolio
          </div>
          <div className="font-['Montserrat'] font-medium text-[20px] leading-[28px] text-white tracking-[0.1px]">
            Team
          </div>
        </div>
      </div>

      {/* Book a Call Button (Top Right) */}
      <div className="absolute top-[52px] right-[50px] bg-primary px-[27px] py-4 rounded-[10px] flex items-center justify-center">
        <div className="font-['Montserrat'] font-medium text-[20px] leading-[28px] text-secondary tracking-[0.1px]">
          Book a Call
        </div>
      </div>

      {/* Main Content */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        {/* Deploy Faster Badge */}
        <div className="bg-secondary px-[31px] py-[11px] rounded-[30px] inline-flex items-center justify-center mb-[100px]">
          <div className="font-['Montserrat'] text-[20px] leading-[28px] text-white tracking-[0.1px]">
            <span className="font-medium">Deploy </span>
            <span className="font-semibold">Faster </span>
            <span className="font-medium">and </span>
            <span className="font-semibold">Cheaper</span>
          </div>
        </div>

        {/* Main Heading */}
        <div className="font-['Montserrat'] text-[48px] leading-[56px] tracking-[0.24px] text-white text-center mb-[70px] max-w-[680px]">
          <span className="font-medium">Fueling Your Website Needs </span>
          <span className="font-semibold">Faster</span>
          <span className="font-medium"> and </span>
          <span className="font-semibold">Easier</span>
        </div>

        {/* Subtitle */}
        <div className="font-['Montserrat'] font-medium text-[24px] leading-[32px] tracking-[0.12px] text-white mb-[82px]">
          Elevating your digital branding better
        </div>

        {/* Book a Call Button (Main) */}
        <div className="bg-primary px-[25px] py-[9px] rounded-[20px] inline-flex items-center justify-center h-[60px]">
          <div className="font-['Montserrat'] font-medium text-[24px] leading-[32px] text-white tracking-[0.12px]">
            Book a Call
          </div>
        </div>
      </div>
      </div>

      {/* Features Section */}
      <div className="bg-primary relative w-full min-h-screen py-[75px]" data-name="Features" data-node-id="13:399">
        {/* Features Badge */}
        <div className="absolute top-[75px] right-[50px] bg-light-navy px-[31px] py-[11px] rounded-[30px] inline-flex items-center justify-center">
          <div className="font-['Montserrat'] font-semibold text-[20px] leading-[28px] text-white tracking-[0.1px]">
            Features
          </div>
        </div>

        {/* Feature Cards Container */}
        <div className="flex gap-[50px] px-[50px] pt-[75px]">
          {/* Feature Card 1 */}
          <div className="bg-light-navy w-[250px] h-[450px] rounded-[30px] relative p-[20px]">
            <div className="font-['Montserrat'] text-[18px] leading-[26px] text-white tracking-[0.09px] mb-[200px]">
              /01
            </div>
            <div className="absolute bottom-[80px] left-[20px] w-[50px] h-[50px] bg-white rounded-full"></div>
            <div className="absolute bottom-[30px] left-[20px] right-[20px]">
              <div className="font-['Montserrat'] font-semibold text-[20px] leading-[28px] text-white tracking-[0.1px] mb-[15px]">
                Newbie? Not here.
              </div>
              <div className="font-['Montserrat'] text-[18px] leading-[26px] text-white tracking-[0.09px]">
                Now offering the best of the best at the Academy.
              </div>
            </div>
          </div>

          {/* Feature Card 2 */}
          <div className="bg-light-navy w-[250px] h-[450px] rounded-[30px] relative p-[20px]">
            <div className="font-['Montserrat'] text-[18px] leading-[26px] text-white tracking-[0.09px] mb-[200px]">
              /02
            </div>
            <div className="absolute bottom-[80px] left-[20px] w-[50px] h-[50px] bg-white rounded-full"></div>
            <div className="absolute bottom-[30px] left-[20px] right-[20px]">
              <div className="font-['Montserrat'] font-semibold text-[20px] leading-[28px] text-white tracking-[0.1px] mb-[15px]">
                Newbie? Not here.
              </div>
              <div className="font-['Montserrat'] text-[18px] leading-[26px] text-white tracking-[0.09px]">
                Now offering the best of the best at the Academy.
              </div>
            </div>
          </div>

          {/* Feature Card 3 */}
          <div className="bg-light-navy w-[250px] h-[450px] rounded-[30px] relative p-[20px]">
            <div className="font-['Montserrat'] text-[18px] leading-[26px] text-white tracking-[0.09px] mb-[200px]">
              /03
            </div>
            <div className="absolute bottom-[80px] left-[20px] w-[50px] h-[50px] bg-white rounded-full"></div>
            <div className="absolute bottom-[30px] left-[20px] right-[20px]">
              <div className="font-['Montserrat'] font-semibold text-[20px] leading-[28px] text-white tracking-[0.1px] mb-[15px]">
                Newbie? Not here.
              </div>
              <div className="font-['Montserrat'] text-[18px] leading-[26px] text-white tracking-[0.09px]">
                Now offering the best of the best at the Academy.
              </div>
            </div>
          </div>
        </div>

        {/* Description Text */}
        <div className="absolute right-[50px] top-[250px] w-[400px] font-['Montserrat'] font-medium text-[20px] leading-[28px] text-white tracking-[0.1px]">
          An All-in-One Solution offering <span className="font-semibold">consultation</span>, <span className="font-semibold">design</span> and <span className="font-semibold">build</span> your web for your business needs.
        </div>

        {/* Consult Now Button */}
        <div className="absolute right-[50px] bottom-[150px] bg-deep-cyan px-[31px] py-[11px] rounded-[30px] inline-flex items-center justify-center">
          <div className="font-['Montserrat'] font-semibold text-[20px] leading-[28px] text-white tracking-[0.1px]">
            Consult Now
          </div>
        </div>
      </div>
    </div>
  );
}