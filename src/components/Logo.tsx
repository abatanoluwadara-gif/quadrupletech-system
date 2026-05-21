import { cn } from '../lib/utils';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export default function Logo({ className, showText = true }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-3 select-none", className)}>
      {/* Pristine Circular Brand Badge vector */}
      <svg
        viewBox="0 0 200 200"
        className="w-10 h-10 md:w-12 md:h-12 shrink-0 drop-shadow-sm"
        fill="currentColor"
      >
        {/* Outer Dark Charcoal Border Circle */}
        <circle cx="100" cy="100" r="92" fill="#FFFFFF" stroke="#1E293B" strokeWidth="8" />
        
        {/* Mid-Border Divider Circle */}
        <circle cx="100" cy="100" r="72" fill="none" stroke="#1E293B" strokeWidth="3" />

        {/* Text Paths for Curved Text */}
        <defs>
          {/* Top Arc Path (Left to Right, Clockwise) */}
          <path
            id="logo-top-path"
            d="M 28,100 A 72,72 0 0,1 172,100"
            fill="none"
          />
          {/* Bottom Arc Path (Right to Left, Clockwise) */}
          <path
            id="logo-bottom-path"
            d="M 174,103 A 74,74 0 0,1 26,103"
            fill="none"
          />
        </defs>

        {/* Curved Texts */}
        <text className="font-display font-black tracking-wider uppercase" fontSize="13.5" fill="#1E293B">
          <textPath href="#logo-top-path" startOffset="50%" textAnchor="middle">
            QUADRUPLE TECH
          </textPath>
        </text>

        <text className="font-sans font-extrabold tracking-widest" fontSize="6.5" fill="#1E293B">
          <textPath href="#logo-bottom-path" startOffset="50%" textAnchor="middle">
            ENGINEERING AND SERVICES LIMITED
          </textPath>
        </text>

        {/* Horizontal dividing bars in the border area */}
        <rect x="6" y="96" width="22" height="8" fill="#1E293B" />
        <rect x="172" y="96" width="22" height="8" fill="#1E293B" />

        {/* Central Quadrant Field */}
        {/* Group and clip the quadrant circles to fit neatly */}
        <g>
          {/* Inner boundary circle */}
          <circle cx="100" cy="100" r="54" fill="#FFFFFF" stroke="#1E293B" strokeWidth="4" />
          
          <g style={{ clipPath: "circle(52px at 100px 100px)" }}>
            {/* Top Left: Orange Background and Safety Hard Hat */}
            <path d="M 100,100 L 40,100 A 60,60 0 0,1 100,40 Z" fill="#F39C12" />
            <g transform="translate(68, 65) scale(0.45)">
              {/* Construction Hat Vector */}
              <path
                d="M10,25 C10,13 20,4 32,4 C44,4 54,13 54,25 L50,25 L50,28 L14,28 L14,25 Z M8,28 L56,28 C59,28 59,31 56,31 L8,31 C5,31 5,28 8,28 Z"
                fill="#FFFFFF"
              />
              <rect x="29" y="4" width="6" height="5" fill="#FFFFFF" rx="1" />
            </g>

            {/* Top Right: Dark Blue Background and Mechanical Gears */}
            <path d="M 100,100 L 100,40 A 60,60 0 0,1 160,100 Z" fill="#0072BB" />
            <g transform="translate(110, 60) scale(0.45)">
              {/* Gear 1 */}
              <circle cx="18" cy="18" r="7" fill="none" stroke="#FFFFFF" strokeWidth="4" />
              <path d="M18,6 L18,2 M18,34 L18,30 M6,18 L2,18 M34,18 L30,18 M9.5,9.5 L6.5,6.5 M26.5,26.5 L23.5,23.5 M9.5,26.5 L6.5,29.5 M26.5,9.5 L29.5,6.5" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
              
              {/* Gear 2 (Interlocking) */}
              <g transform="translate(16, 16) scale(0.8)">
                <circle cx="18" cy="18" r="7" fill="none" stroke="#FFFFFF" strokeWidth="4" />
                <path d="M18,6 L18,2 M18,34 L18,30 M6,18 L2,18 M34,18 L30,18" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
              </g>
            </g>

            {/* Bottom Left: Light Blue Background and Industrial Facility */}
            <path d="M 100,100 L 40,100 A 60,60 0 0,0 100,160 Z" fill="#00A8E8" />
            <g transform="translate(62, 110) scale(0.5)">
              {/* Factory / Industry Vector */}
              <path
                d="M6,34 L6,14 L18,22 L18,14 L30,22 L30,10 L38,10 L38,34 Z"
                fill="#FFFFFF"
              />
              <rect x="10" y="24" width="4" height="6" fill="#00A8E8" />
              <rect x="22" y="24" width="4" height="6" fill="#00A8E8" />
              <rect x="32" y="16" width="3" height="4" fill="#00A8E8" />
              <line x1="12" y1="6" x2="12" y2="10" stroke="#FFFFFF" strokeWidth="2" />
              <line x1="24" y1="6" x2="24" y2="10" stroke="#FFFFFF" strokeWidth="2" />
            </g>

            {/* Bottom Right: Red Background and First Aid HSE Shield */}
            <path d="M 100,100 L 100,160 A 60,60 0 0,0 160,100 Z" fill="#E74C3C" />
            <g transform="translate(114, 110) scale(0.5)">
              {/* Shield with Plus cross */}
              <path
                d="M10,8 C20,8 24,4 24,4 C24,4 28,8 38,8 C38,18 34,28 24,34 C14,28 10,18 10,8 Z"
                fill="#FFFFFF"
              />
              {/* Red Cross inside shield */}
              <path
                d="M21,13 L27,13 L27,16 L31,16 L31,22 L27,22 L27,25 L21,25 L21,22 L17,22 L17,16 L21,16 Z"
                fill="#E74C3C"
              />
            </g>
          </g>

          {/* Central Dividing White Cross Lines */}
          <line x1="100" y1="44" x2="100" y2="156" stroke="#1E293B" strokeWidth="4" />
          <line x1="44" y1="100" x2="156" y2="100" stroke="#1E293B" strokeWidth="4" />
        </g>
      </svg>

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
