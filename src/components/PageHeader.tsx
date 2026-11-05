import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface PageHeaderProps {
  kicker: string;
  title: string;
  subtitle: string;
  breadcrumb?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  kicker,
  title,
  subtitle,
  breadcrumb,
}) => {
  return (
    <div className="bg-gradient-to-b from-[#022D22] to-[#063D2D] text-[#FAF6EF] py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-[#B89550]/20 relative overflow-hidden">
      {/* Decorative subtle ambient lights */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#B89550]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-64 h-64 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center relative z-10 space-y-4">
        {/* Breadcrumbs */}
        <div className="flex items-center justify-center gap-2 text-xs font-medium text-[#FAF6EF]/60">
          <Link to="/" className="hover:text-[#D8BD82] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#B89550]" />
          <span className="text-[#D8BD82]">{breadcrumb || title}</span>
        </div>

        {/* Kicker with gold line */}
        <div className="flex items-center justify-center gap-3">
          <span className="w-8 h-[1px] bg-[#B89550]" />
          <span className="text-xs uppercase tracking-widest text-[#D8BD82] font-semibold">
            {kicker}
          </span>
          <span className="w-8 h-[1px] bg-[#B89550]" />
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#FAF6EF] tracking-tight text-balance">
          {title}
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-[#FAF6EF]/80 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      </div>
    </div>
  );
};
