import React, { useState } from 'react';
import {
  Building2,
  Code2,
  Cloud,
  ShieldCheck,
  Cpu,
  Umbrella,
  Shield,
  ArrowRight
} from 'lucide-react';
import RevealText from './RevealText';

function SolutionFillButton({ text, onClick }: { text: string; onClick?: () => void }) {
  const [hovered, setHovered] = useState(false);
  const squareSize = 40;
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        height: 44,
        width: 220,
        borderRadius: 4,
        overflow: "hidden",
        cursor: "pointer",
        background: "#f4f4f4",
        flexShrink: 0,
      }}
    >
      {/* Fill layer */}
      <div style={{
        position: "absolute",
        top: 0, left: 0, bottom: 0,
        background: "#FF5A00",
        width: hovered ? "100%" : squareSize,
        borderRadius: 4,
        transition: "width 380ms cubic-bezier(0.4, 0, 0.2, 1)",
        pointerEvents: "none",
      }} />
      {/* Arrow — slides right */}
      <span style={{
        position: "relative",
        zIndex: 2,
        width: squareSize,
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        flexShrink: 0,
        transform: hovered ? `translateX(calc(100% - ${squareSize}px + 8px))` : "translateX(0)",
        transition: "transform 380ms cubic-bezier(0.4, 0, 0.2, 1)",
      }}>
        <svg width="14" height="12" viewBox="0 0 14 12" fill="none">
          <path d="M1 6h12M8 1l5 5-5 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </span>
      {/* Text — slides left */}
      <span style={{
        position: "relative",
        zIndex: 2,
        paddingLeft: 8,
        paddingRight: 14,
        color: hovered ? "#ffffff" : "#FF5A00",
        fontSize: 15,
        fontFamily: "'Merriweather', serif",
        fontWeight: 400,
        letterSpacing: "-0.3px",
        whiteSpace: "nowrap",
        transform: hovered ? "translateX(-8px)" : "translateX(0)",
        transition: "color 200ms ease, transform 380ms cubic-bezier(0.4, 0, 0.2, 1)",
      }}>
        {text}
      </span>
    </div>
  );
}


