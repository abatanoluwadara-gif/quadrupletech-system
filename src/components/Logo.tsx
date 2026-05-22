import { cn } from '../lib/utils';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export default function Logo({ className, showText = true }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-3 select-none", className)}>
      {/* Circular Brand Logo Image */}
      <img
        src="https://i.ibb.co/zTMQZMZb/Whats-App-Image-2026-05-20-at-4-55-26-AM.jpg"
        alt="Quadrupletech Logo"
        className="w-10 h-10 md:w-12 md:h-12 shrink-0 rounded-full object-cover border border-slate-200 shadow-sm"
        referrerPolicy="no-referrer"
      />

      {showText && (
        <div className="flex flex-col text-left">
          <div className="font-display font-black text-[20px] md:text-[22px] tracking-tight text-current uppercase leading-none">
            QUADRUPLE<span className="text-[#F39C12]">TECH</span>
          </div>
          <div className="text-[10px] font-sans font-bold tracking-[1.5px] opacity-75 text-current uppercase mt-0.5 whitespace-nowrap">
            Quality and Safety...
          </div>
        </div>
      )}
    </div>
  );
}
