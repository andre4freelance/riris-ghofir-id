import { useState } from "react";
import { Sparkles } from "lucide-react";

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
  badgeLabel?: string;
}

export function ImageWithFallback({
  src,
  alt,
  className = "",
  aspectRatio = "aspect-[3/4]",
  badgeLabel
}: ImageWithFallbackProps) {
  const [error, setError] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-[#F5F5F5] ${aspectRatio} ${className}`}>
      {!error ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={() => setError(true)}
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-[#F9F9F9] to-[#EFEFEF] border border-[#EEEEEE]">
          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-3 text-[#B38E5D] shadow-xs border border-[#E5E5E5]">
            <Sparkles className="w-5 h-5" />
          </div>
          <span className="font-serif italic font-bold text-sm text-[#111111] max-w-[200px] line-clamp-2">
            {alt}
          </span>
          <span className="text-[10px] font-semibold text-[#8E8E93] uppercase tracking-widest mt-1.5">
            Riris Ghofir Atelier
          </span>
          {badgeLabel && (
            <span className="mt-3 text-[10px] bg-[#111111] text-[#B38E5D] font-medium tracking-wider uppercase px-2.5 py-1">
              {badgeLabel}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