const tracksData = [
  {
    id: 'leadership',
    icon: <Building2 className="w-6 h-6 text-[#FF5A00]" />,
    title: 'Leadership Track',
    description: 'Build governance, set KPIs and drive security strategy with measurable business outcomes.',
    link: '#',
    graphic: (
      <div className="relative w-24 h-24 flex items-end justify-center group-hover:scale-105 transition-transform duration-300">
         <div className="absolute bottom-4 left-2 w-4 h-8 bg-orange-100 rounded-t-sm shadow-sm z-10 border border-orange-50"></div>
         <div className="absolute bottom-4 left-8 w-4 h-12 bg-orange-200 rounded-t-sm shadow-sm z-20 border border-orange-50"></div>
         <div className="absolute bottom-4 left-14 w-4 h-16 bg-gradient-to-t from-[#FF5A00] to-orange-400 rounded-t-sm shadow-md z-30 border border-orange-500"></div>
         <div className="absolute bottom-2 -left-2 w-28 h-6 bg-orange-50 rounded-full blur-md opacity-70"></div>
         
         <svg className="absolute bottom-8 left-4 w-16 h-12 text-[#FF5A00] z-40 drop-shadow-md" viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 40 Q 30 50, 50 20 T 100 0" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            <polygon points="90,-5 105,0 95,10" fill="currentColor" />
         </svg>
      </div>
    )
  },
  {
    id: 'engineering',
    icon: <Code2 className="w-6 h-6 text-[#FF5A00]" />,
    title: 'Engineering Track',
    description: 'Embed security into SDLC and strengthen application and infrastructure security.',
    link: '#',
    graphic: (
       <div className="relative w-24 h-24 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
          <div className="absolute w-20 h-20 bg-white rounded-xl shadow-lg border border-gray-100 flex items-center justify-center transform rotate-12 z-20">
             <Code2 className="w-10 h-10 text-[#FF5A00]" strokeWidth={2.5} />
          </div>
          <div className="absolute w-22 h-22 bg-orange-50 rounded-2xl -rotate-6 z-10"></div>
          <div className="absolute -bottom-2 w-24 h-8 bg-orange-50 rounded-full blur-md opacity-80 z-0"></div>
       </div>
    )
  },
  {
    id: 'cloud',
    icon: <Cloud className="w-6 h-6 text-[#FF5A00]" />,
    title: 'Cloud Track',
    description: 'Secure your cloud environments with best practices, automation and continuous monitoring.',
    link: '#',
    graphic: (
      <div className="relative w-24 h-24 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
         <div className="absolute z-20 top-4">
             <svg width="80" height="60" viewBox="0 0 24 24" fill="url(#cloud-grad)" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-lg">
                <defs>
                   <linearGradient id="cloud-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#ffffff" />
                      <stop offset="100%" stopColor="#ffe5d9" />
                   </linearGradient>
                </defs>
                <path d="M17.5 19C19.9853 19 22 16.9853 22 14.5C22 12.1374 20.1852 10.2001 17.8694 10.021C17.4332 6.61868 14.5367 4 11 4C7.13401 4 4 7.13401 4 11C4 11.2335 4.0114 11.4644 4.03362 11.6917C2.28588 12.3551 1 14.027 1 16C1 18.2091 2.79086 20 5 20L17.5 19Z" stroke="#FF5A00" strokeWidth="0.5" />
             </svg>
         </div>
         <div className="absolute bottom-2 w-20 h-6 bg-white rounded-full shadow-md z-10 border border-gray-100 transform translate-y-1"></div>
         <div className="absolute bottom-0 w-24 h-6 bg-orange-50 rounded-full blur-md opacity-80 z-0"></div>
      </div>
    )
  },
  {
    id: 'assurance',
    icon: <ShieldCheck className="w-6 h-6 text-[#FF5A00]" />,
    title: 'Assurance Track',
    description: 'Validate security controls, conduct assessments and strengthen your assurance program.',
    link: '#',
    graphic: (
       <div className="relative w-24 h-24 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
          <div className="absolute z-20 flex items-center justify-center">
             <Shield className="w-16 h-16 text-white fill-orange-50 drop-shadow-lg stroke-[#FF5A00] stroke-1" />
             <div className="absolute text-[#FF5A00]">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                 </svg>
             </div>
          </div>
          <div className="absolute bottom-2 w-20 h-20 bg-white rounded-2xl shadow-sm z-10 transform rotate-45 scale-y-50 translate-y-6 border border-gray-100"></div>
          <div className="absolute bottom-0 w-24 h-6 bg-orange-50 rounded-full blur-md opacity-80 z-0"></div>
       </div>
    )
  },
  {
    id: 'ai',
    icon: <Cpu className="w-6 h-6 text-[#FF5A00]" />,
    title: 'AI Track',
    description: 'Evaluate AI systems, models and workflows for safety, fairness and security.',
    link: '#',
    graphic: (
       <div className="relative w-24 h-24 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
           <div className="absolute z-20 flex items-center justify-center w-16 h-16 bg-white border border-gray-100 rounded-lg shadow-lg transform rotate-12">
               <span className="text-[#FF5A00] font-bold text-xl italic tracking-tighter">AI</span>
           </div>
           
           <div className="absolute z-15 w-20 h-20 transform rotate-12 flex flex-col justify-between p-1">
              <div className="flex justify-between w-full"><div className="w-2 h-1 bg-orange-300 rounded-sm"></div><div className="w-2 h-1 bg-orange-300 rounded-sm"></div><div className="w-2 h-1 bg-orange-300 rounded-sm"></div><div className="w-2 h-1 bg-orange-300 rounded-sm"></div></div>
              <div className="flex justify-between w-full"><div className="w-2 h-1 bg-orange-300 rounded-sm"></div><div className="w-2 h-1 bg-orange-300 rounded-sm"></div><div className="w-2 h-1 bg-orange-300 rounded-sm"></div><div className="w-2 h-1 bg-orange-300 rounded-sm"></div></div>
           </div>

           <div className="absolute bottom-1 w-20 h-20 bg-white rounded-2xl shadow-sm z-10 transform rotate-45 scale-y-50 translate-y-6 border border-gray-100"></div>
           <div className="absolute bottom-0 w-24 h-6 bg-orange-50 rounded-full blur-md opacity-80 z-0"></div>
       </div>
    )
  },
  {
    id: 'risk',
    icon: <Umbrella className="w-6 h-6 text-[#FF5A00]" />,
    title: 'Risk Track',
    description: 'Quantify, prioritize and transfer risk with data-driven insights and insurance readiness.',
    link: '#',
    graphic: (
        <div className="relative w-24 h-24 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
            <div className="absolute z-20 w-16 h-16 transform -rotate-12">
                <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
                    <path d="M50,50 L50,10 A40,40 0 0,1 90,50 Z" fill="#FF5A00" stroke="white" strokeWidth="2" />
                    <path d="M50,50 L90,50 A40,40 0 0,1 50,90 Z" fill="#FFA366" stroke="white" strokeWidth="2" />
                    <path d="M50,50 L50,90 A40,40 0 0,1 10,50 Z" fill="#FFE5D9" stroke="white" strokeWidth="2" />
                    <path d="M50,50 L10,50 A40,40 0 0,1 50,10 Z" fill="transparent" />
                    <circle cx="50" cy="50" r="15" fill="white" />
                </svg>
            </div>
            <div className="absolute bottom-1 w-20 h-20 bg-white rounded-2xl shadow-sm z-10 transform rotate-45 scale-y-50 translate-y-6 border border-gray-100"></div>
            <div className="absolute bottom-0 w-24 h-6 bg-orange-50 rounded-full blur-md opacity-80 z-0"></div>
        </div>
    )
  }
];

export default function SolutionTracks({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <div className="min-h-screen bg-[#fafaf9] font-['Merriweather_Sans',sans-serif] text-slate-800 p-6 md:p-12 lg:p-20 selection:bg-orange-200">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header Section */}
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-[#FF5A00]/30 bg-white shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#FF5A00] mr-2"></span>
            <span className="text-xs font-bold tracking-wider text-[#FF5A00] uppercase font-serif">
              <RevealText text="Our Solution Tracks" />
            </span>
          </div>
          
          {/* Main Title */}
          <h1 className="text-[clamp(1.75rem,5vw,3.75rem)] font-normal tracking-tight text-slate-900 font-serif">
             <RevealText text="Solutions for " />
             <span className="text-[#FF5A00]">
               <RevealText text="Every Security Function" />
             </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-[16px] text-slate-500 font-['Merriweather_Sans:Light',sans-serif] font-light leading-relaxed">
            <RevealText text="Purpose-built tracks that help security teams build, operate and improve across their core functional areas." />
          </p>
        </div>

        {/* Tracks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tracksData.map((track) => (
            <div 
              key={track.id} 
              className="group bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 flex flex-col h-full cursor-pointer relative overflow-hidden"
            >
              {/* Icon Container */}
              <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center mb-6">
                {track.icon}
              </div>
              
              {/* Content */}
              <div className="flex-grow z-10">
                <h3 className="text-xl font-normal text-slate-900 mb-3 group-hover:text-[#FF5A00] transition-colors font-serif">
                  <RevealText text={track.title} />
                </h3>
                <p className="text-slate-500 leading-relaxed text-[16px] font-['Merriweather_Sans:Light',sans-serif] font-light pr-12">
                  <RevealText text={track.description} />
                </p>
              </div>
              
              {/* Link */}
              <div className="mt-8 z-10 flex items-center">
                 <a 
                   href={track.link} 
                   className="inline-flex items-center min-h-[44px] text-sm font-semibold text-[#FF5A00] group-hover:underline underline-offset-4 font-['Merriweather_Sans:Regular',sans-serif] !italic"
                 >
                   <RevealText text="Learn more" />
                   <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                 </a>
              </div>

              {/* Decorative Graphic Positioned Bottom Right */}
              <div className="absolute bottom-4 right-4 pointer-events-none opacity-90 group-hover:opacity-100 transition-opacity">
                 {track.graphic}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
           <div className="flex items-start md:items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-orange-50 flex-shrink-0 flex items-center justify-center mt-1 md:mt-0">
                 <ShieldCheck className="w-5 h-5 text-[#FF5A00]" />
              </div>
              <div>
                 <p className="text-slate-700 text-sm md:text-base font-['Merriweather_Sans:Light',sans-serif] font-light">
                    <span className="font-normal text-slate-900 font-serif">
                      <RevealText text="One Platform. Every Function. Real Impact." />
                    </span>{" "}
                    <RevealText text="Unify your security programs and drive continuous improvement across people, process and technology." />
                 </p>
              </div>
           </div>
           
           <SolutionFillButton text="Explore All Tracks" onClick={() => onNavigate?.("contact")} />
        </div>

      </div>
    </div>
  );
}
